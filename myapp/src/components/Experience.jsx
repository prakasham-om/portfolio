import React, { useState } from 'react';
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

  const handleNextCompany = () => {
    setCurrentCompanyIndex((prevIndex) =>
      prevIndex === experiences.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevCompany = () => {
    setCurrentCompanyIndex((prevIndex) =>
      prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    );
  };

  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === experiences[currentCompanyIndex].projects.length - 1
        ? 0
        : prevIndex + 1
    );
  };

  const handlePrevProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0
        ? experiences[currentCompanyIndex].projects.length - 1
        : prevIndex - 1
    );
  };

  return (
    <section
      id="experience"
      className="p-8 bg-gradient-to-r from-blue-500 to-indigo-600 mb-4"
    >
      <div className="flex flex-col items-center space-y-8">
        {/* Company Carousel */}
        <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-6 space-y-6 hover:shadow-2xl transition duration-300">
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

          {/* Project Carousel */}
          <div className="mt-5">
            <h4 className="text-lg font-semibold text-gray-800">
              {
                experiences[currentCompanyIndex].projects[currentProjectIndex]
                  .name
              }
            </h4>
            <p className="text-gray-600">
              {
                experiences[currentCompanyIndex].projects[currentProjectIndex]
                  .description
              }
            </p>

            {/* Project Navigation */}
            <div className="flex justify-between mt-4">
              <button
                onClick={handlePrevProject}
                className="px-4 py-2 bg-blue-600 text-white rounded-full"
              >
                Previous Project
              </button>
              <button
                onClick={handleNextProject}
                className="px-4 py-2 bg-blue-600 text-white rounded-full"
              >
                Next Project
              </button>
            </div>
          </div>

          {/* Company Navigation */}
          <div className="flex justify-between mt-6">
            <button
              onClick={handlePrevCompany}
              className="px-4 py-2 bg-blue-600 text-white rounded-full"
            >
              Previous Company
            </button>
            <button
              onClick={handleNextCompany}
              className="px-4 py-2 bg-blue-600 text-white rounded-full"
            >
              Next Company
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
      
