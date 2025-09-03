import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

// Pages
import HomePage from './Home/HomePage';
import Signup from './SignUp';
import QuizBanner from './QuizBanner';

// Layout Components
import Navbar from './Navbar';
import Footer from './Footer';
import QuizPage from './AptitudeTest/QuizPage';
import CollegesSection from './CollegesSection';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar /> 
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/AptitudeTest" element={<QuizPage />} />
          <Route path="/Colleges" element={<CollegesSection />} />
        </Routes>
      </main>
      <Footer /> 
    </BrowserRouter>
  </React.StrictMode>
);
