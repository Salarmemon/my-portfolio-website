import React from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Header from './components/header';
import Contact from './components/contact';
import About from './pages/about';
import Projects from './pages/projects';
import Certifications from './pages/certifications';
import { tr } from 'framer-motion/client';

function App() {

  const buttonVariants = {
    hover: {
      scale: 1.2,
      textShadow: "0 0 8px #fff, 0 0 20px #99aef1",
      boxShadow: "0 0 18px #a9f9ff",
      rotate: 1,


      transition: {       
         duration: 0.5,
      
      }
    }


  }
  return (
    <div className="App">
      <HashRouter>
        <Header />

        <Routes>
          <Route path="/" element={<About buttonVariants={buttonVariants} />} />
    
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
        </Routes>
        <Contact/>
      </HashRouter>
    </div>
  )
}
export default App;
