import { createContext, useContext, useEffect, useState } from 'react';
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
import {
  createUserProfile,
  getUserProfile,
  updateUserProfile as updateDbProfile
} from '../services/database';
import { sendWelcomeEmail, sendProfileUpdateEmail } from '../services/email';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sign up with email/password
  const signup = async (email, password, name, district, classStream) => {
    try {
      // Create auth user
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(user, { displayName: name });
      
      // Create user profile in Firestore
      try {
        await createUserProfile(user.uid, {
          name,
          email,
          district,
          classStream
        });
      } catch (dbError) {
        console.error("Failed to create user profile:", dbError);
        // Consider rolling back auth user creation if db fails
        await user.delete();
        throw dbError;
      }

      // Send welcome email (non-blocking)
      try {
        const userData = {
          ...user,
          displayName: name,
          district,
          classStream
        };
        await sendWelcomeEmail(userData);
      } catch (emailError) {
        console.warn("Failed to send welcome email:", emailError);
      }
      
      return user;
    } catch (error) {
      console.error("Signup error:", error);
      throw error;
    }
  };

  // Sign in with email/password
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign in with Google
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      if (!result.user) return null;

      try {
        // Always create/update user profile on Google sign-in
        await createUserProfile(result.user.uid, {
          name: result.user.displayName,
          email: result.user.email,
          district: '',
          classStream: ''
        });

        // Send welcome email for new Google sign-ups
        try {
          await sendWelcomeEmail(result.user);
        } catch (emailError) {
          console.warn("Failed to send welcome email:", emailError);
        }
      } catch (dbError) {
        console.error("Failed to create user document:", dbError);
        throw dbError; // Propagate database errors
      }
      
      return result.user;
    } catch (error) {
      console.error("Google sign in error:", error);
      throw error;
    }
  };

  // Sign out
  const logout = () => {
    return signOut(auth);
  };

  // Update user profile
  const updateUserProfile = async (displayName, district, classStream) => {
    try {
      await updateProfile(auth.currentUser, { displayName });
      
      const userUpdate = {
        name: displayName,
        email: auth.currentUser.email,
        district,
        classStream
      };
      
      await updateDbProfile(auth.currentUser.uid, userUpdate);
      
      // Update local user state
      const updatedUser = {
        ...auth.currentUser,
        displayName,
        district,
        classStream
      };
      setUser(updatedUser);
      
      return updatedUser;
    } catch (error) {
      console.error("Profile update error:", error);
      throw error;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userData = await getUserProfile(user.uid);
          if (userData) {
            setUser({ 
              ...user, 
              district: userData.district,
              classStream: userData.classStream
            });
          } else {
            setUser(user);
          }
        } catch (error) {
          console.warn("Failed to get user data on auth state change:", error);
          setUser(user);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    user,
    loading,
    signup,
    login,
    signInWithGoogle,
    logout,
    updateUserProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};