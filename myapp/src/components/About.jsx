import React from 'react';
import { animated, useSpring } from 'react-spring';
import { FaNode, FaJs, FaReact, FaAws, FaAngular } from 'react-icons/fa';
import { DiMongodb } from "react-icons/di";
import profile from '../assets/profile.jpeg';
import resumeM from '../assets/prakash.pdf'

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
    <section id="about" className="py-16 px-8 md:px-20 bg-gray-50 text-gray-800 min-h-screen grid grid-cols-1 md:grid-cols-1 gap-10">
      <div className="flex justify-center mb-6 md:mb-0">
        {/* Profile Card */}
        <div className="w-72 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-green-600 transition-all duration-300 ease-in-out">
          <div className="p-4 text-center">
            <img
              src={profile}
              alt="Prakash Chandra Sahoo"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-green-500"
            />
            <animated.h2 style={fadeIn} className="text-2xl font-semibold text-green-400">
              Prakash Chandra Sahoo
            </animated.h2>
          </div>
        </div>
      </div>

      <div className="text-center md:text-left">
        <animated.p style={fadeIn} className="text-lg leading-relaxed text-gray-700 mb-4 md:hidden">
          I'm Prakash, a passionate software developer with over 3 years of experience in creating robust and scalable applications. I specialize in React, Node.js, Angular, MongoDB, and AWS. With a solid background in both front-end and back-end development, I focus on delivering high-quality, efficient solutions. I am driven by challenges and always eager to enhance my skills to meet evolving technology needs.
        </animated.p>

        <animated.p style={fadeIn} className="hidden md:block text-lg leading-relaxed text-gray-700 mb-4">
          With over 3 years of experience, I specialize in creating dynamic, high-performance web applications. I have strong expertise in **React**, **Node.js**, **Angular**, **MongoDB**, and **AWS**. My goal is to craft seamless, efficient, and scalable solutions. I’m constantly learning and adapting to new technologies, and I’m always eager to tackle complex challenges in software development.
        </animated.p>

        <animated.p style={fadeIn} className="hidden md:block text-lg leading-relaxed text-gray-700 mb-6">
          Over the years, I’ve built web applications from the ground up and collaborated in team-based environments to deliver solutions that not only meet but exceed business needs. I’m highly skilled at integrating third-party services, developing RESTful APIs, and ensuring optimal performance for both web and mobile applications. I thrive in environments where continuous learning is valued, and I’m always looking for new ways to improve my craft.
        </animated.p>

        <button
          onClick={downloadCV}
          className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-500 transition duration-300 mt-4 shadow-lg transform hover:scale-105"
        >
          Download CV
        </button>
      </div>

      <animated.p style={fadeIn} className="text-center text-lg text-gray-600 mt-4 md:hidden">
        Thank you for visiting! Feel free to reach out to discuss opportunities or collaborations.
      </animated.p>

      <animated.div style={fadeIn} className="hidden md:block text-lg text-gray-600 mt-4">
        I am always open to new projects, collaborations, and opportunities. Let's connect to create impactful solutions together. With my expertise in full-stack development and cloud technologies like AWS, I am prepared to contribute to cutting-edge projects that challenge my skills and make a real impact. Whether it's optimizing front-end user experiences or designing back-end systems, I'm passionate about delivering excellence.
      </animated.div>

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
