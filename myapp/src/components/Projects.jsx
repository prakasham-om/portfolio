import React, { useState } from 'react';
import { animated } from 'react-spring';
import projects from './projects';
import { HiEye, HiEyeOff } from 'react-icons/hi'; // Importing Eye and EyeOff from Heroicons via react-icons

const Projects = ({ style }) => {
  return (
    <animated.section className="bg-gray-800 py-4" style={style}>
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </animated.section>
  );
};

const ProjectCard = ({ project }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div
      className="relative rounded-lg overflow-hidden shadow-md bg-gradient-to-b from-gray-700 via-gray-900 to-gray-800 cursor-pointer"
      style={{
        backgroundImage: project.image ? `url(${project.image})` : 'none',
        height: '200px', // Keeping the original height
      }}
    >
      {/* Image Area */}
      <div className="w-full h-48 bg-cover bg-center" style={{ backgroundImage: project.image ? `url(${project.image})` : 'none' }}></div>

      {/* Eye Icon for toggling description */}
      <div className="absolute top-2 right-2 p-2 bg-black rounded-full cursor-pointer text-white" onClick={() => setShowDescription(!showDescription)}>
        {showDescription ? (
          <HiEyeOff className="w-6 h-6" />
        ) : (
          <HiEye className="w-6 h-6" />
        )}
      </div>

      {/* Description below the image */}
      {showDescription && (
        <div className="p-4 text-white">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-sm mb-2">{project.description}</p>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline mt-2 block"
            >
              View Project
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default Projects;
      
