import React, { useState } from 'react';
import cmpImg from '../assets/download.jpeg';  // Example logo
import images from '../assets/images.jpeg';

function Experience() {
  const [currentCompanyIndex, setCurrentCompanyIndex] = useState(0);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const experiences = [
    {
      company: "ENSS TECHNOLOGIES PVT LTD.",
      duration: "Nov 2021 - Present",
      logo: cmpImg,
      description:
        "FullStack Developer(MERN && MEAN)",
      projects: [
        {
          name: "KYP (Know Your Provider)",
          description:
            "All-in-one solution designed to streamline the process of screening, enrolling, and monitoring service providers for their eligibility to process claims. It helps organizations efficiently manage provider data, ensuring they meet the necessary requirements for claims submission.",
        },
        {
          name: "Product and Seller Management",
          description:
            "The Product and Seller Management platform streamlines the management of sellers by tracking performance, enhancing communication, and optimizing sales. It simplifies onboarding, monitors seller activity, and provides real-time analytics.",
        },
      ],
    },
    {
      company: "Greet lab",
      duration: "Jan 2021 - Oct 2021",
      logo: images,
      description:
        "SOFTWARE ENGINEER INTERN",
      projects: [
        {
          name: "Internal Dashboard",
          description:
            "The Internal Dashboard project aimed at providing real-time analytics and business insights to internal teams. By using data visualization tools, the dashboard simplified decision-making and enhanced productivity.",
        },
        {
          name: "Client Portal",
          description:
            "The Client Portal project helped customers track their orders, view analytics, and interact with support. It was developed using React and integrated with backend services to ensure smooth real-time data updates.",
        },
      ],
    },
  ];

  const nextCompany = () => {
    setCurrentCompanyIndex((prevIndex) =>
      prevIndex === experiences.length - 1 ? 0 : prevIndex + 1
    );
    setCurrentProjectIndex(0);
  };

  const prevCompany = () => {
    setCurrentCompanyIndex((prevIndex) =>
      prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    );
    setCurrentProjectIndex(0);
  };

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === experiences[currentCompanyIndex].projects.length - 1
        ? 0
        : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0
        ? experiences[currentCompanyIndex].projects.length - 1
        : prevIndex - 1
    );
  };

  return (
    <section
      id="experience"
      className="p-4 sm:p-6 lg:p-8 bg-gradient-to-r from-gray-900 to-gray-800 min-h-screen"
    >
      <div className="flex flex-col items-center space-y-6 sm:space-y-8 lg:space-y-12 gap-4">
        {/* Unified View */}
        <div className="w-full flex flex-col sm:flex-row gap-6 md:hidden">
          {experiences.map((experience, companyIndex) => (
            <div
              key={companyIndex}
              className="flex-shrink-0 w-full sm:w-64 bg-gray-600 shadow-lg rounded-lg p-6 space-y-4 hover:shadow-2xl transition duration-300"
            >
              <div className="flex items-center mix-blend-overlay space-x-4">
                <img
                  src={experience.logo}
                  alt={`${experience.company} Logo`}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-xl font-semibold text-white">
                    {experience.company}
                  </h4>
                  <p className="text-md text-white">{experience.duration}</p>
                </div>
              </div>

              <p className="text-xl text-white leading-relaxed">
                {experience.description}
              </p>

              {/* Project Section */}
              <div className="mt-4">
                <h3 className="text-bold text-lg underline mb-2">Project:</h3>
                <h4 className="text-md font-semibold text-white">
                  {experience.projects[currentProjectIndex].name}:
                </h4>
                <p className="text-sm text-white line-clamp-7">
                  {experience.projects[currentProjectIndex].description}
                </p>
              </div>

              {/* Project Navigation */}
              <div className="flex justify-between mt-4">
                <button
                  onClick={prevProject}
                  className="bg-gray-600 text-white rounded p-2"
                >
                  &lt;
                </button>
                <button
                  onClick={nextProject}
                  className="bg-gray-600 text-white rounded p-2"
                >
                  &gt;
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop and Larger Screens */}
        <div className="hidden md:flex md:flex-col space-x-6 max-w-7xl w-full bg-gray-600 shadow-lg rounded-lg p-8 hover:shadow-2xl transition duration-300">
          <div className="flex items-center space-x-6 w-1/3">
            <img
              src={experiences[currentCompanyIndex].logo}
              alt={`${experiences[currentCompanyIndex].company} Logo`}
              className="h-16 w-16 rounded-full object-cover"
            />
            <div>
              <h4 className="text-2xl font-semibold text-white">
                {experiences[currentCompanyIndex].company}
              </h4>
              <p className="text-xl text-white">
                {experiences[currentCompanyIndex].duration}
              </p>
            </div>
          </div>

          {/* Company Description and Project Section */}
          <div className="w-2/3 space-y-8">
            <p className="text-lg text-white leading-relaxed">
              {experiences[currentCompanyIndex].description}
            </p>

            <div>
              <h5 className="text-xl font-semibold text-gray-800">Projects</h5>
              <h6 className="text-lg font-semibold text-gray-800">
                {experiences[currentCompanyIndex].projects[currentProjectIndex].name}
              </h6>
              <p className="text-md text-gray-600">
                {experiences[currentCompanyIndex].projects[currentProjectIndex].description}
              </p>
            </div>

            {/* Project Navigation */}
            <div className="flex justify-between mt-4">
              <button
                onClick={prevProject}
                className="bg-gray-600 text-white p-2 rounded-full"
              >
                &lt;
              </button>
              <button
                onClick={nextProject}
                className="bg-gray-600 text-white p-2 rounded-full"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>

        {/* Company Pagination for Small Screens */}
        <div className="flex justify-center mt-4">
          <button
            onClick={prevCompany}
            className="bg-gray-600 text-white p-2 rounded-full"
          >
            &lt;
          </button>
          <button
            onClick={nextCompany}
            className="bg-gray-600 text-white p-2 rounded-full"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}

export default Experience;
                           
