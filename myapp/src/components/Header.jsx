import React, { useState, useEffect } from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMenu } from 'react-icons/ai';
import { FaLaptopCode } from 'react-icons/fa';
import { animated, useSpring } from 'react-spring';
import { NavLink } from 'react-router-dom';
import links from './link.js';

const Header = ({ isOpen, toggleMenu }) => {
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    const firstVisit = localStorage.getItem('firstVisit');
    if (!firstVisit) {
      setIsFirstVisit(true);
      localStorage.setItem('firstVisit', 'true');
    }
  }, []);

  // Animation properties for the rainbow effect
  const rainbowAnimation = useSpring({
    loop: true,
    from: { fontSize: '1rem', color: 'hsl(0, 100%, 50%)' },
    to: [
      { fontSize: '0.7rem', color: 'hsl(60, 100%, 50%)' },
      { fontSize: '0.4rem', color: 'hsl(120, 100%, 50%)' },
      { fontSize: '0.5rem', color: 'hsl(180, 100%, 50%)' },
      { fontSize: '1rem', color: 'hsl(240, 100%, 50%)' },
      { fontSize: '0.8rem', color: 'hsl(300, 100%, 50%)' },
      { fontSize: '1rem', color: 'hsl(360, 100%, 50%)' },
    ],
    config: { duration: 5000 },
  });

  // Close the menu when a link is clicked (on mobile)
  const handleLinkClick = () => {
    if (isOpen) {
      toggleMenu(); // Close the mobile menu
    }
  };

  return (
    <animated.header className="bg-gradient-to-r from-blue-900 via-purple-800 to-indigo-700 text-white py-4 md:py-6 z-50 sticky top-0 shadow-lg backdrop-blur-md">
      <div className="px-6 flex justify-between items-center">
        {/* Mobile Menu Button */}
        <span className="block md:hidden items-center">
          <button
            onClick={toggleMenu}
            className="p-3 text-white hover:text-blue-300 transition duration-300"
          >
            <AiOutlineMenu size={25} />
          </button>
          {isOpen && (
            <div className="fixed left-0 top-0 w-full text-white z-30 bg-gray-900 bg-opacity-80">
              <ul className="py-6">
                {links.map((link, index) => (
                  <li key={index}>
                    <NavLink
                      to={link.to}
                      exact="true"
                      className="block px-6 py-3 text-lg font-medium hover:bg-blue-500 hover:text-white transition duration-200"
                      activeClassName="bg-blue-500 text-white"
                      onClick={handleLinkClick} // Close menu when clicked
                    >
                      {link.text}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </span>

        {/* Animated Title */}
        <animated.div style={rainbowAnimation} className="text-3xl font-extrabold flex items-center space-x-3">
          <FaLaptopCode size={28} className="hidden md:flex text-purple-400" />
          <span className="md:flex-grow text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            |||||||||
          </span>
        </animated.div>

        {/* Social Icons */}
        <div className="flex space-x-6 text-center">
          <a
            href="https://github.com/prakasham-om"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            <AiFillGithub size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/prakash-sahoo-ba3b942a1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition duration-300"
          >
            <AiFillLinkedin size={32} />
          </a>
        </div>
      </div>

      {/* First-time visit message */}
      {isFirstVisit && (
        <div className="first-time-message bg-indigo-500 text-white py-2 px-6 rounded-md mt-4 text-center">
          Welcome! Thanks for visiting my portfolio for the first time! 🎉
        </div>
      )}
    </animated.header>
  );
};

export default Header;
