import React from 'react';
import { animated } from 'react-spring';
import { FaNode, FaJs, FaReact} from 'react-icons/fa';
import { DiMongodb } from "react-icons/di";
import profile from '../assets/profile.jpeg'

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

  return (
    <section id="about" className="p-8 "
    
    >
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <div className="md:flex items-center md:gap-5 ">
        <img
          src={profile}
          alt="Your Name"
          className="bg-orange-500 rounded-full md:rounded w-20 h-20 md:w-40 md:h-40 md:mr-4 mb-4 md:mb-0"
        />
        <div>
          <p className="text-gray-700">
            Hello! I'm Prakash Chandra Sahoo, a dedicated software engineer with a
            Bachelor's in Computer Science. With 2.4 years of hands-on experience,
            I specialize in React.js, Node.js, MongoDB, JavaScript, HTML, and CSS.
            I excel in solving complex problems, writing efficient code, 
            and collaborating effectively with teams. My journey has equipped me
            with a strong analytical mindset and a passion for staying at the FullStack of industry trends.
            Let's connect and explore how I can bring my skills and enthusiasm to your team!
          </p>
          <button
            onClick={downloadCV}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 mt-4"
          >
            Download CV
          </button>
        </div> 
       
      </div>
      <p className="text-gray-700 mt-5">
          I'm motivated by the ever-evolving nature of web development and thrive
         on continuous learning. My problem-solving approach and
         commitment to excellence drive me to deliver high-quality solutions.
        </p>
        <p className="text-gray-700 mt-5">
        I'm excited about the future
         of web development and am dedicated to staying ahead by exploring 
         new technologies and enhancing my skill set.

        Thank you for visiting, and feel free to connect with me 
        to discuss exciting opportunities or collaboration
        </p>

      <div className='flex justify-around mt-[5rem]'>
      <FaReact size={40} className='text-blue-400' />
      <FaNode size={40} color="#8CC84B" />
      <FaJs size={40} color="#F7DF1E" />
      <DiMongodb size={40} color="#589636" />
    </div>
    </section>
  );
}



export default About
