import { db } from '../firebase';
import { 
  doc, 
  getDoc, 
  setDoc, 
  collection, 
  query, 
  where, 
  getDocs, 
  updateDoc 
} from 'firebase/firestore';

export const userCollection = 'users';
export const assessmentCollection = 'assessments';
export const quizCollection = 'quizzes';
export const resultsCollection = 'results';

// User Profile Operations
export const createUserProfile = async (userId, data) => {
  try {
    const userRef = doc(db, userCollection, userId);
    await setDoc(userRef, {
      ...data,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
    return true;
  } catch (error) {
    console.error('Error creating user profile:', error);
    throw error;
  }
};

export const getUserProfile = async (userId) => {
  try {
    const userRef = doc(db, userCollection, userId);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      return { id: userSnap.id, ...userSnap.data() };
    }
    return null;
  } catch (error) {
    console.error('Error getting user profile:', error);
    throw error;
  }
};

export const updateUserProfile = async (userId, data) => {
  try {
    const userRef = doc(db, userCollection, userId);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      // Create the document if it doesn't exist
      await setDoc(userRef, {
        ...data,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
    } else {
      // Update existing document
      await updateDoc(userRef, {
        ...data,
        updatedAt: new Date().toISOString()
      });
    }
    return true;
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
};

// Assessment Operations
export const saveAssessmentResult = async (userId, assessmentData) => {
  try {
    const resultRef = doc(collection(db, resultsCollection));
    await setDoc(resultRef, {
      userId,
      type: 'assessment',
      ...assessmentData,
      createdAt: new Date().toISOString()
    });
    return resultRef.id;
  } catch (error) {
    console.error('Error saving assessment result:', error);
    throw error;
  }
};

export const getUserAssessments = async (userId) => {
  try {
    const q = query(
      collection(db, resultsCollection),
      where('userId', '==', userId),
      where('type', '==', 'assessment')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error getting user assessments:', error);
    throw error;
  }
};

// Quiz Operations
export const saveQuizResult = async (userId, quizData) => {
  try {
    const resultRef = doc(collection(db, resultsCollection));
    await setDoc(resultRef, {
      userId,
      type: 'quiz',
      ...quizData,
      createdAt: new Date().toISOString()
    });
    return resultRef.id;
  } catch (error) {
    console.error('Error saving quiz result:', error);
    throw error;
  }
};

export const getUserQuizzes = async (userId) => {
  try {
    const q = query(
      collection(db, resultsCollection),
      where('userId', '==', userId),
      where('type', '==', 'quiz')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error getting user quizzes:', error);
    throw error;
  }
};

// Generic Results Operations
export const getResult = async (resultId) => {
  try {
    const resultRef = doc(db, resultsCollection, resultId);
    const resultSnap = await getDoc(resultRef);
    if (resultSnap.exists()) {
      return { id: resultSnap.id, ...resultSnap.data() };
    }
    return null;
  } catch (error) {
    console.error('Error getting result:', error);
    throw error;
  }
};