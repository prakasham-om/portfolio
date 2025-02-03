// Layout.js
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Sidebar from './Sidebar';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import JsTopic from './JsTopic';

const Layout = () => {
  

  return (
    
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 overflow-x-hidden overflow-y-auto">
          <Routes>
            <Route path="/" exact element={<About />} />
            <Route path="/experience" exact element={<Experience />} />
            <Route path="/projects"exact  element={<Projects />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/blog" element={<JsTopic/>}/>
          </Routes>
        </div>
      </div>

  );
};



export default Layout;
