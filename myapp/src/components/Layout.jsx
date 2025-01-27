// Layout.js
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Sidebar from './Sidebar';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';

const Layout = () => {
  

  return (
    
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 overflow-x-hidden overflow-y-auto">
          <Routes>
            <Route path="/" exact element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" exact element={<About />} />
          </Routes>
        </div>
      </div>

  );
};



export default Layout;
