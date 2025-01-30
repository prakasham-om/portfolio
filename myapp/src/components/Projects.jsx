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
    // Update the displayed lines when linesToShow changes
    const lines = currentProject?.description.split('\n');
    setProjectDescription(lines?.slice(0, linesToShow).join('\n'));
  }, [linesToShow, currentProject]);

  const handleReadMore = () => {
    // Increase the number of lines to show
    setLinesToShow((prevLines) => prevLines + 1);
  };
  const handleCardClick = (project) => {
    const absoluteLink = new URL(project, window.location.origin);
   // absoluteLink.host = 'stickynote-blond.vercel.app'; // Set the desired host
    window.open(absoluteLink.toString(), '_blank');
  };
  

  return (
    <animated.section className="bg-gray-100 py-4" style={style}>
      <div className="container mx-auto px-2">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-md bg-cover cursor-pointer"
              style={{
                backgroundImage: project.image ? `url(${project.image})` : 'none',
                height: '200px', // Adjust the height as needed
              }}
            
                onClick={() => handleCardClick(project.link)}
                 
            >
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-4 w-4"
                    onClick={(e) => {
                      e.stopPropagation();
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

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg max-w-md">
            <h3 className="text-xl font-bold mb-4">{currentProject.title}</h3>
            <p>{projectDescription}</p>
            {linesToShow < currentProject.description.split('\n').length && (
              <button className="text-blue-500 underline mt-2" onClick={handleReadMore}>
                ReadMore
              </button>
            )}
            <button className="text-blue-500 underline mt-2 ml-2" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </animated.section>
  );
};

export default Projects;
