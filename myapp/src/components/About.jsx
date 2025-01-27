import React from 'react';
import { animated } from 'react-spring';
import { FaNode, FaJs, FaReact,FaAws,FaAngular} from 'react-icons/fa';
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
      <h2 className="text-2xl font-bold mb-4">Prakash Chandra Sahoo</h2>
      <div className="md:flex items-center md:gap-5 ">
        <img
          src={profile}
          alt="Your Name"
          className="bg-orange-500 rounded-full md:rounded w-20 h-20 md:w-40 md:h-40 md:mr-4 mb-4 md:mb-0"
        />
        <div>
          <p className="text-gray-700">
           I'm Prakash, a software developer with over 3 years of
           experience in creating robust and scalable applications. 
           I specialize in React, Node.js, Angular, MongoDB, and AWS. 
           With a strong background in both front-end and back-end development, 
           I focus on delivering high-quality, efficient solutions. I am driven by challenges 
           and always eager to enhance my skills to meet evolving technology needs.
          </p>
          { /*<button
            onClick={downloadCV}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 mt-4"
          >
            Download CV
          </button>*/}
        </div> 
       
      </div>
        <p>
        Thank you for visiting, and feel free to connect with me 
        to discuss exciting opportunities or collaboration
        </p>

      <div className='flex justify-around mt-[5rem]'>
      <FaReact size={40} className='text-blue-400' />
      <FaNode size={40} color="#8CC84B" />
      <FaJs size={40} color="#F7DF1E" />
      <DiMongodb size={40} color="#589636" />
      <FaAws size={40} color="#FF9900"/>
      <FaAngular size={40} color="#FF0000"/>
    </div>
    </section>
  );
}



export default About
