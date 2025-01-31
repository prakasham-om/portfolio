import React, { useState, useEffect } from 'react';
import { animated } from 'react-spring';
import projects from './projects';

const Projects = ({ style }) => {
  const [showModal, setShowModal] = useState(false);
  const [projectDescription, setProjectDescription] = useState('');
  const [currentProject, setCurrentProject] = useState(null);
  const [linesToShow, setLinesToShow] = useState(3); // Number of lines to show initially

  const openModal = (project) => {
    setProjectDescription('');
    setCurrentProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setProjectDescription('');
    setCurrentProject(null);
    setLinesToShow(3); // Reset the number of lines to show
  };

  useEffect(() => {
    if (currentProject) {
      const lines = currentProject?.description.split('\n');
      setProjectDescription(lines?.slice(0, linesToShow).join('\n'));
    }
  }, [linesToShow, currentProject]);

  const handleReadMore = () => {
    setLinesToShow((prevLines) => prevLines + 1);
  };

  const handleCardClick = (project) => {
    const absoluteLink = new URL(project.link, window.location.origin);
    window.open(absoluteLink.toString(), '_blank');
  };

  return (
    <animated.section className="bg-gradient-to-r from-blue-500 to-indigo-600 py-12 mt-4" style={style}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-lg bg-cover cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out"
              style={{
                backgroundImage: project.image ? `url(${project.image})` : 'none',
                height: '250px',
                borderRadius: '12px',
              }}
              onClick={() => handleCardClick(project)}
            >
              <div className="absolute inset-0 bg-black opacity-30 transition-opacity duration-300 ease-in-out"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black via-transparent to-transparent">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-5 w-5 cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering the card click
                      openModal(project);
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && currentProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg max-w-lg shadow-xl transform transition duration-300 ease-in-out scale-95 hover:scale-100">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">{currentProject.title}</h3>
            <p className="text-gray-700">{projectDescription}</p>
            {linesToShow < currentProject.description.split('\n').length && (
              <button className="text-blue-500 underline mt-3" onClick={handleReadMore}>
                Read More
              </button>
            )}
            <button className="text-blue-500 underline mt-3 ml-4" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </animated.section>
  );
};

export default Projects;
