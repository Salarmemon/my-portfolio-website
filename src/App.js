import React from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Header from './components/header';
import Contact from './components/contact';
import About from './pages/about';
import Projects from './pages/projects';
import Certifications from './pages/certifications';
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />

        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
        </Routes>
        <Contact/>
      </HashRouter>
    </div>
  )
}
export default App;
