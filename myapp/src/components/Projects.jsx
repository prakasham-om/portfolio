import React from 'react';
import { animated } from 'react-spring';
import projects from './projects';

const Projects = ({ style }) => {
  return (
    <animated.section className="bg-blue-100 py-4" style={style}>
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-md bg-cover cursor-pointer"
              style={{
                backgroundImage: project.image ? `url(${project.image})` : 'none',
                height: '200px', // Keeping the original height
              }}
            >
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
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
          ))}
        </div>
      </div>
    </animated.section>
  );
};

export default Projects;
