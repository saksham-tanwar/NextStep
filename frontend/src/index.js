import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './Navbar';
import Hero from './Home/Hero';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar /> 
    <Hero />
    
  
  </BrowserRouter>
);

