import React, { useState } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom'; // Use Link if you are using React Router.
import { GiCarnivalMask } from 'react-icons/gi';
const Header = () => {
  const [activeLink, setActiveLink] = useState('home'); // state to track the active link
  return (
    <header className="bg-gray-900 text-white py-4 sticky top-0 z-50 shadow-lg">
      <div className="px-4 mx-auto flex justify-between items-center max-w-6">
        <GiCarnivalMask className="text-2xl font-signature font-bold text-orange-500 hover:text-red-800  transition-colors duration-100" />
        {/* Navigation Links */}
      
        <nav className="hidden md:flex space-x-6">
          <Link
            to="/"
            onClick={() => setActiveLink('home')}
            className={`text-lg ${activeLink === 'home' ? 'text-blue-400' : 'text-white'} hover:text-blue-400 transition-colors`}
          >
            Home
          </Link>
          <Link
            to="/experience"
            onClick={() => setActiveLink('experience')}
            className={`text-lg ${activeLink === 'experience' ? 'text-blue-400' : 'text-white'} hover:text-blue-400 transition-colors`}
          >
            Experience
          </Link>
          <Link
            to="/projects"
            onClick={() => setActiveLink('projects')}
            className={`text-lg ${activeLink === 'projects' ? 'text-blue-400' : 'text-white'} hover:text-blue-400 transition-colors`}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            onClick={() => setActiveLink('contact')}
            className={`text-lg ${activeLink === 'contact' ? 'text-blue-400' : 'text-white'} hover:text-blue-400 transition-colors`}
          >
            Contact
          </Link>
          <Link
            to="/blog"
            onClick={() => setActiveLink('blog')}
            className={`text-lg ${activeLink === 'blog' ? 'text-blue-400' : 'text-white'} hover:text-blue-400 transition-colors`}
          >
            Blog
          </Link>
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/prakasham-om"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
            aria-label="GitHub Profile"
          >
            <AiFillGithub className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/prakash-sahoo-ba3b942a1/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <AiFillLinkedin className="text-2xl" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
