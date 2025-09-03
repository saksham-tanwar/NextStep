import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import UserProfile from './components/Auth/UserProfile';
import Home from './Home/Home';
import Navbar from './Navbar';
import QuizPage from './AptitudeTest/QuizPage';
import Assessment from './components/Assessment/Assessment';
import CollegesSection from './CollegesSection';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <UserProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/assessment"
            element={
              <ProtectedRoute>
                <Assessment />
              </ProtectedRoute>
            }
          />
          {/* College */}
          <Route path="/colleges" element={<CollegesSection />} />
          <Route path="*" element={<h1>404: Page Not Found</h1>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;