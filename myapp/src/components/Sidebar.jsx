// Sidebar.js (Mobile Footer)
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaBriefcase, FaFolderOpen, FaEnvelope } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <footer className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-900 text-white border-t border-gray-700 z-[1]">
      <nav className="flex justify-around items-center py-3">
        <NavLink 
          to="/" 
          className="flex flex-col items-center text-sm transition-all duration-200"
          activeClassName="text-blue-400 scale-110"
          exact
        >
          <FaHome className="text-xl mb-1" />
          <span>Home</span>
        </NavLink>

        <NavLink 
          to="/experience" 
          className="flex flex-col items-center text-sm transition-all duration-200"
          activeClassName="text-blue-400 scale-110"
        >
          <FaBriefcase className="text-xl mb-1" />
          <span>Experience</span>
        </NavLink>

        <NavLink 
          to="/projects" 
          className="flex flex-col items-center text-sm transition-all duration-200"
          activeClassName="text-blue-400 scale-110"
        >
          <FaFolderOpen className="text-xl mb-1" />
          <span>Projects</span>
        </NavLink>

        <NavLink 
          to="/contact" 
          className="flex flex-col items-center text-sm transition-all duration-200"
          activeClassName="text-blue-400 scale-110"
        >
          <FaEnvelope className="text-xl mb-1" />
          <span>Contact</span>
        </NavLink>
      </nav>
    </footer>
  );
};

export default Sidebar;
