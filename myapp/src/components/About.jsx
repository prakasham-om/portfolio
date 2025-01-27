import React from 'react';
import { animated, useSpring } from 'react-spring';
import { FaNode, FaJs, FaReact, FaAws, FaAngular } from 'react-icons/fa';
import { DiMongodb } from "react-icons/di";
import profile from '../assets/profile.jpeg';

function About() {
  const downloadCV = () => {
    const pdfPath = '/your_cv.pdf';
    const link = document.createElement('a');
    link.href = pdfPath;
    link.target = '_blank';
    link.download = 'PRAKASH_Res.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const iconFade = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
    config: { duration: 1500 },
  });

  return (
    <section id="about" className="py-16 px-8 md:px-20 bg-gray-50 text-gray-800">
      <animated.h2
        style={fadeIn}
        className="text-4xl font-semibold text-center text-indigo-600 mb-6"
      >
        Prakash Chandra Sahoo
      </animated.h2>

      <div className="md:flex items-center md:gap-10 mb-12">
        <div className="flex justify-center md:justify-start mb-6 md:mb-0">
          <img
            src={profile}
            alt="Prakash Chandra Sahoo"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full shadow-lg"
          />
        </div>

        <div className="text-center md:text-left">
          <animated.p style={fadeIn} className="text-lg leading-relaxed text-gray-700 mb-4">
            I'm Prakash, a passionate software developer with over 3 years of experience
            in creating robust and scalable applications. I specialize in React, Node.js, 
            Angular, MongoDB, and AWS. With a solid background in both front-end and 
            back-end development, I focus on delivering high-quality, efficient solutions. 
            I am driven by challenges and always eager to enhance my skills to meet 
            evolving technology needs.
          </animated.p>

          <button
            onClick={downloadCV}
            className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-500 transition duration-300 mt-4 shadow-lg transform hover:scale-105"
          >
            Download CV
          </button>
        </div>
      </div>

      <animated.p style={fadeIn} className="text-center text-lg text-gray-600">
        Thank you for visiting! Feel free to connect with me to discuss exciting opportunities or collaboration.
      </animated.p>

      <animated.div
        style={iconFade}
        className="flex justify-center gap-8 mt-12"
      >
        <FaReact size={50} className="text-blue-500 hover:text-blue-600 transition duration-300" />
        <FaNode size={50} className="text-green-600 hover:text-green-700 transition duration-300" />
        <FaJs size={50} className="text-yellow-500 hover:text-yellow-600 transition duration-300" />
        <DiMongodb size={50} className="text-green-800 hover:text-green-900 transition duration-300" />
        <FaAws size={50} className="text-orange-500 hover:text-orange-600 transition duration-300" />
        <FaAngular size={50} className="text-red-600 hover:text-red-700 transition duration-300" />
      </animated.div>
    </section>
  );
}

export default About;
