// src/Home/HomePage.js
import React from 'react';
import Hero from './Hero';
import FeaturesSection from './Feature';
import TestimonialsSection from './Testimonials';
import QuizBanner from '../QuizBanner';

function HomePage() {
  return (
    <div>
      <Hero />
      <QuizBanner />
      <FeaturesSection />
      <TestimonialsSection />
      
    </div>
  );
}

export default HomePage;
