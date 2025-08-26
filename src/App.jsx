import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Navbar from  './components/navbar'
import HeroSection from './components/heroSection'
import './App.css'; 

function App() {

  return (
    <>
    <Navbar/>
    <div className='max-w-7xl mx-auto pt-20 px-6'>
      <HeroSection/>
    </div>
    
    </>
  );
}

export default App;
