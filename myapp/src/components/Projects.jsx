import React from 'react';
import { animated } from 'react-spring';
import projects from './projects';

const Projects = ({ style }) => {
  return (
    <animated.section className="bg-gray-100 py-4" style={style}>
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-md bg-white cursor-pointer"
            >
              <div
                className="bg-cover h-48"
                style={{
                  backgroundImage: project.image ? `url(${project.image})` : 'none',
                }}
              ></div>
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </animated.section>
  );
};

export default Projects;
