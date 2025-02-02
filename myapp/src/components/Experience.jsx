import React, { useState, useEffect } from 'react';
import cmpImg from '../assets/download.jpeg';  // Example logo

// Sample data for multiple companies and projects
function Experience() {
  const [currentCompanyIndex, setCurrentCompanyIndex] = useState(0);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const experiences = [
    {
      company: "ENSS TECHNOLOGIES PVT LTD.",
      duration: "Nov 2021 - Present",
      logo: cmpImg,
      description:
        "As a FullStack Developer specializing in React.js at Terralogic Software Solutions deployed by ENSS TECHNOLOGIES PRIVATE LIMITED, I meticulously design and implement captivating user interfaces, ensuring a seamless and delightful user experience.",
      projects: [
        {
          name: "KYP (Know Your Provider)",
          description:
            "One-step solution for screening, enrollment, and monitoring of providers for eligibility for claims.",
        },
        {
          name: "Product and Seller Management",
          description:
            "A solution for managing products and sellers with easy enrollment and monitoring.",
        },
      ],
    },
    // Add more companies and projects here
  ];

  // Auto slide companies and projects
  useEffect(() => {
    const companyInterval = setInterval(() => {
      setCurrentCompanyIndex((prevIndex) =>
        prevIndex === experiences.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Slide every 5 seconds

    const projectInterval = setInterval(() => {
      setCurrentProjectIndex((prevIndex) =>
        prevIndex === experiences[currentCompanyIndex].projects.length - 1
          ? 0
          : prevIndex + 1
      );
    }, 5000); // Slide every 5 seconds

    // Cleanup intervals on component unmount
    return () => {
      clearInterval(companyInterval);
      clearInterval(projectInterval);
    };
  }, [currentCompanyIndex, experiences]);

  return (
    <section
      id="experience"
      className="p-4 sm:p-8 bg-gradient-to-r from-blue-500 to-indigo-600 mb-4"
    >
      <div className="flex flex-col items-center space-y-8">
        {/* Company Carousel for small devices */}
        <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-4 sm:p-6 space-y-6 hover:shadow-2xl transition duration-300">
          {/* Company Logo and Title */}
          <div className="flex items-center space-x-4">
            <img
              src={experiences[currentCompanyIndex].logo}
              alt={`${experiences[currentCompanyIndex].company} Logo`}
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover"
            />
            <div>
              <h4 className="text-sm sm:text-lg font-semibold text-gray-800">
                {experiences[currentCompanyIndex].company}
              </h4>
              <p className="text-sm sm:text-lg text-gray-600">
                {experiences[currentCompanyIndex].duration}
              </p>
            </div>
          </div>

          {/* Job Description */}
          <p className="text-xs sm:text-sm text-gray-700">
            {experiences[currentCompanyIndex].description}
          </p>

          {/* Project Carousel for small devices */}
          <div className="mt-4 sm:mt-5">
            <h4 className="text-sm sm:text-lg font-semibold text-gray-800">
              {
                experiences[currentCompanyIndex].projects[currentProjectIndex]
                  .name
              }
            </h4>
            <p className="text-xs sm:text-sm text-gray-600">
              {
                experiences[currentCompanyIndex].projects[currentProjectIndex]
                  .description
              }
            </p>
          </div>
        </div>

        {/* For medium and above devices, show all info in a single card */}
        <div className="hidden md:block max-w-4xl w-full bg-white shadow-lg rounded-lg p-6 space-y-6 hover:shadow-2xl transition duration-300">
          {/* Company Logo and Title */}
          <div className="flex items-center space-x-4">
            <img
              src={experiences[currentCompanyIndex].logo}
              alt={`${experiences[currentCompanyIndex].company} Logo`}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">
                {experiences[currentCompanyIndex].company}
              </h4>
              <p className="text-lg text-gray-600">
                {experiences[currentCompanyIndex].duration}
              </p>
            </div>
          </div>

          {/* Job Description */}
          <p className="text-sm text-gray-700">
            {experiences[currentCompanyIndex].description}
          </p>

          {/* Display all projects in a list for md and above */}
          <div className="mt-5">
            <h5 className="text-md font-semibold text-gray-800">Projects</h5>
            <div className="space-y-4">
              {experiences[currentCompanyIndex].projects.map((project, index) => (
                <div key={index}>
                  <h6 className="text-sm font-semibold text-gray-800">
                    {project.name}
                  </h6>
                  <p className="text-sm text-gray-600">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
          
