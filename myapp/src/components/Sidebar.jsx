import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaBriefcase, FaFolderOpen, FaEnvelope, FaUser, FaPen } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <footer className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-900 text-white border-t border-gray-700 z-[1]">
      <nav className="flex justify-center items-center py-3 space-x-6 overflow-x-auto ">
        {/* Home */}
        <NavLink
          to="/"
          className="flex flex-col items-center text-sm transition-transform duration-300 ease-in-out transform hover:scale-110"
          activeClassName="text-blue-400 scale-125"
        >
          <FaHome className="text-xl mb-1 transition-all duration-200" />
          <span>Home</span>
        </NavLink>

        {/* Experience */}
        <NavLink
          to="/experience"
          className="flex flex-col items-center text-sm transition-transform duration-300 ease-in-out transform hover:scale-110"
          activeClassName="text-blue-400 scale-125"
        >
          <FaBriefcase className="text-xl mb-1 transition-all duration-200" />
          <span>Experience</span>
        </NavLink>

        {/* Projects */}
        <NavLink
          to="/projects"
          className="flex flex-col items-center text-sm transition-transform duration-300 ease-in-out transform hover:scale-110"
          activeClassName="text-blue-400 scale-125"
        >
          <FaFolderOpen className="text-xl mb-1 transition-all duration-200" />
          <span>Projects</span>
        </NavLink>

        {/* Contact */}
        <NavLink
          to="/contact"
          className="flex flex-col items-center text-sm transition-transform duration-300 ease-in-out transform hover:scale-110"
          activeClassName="text-blue-400 scale-125"
        >
          <FaEnvelope className="text-xl mb-1 transition-all duration-200" />
          <span>Contact</span>
        </NavLink>

        {/* Blog */}
        <NavLink
          to="/blog"
          className="flex flex-col items-center text-sm transition-transform duration-300 ease-in-out transform hover:scale-110"
          activeClassName="text-blue-400 scale-125"
        >
          <FaPen className="text-xl mb-1 transition-all duration-200" />
          <span>Blog</span>
        </NavLink>
      </nav>
    </footer>
  );
};

export default Sidebar;
