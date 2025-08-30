import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Navbar from  './components/navbar'
import HeroSection from './components/heroSection'
import Feather from './components/feature';
import Workflow from './components/workflow';
import Price from './components/Price';
import Testimonials from './components/Testimonials'
import Footer from './components/footer'

import './App.css'; 

function App() {

  return (
    <>
    <Navbar/>
    <div className='max-w-7xl mx-auto pt-20 px-6'>
      <HeroSection/>
      <Feather/>
      <Workflow/>
      <Price/>
      <Testimonials/>
      <Footer/>
    </div>

    {/* <div className='max-w-7xl mx-auto pt-20 px-6'>
    </div>
     */}
    </>
  );
}

export default App;
