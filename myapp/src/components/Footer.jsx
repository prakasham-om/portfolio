// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="hidden md:block bg-gray-900 text-white py-6 mt-auto">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Prakash Sahoo. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
