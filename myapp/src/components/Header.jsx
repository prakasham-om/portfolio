// Header.js
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMenu } from 'react-icons/ai';
import { FaLaptopCode } from 'react-icons/fa';
import { animated, useSpring } from 'react-spring';
import { NavLink } from 'react-router-dom';
import links from './link.js';

const Header = ({ isOpen, toggleMenu }) => {
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

  return (
    <animated.header className="bg-gray-900 text-white py-2 md:py-4 z-50 sticky top-0 ">
      <div className="px-3 flex justify-between items-center">
        {/* Text with rainbow animation */}
        <span className="block md:hidden items-center">
          <button onClick={toggleMenu} className="p-3 text-white">
            <AiOutlineMenu size={25} />
          </button>
          {isOpen && (
            <div className="fixed left-0 w-full text-white z-30 bg-gray-800 bg-opacity-100" onClick={toggleMenu}>
              <ul className="py-4">
                {links.map((link, index) => (
                  <li key={index}>
                    <NavLink
                      to={link.to}
                      exact="true"
                      className="block px-4 py-2 hover:bg-gray-700"
                      
                    >
                      {link.text}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </span>

        <animated.div style={rainbowAnimation} className="text-2xl font-bold flex items-center">
          <FaLaptopCode size={25} className="hidden md:flex" />
          <span className="md:flex-grow ">Prakash Chandra Sahoo</span>
        </animated.div>

        {/* Icons */}
        <div className="flex space-x-4 text-center">
          <a href="https://github.com/prakasham-om" target="_blank" rel="noopener noreferrer" className="text-white">
            <AiFillGithub size={30} className="text-gray-700" />
          </a>
          <a
            href="https://www.linkedin.com/in/prakash-sahoo-ba3b942a1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <AiFillLinkedin size={30} className="mr-5 text-blue-700" />
          </a>
        </div>
      </div>
    </animated.header>
  );
};

export default Header;
