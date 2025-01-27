import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import links from './link.js';

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Sidebar animation on hover
  const sidebarAnimation = useSpring({
    width: isHovered ? '14rem' : '10rem', // Sidebar width changes on hover
    config: { friction: 20, tension: 200 }
  });

  // Link hover animation
  const linkAnimation = useSpring({
    transform: isHovered ? 'scale(1.05)' : 'scale(1)', // Scale up the links when hovered
    config: { friction: 20, tension: 150 }
  });

  return (
    <animated.div
      style={sidebarAnimation}
      className="hidden md:block bg-blue-800 text-white fixed top-0 right-0 overflow-hidden md:relative md:static px-5 h-screen rounded-r-[3rem] transition-all duration-300"
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
              <animated.span style={linkAnimation}>
                {link.text}
              </animated.span>
            </NavLink>
          </li>
        ))}
      </ul>
    </animated.div>
  );
};

export default Sidebar;
