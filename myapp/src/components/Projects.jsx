import React, { useState } from 'react';
import { animated } from 'react-spring';
import { HiEye, HiEyeOff } from 'react-icons/hi'; // Importing Eye and EyeOff from Heroicons via react-icons
import projects from './projects';

const Projects = ({ style }) => {
  return (
    <animated.section className="bg-gray-800 py-4 min-h-screen w-full" style={style}>
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
        height: 'auto', // Adjust height to be dynamic based on content
      }}
    >
      {/* Image Area (Header) */}
      <div
        className="w-full h-48 bg-cover bg-center"
        style={{ backgroundImage: project.image ? `url(${project.image})` : 'none' }}
      ></div>

      {/* Eye Icon for toggling description */}
      <div
        className="absolute top-2 right-2 p-2 bg-black rounded-full cursor-pointer text-white"
        onClick={() => setShowDescription(!showDescription)}
      >
        {showDescription ? (
          <HiEyeOff className="w-6 h-6" />
        ) : (
          <HiEye className="w-6 h-6" />
        )}
      </div>

      {/* Card Content (Description) */}
      <div className="p-4 text-white">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>

        {/* Conditionally render the description */}
        {showDescription && (
          <p className="text-sm mb-2">{project.description}</p>
        )}

        {/* Display the project link if available */}
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
    </div>
  );
};

export default Projects;
            
