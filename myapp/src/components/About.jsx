import React from 'react';
import { animated, useSpring } from 'react-spring';
import { FaNode, FaJs, FaReact, FaAws, FaAngular } from 'react-icons/fa';
import { DiMongodb } from "react-icons/di";
import profile from '../assets/profile.jpeg';
import resumeM from '../assets/prakash.pdf';

function About() {
  const downloadCV = () => {
    const pdfPath = resumeM;
    const link = document.createElement('a');
    link.href = pdfPath;
    link.target = '_blank';
    link.download = 'prakash_s.pdf';
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
    <section id="about" className="py-16 px-8 md:px-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white min-h-screen flex flex-col md:flex-row items-center justify-center md:space-x-12">
      {/* Left side - Profile Card */}
      <div className="flex justify-center md:justify-start items-center mb-10 md:mb-0 w-full md:w-1/3">
        <div className="bg-gray-700 text-yellow-800 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out max-w-xs w-full p-6 text-center">
          <img
            src={profile}
            alt="Prakash Chandra Sahoo"
            className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-indigo-500 shadow-xl"
          />
          <animated.h2 style={fadeIn} className="text-2xl font-semibold text-indigo-600 mb-1">
            Prakash Chandra Sahoo
          </animated.h2>
          <animated.div style={iconFade} className="flex justify-center gap-3 mt-1">
            <FaReact size={60} className="text-blue-500 hover:text-blue-600 transition duration-300" />
            <FaNode size={60} className="text-green-600 hover:text-green-700 transition duration-300" />
            <FaJs size={60} className="text-yellow-500 hover:text-yellow-600 transition duration-300" />
            <DiMongodb size={60} className="text-green-800 hover:text-green-900 transition duration-300" />
            <FaAws size={60} className="text-orange-500 hover:text-orange-600 transition duration-300" />
            <FaAngular size={60} className="text-red-600 hover:text-red-700 transition duration-300" />
          </animated.div>
          <p className="text-lg text-yellow-700 mb-4">Full Stack Developer</p>
          <button
            onClick={downloadCV}
            className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-lg transform hover:scale-105"
          >
            Download CV
          </button>
        </div>
      </div>

      {/* Right side - About text */}
      <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left w-full md:w-2/3">
        <animated.p style={fadeIn} className="text-lg leading-relaxed mb-4">
          I’m Prakash, a passionate software developer with over 3 years of experience in creating modern web applications. My expertise spans across both front-end and back-end development, specializing in **React**, **Node.js**, **Angular**, **MongoDB**, and **AWS**.
        </animated.p>

        <animated.p style={fadeIn} className="text-lg leading-relaxed mb-6">
          I believe in crafting scalable and efficient solutions, whether it's optimizing user interfaces, building robust APIs, or deploying apps to the cloud. I'm constantly learning new technologies to stay at the cutting edge and deliver the best outcomes for projects.
        </animated.p>

        <animated.p style={fadeIn} className="text-lg leading-relaxed mb-6">
          Let's collaborate! I’m always open to new challenges and opportunities to make an impact. Whether you're looking to enhance user experiences or scale your systems, I’d love to work with you to bring ideas to life.
        </animated.p>
      </div>
    </section>
  );
}

export default About;
