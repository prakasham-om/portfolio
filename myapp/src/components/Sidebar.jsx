import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import links from './link.js';

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Sidebar animation on hover (expanding the sidebar and sliding the text out)
  const sidebarAnimation = useSpring({
    width: isHovered ? '14rem' : '5rem', // Sidebar expands on hover
    config: { friction: 20, tension: 200 }
  });

  // Animation for links - moving text out like buttons
  const linkTextAnimation = useSpring({
    transform: isHovered ? 'translateX(0)' : 'translateX(-100%)', // Links slide out of sidebar
    opacity: isHovered ? 1 : 0, // Fade in the text when sidebar expands
    config: { friction: 25, tension: 200 }
  });

  return (
    <animated.div
      style={sidebarAnimation}
      className="hidden md:block bg-blue-800 text-white fixed top-0 right-0 h-screen rounded-r-[3rem] transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ul className="py-4 flex flex-col items-center justify-center">
        {links.map((link, index) => (
          <li key={index} className="relative">
            <NavLink
              to={link.to}
              exact="true"
              className="block px-4 py-2 hover:bg-gray-700 transition-all duration-300 w-full flex justify-center items-center"
            >
              <animated.div
                style={linkTextAnimation}
                className="text-center text-sm font-medium"
              >
                {link.text}
              </animated.div>
            </NavLink>
          </li>
        ))}
      </ul>
    </animated.div>
  );
};

export default Sidebar;
