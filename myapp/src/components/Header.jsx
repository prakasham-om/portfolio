// Header.js
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 sticky top-0 z-50 shadow-lg">
      <div className="px-4 mx-auto flex justify-between items-center max-w-6xl">
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Portfolio
        </h1>
        
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
