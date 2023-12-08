import React from 'react';
import { NavLink } from 'react-router-dom';

import links from './link.js';

const Sidebar = () => {
  return (
    <>
      <div className="hidden md:block bg-blue-800 text-white fixed top-0 right-0 overflow-hidden md:relative md:static md:w-[10rem] px-5 h-screen rounded-r-[3rem]">
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
    </>
  );
};

export default Sidebar;
