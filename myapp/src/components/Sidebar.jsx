import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { FaHome, FaUserAlt, FaCog, FaBriefcase } from 'react-icons/fa'; // You can use any icons you prefer
import links from './link.js';

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Sidebar animation on hover (desktop)
  const sidebarAnimation = useSpring({
    width: isHovered ? '14rem' : '10rem',
    config: { friction: 20, tension: 200 }
  });

  // Link hover animation (desktop)
  const linkAnimation = useSpring({
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    config: { friction: 20, tension: 150 }
  });

  return (
    <div>
      {/* Sidebar for desktop */}
      <animated.div
        style={sidebarAnimation}
        className="hidden md:block bg-blue-800 text-white fixed top-0 left-0 overflow-hidden px-5 h-screen rounded-r-[3rem] transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <ul className="py-4">
          {links.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.to}
                exact="true"
                className="block px-4 py-2 hover:bg-gray-700 transition-all duration-300"
                activeClassName="bg-gray-600"
              >
                <animated.span style={linkAnimation} className="flex items-center">
                  {link.icon}
                  <span className="ml-2">{link.text}</span>
                </animated.span>
              </NavLink>
            </li>
          ))}
        </ul>
      </animated.div>

      {/* Footer for mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-blue-800 text-white py-2 flex justify-around items-center z-[1]">
        <ul className="flex w-full justify-around">
          {links.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.to}
                exact="true"
                className="block px-4 py-2 hover:bg-gray-700 transition-all duration-300"
                activeClassName="bg-gray-600"
              >
                <div className="flex flex-col items-center">
                  {link.icon}
                  <span className="mt-1 text-sm">{link.text}</span>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
