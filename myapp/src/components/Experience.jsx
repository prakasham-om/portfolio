import React, { useState, useEffect } from 'react';
import cmpImg from '../assets/download.jpeg';  // Example logo

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
            "All-in-one solution designed to streamline the process of screening, enrolling, and monitoring service providers for their eligibility to process claims. It helps organizations efficiently manage provider data, ensuring they meet the necessary requirements for claims submission. The system simplifies the workflow by combining multiple tasks—eligibility checks, enrollment processes, and ongoing monitoring—into one easy-to-use platform. This helps reduce errors, save time, and ensure that only eligible providers are involved in claim processing.

            ",
        },
        {
          name: "Product and Seller Management",
          description:
            "The Product and Seller Management platform streamlines the management of sellers by tracking performance, enhancing communication, and optimizing sales. It simplifies onboarding, monitors seller activity, and provides real-time analytics. The system also manages incentives and ensures compliance, helping businesses boost efficiency and maintain strong seller relationships.",
        },
      ],
    },
    // Add more companies and projects here
  ];

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

    return () => {
      clearInterval(companyInterval);
      clearInterval(projectInterval);
    };
  }, [currentCompanyIndex, experiences]);

  return (
    <section
      id="experience"
      className="p-4 sm:p-6 lg:p-8 bg-gradient-to-r from-blue-500 to-indigo-600 mb-8"
    >
      <div className="flex flex-col items-center space-y-6 sm:space-y-8 lg:space-y-12">
        {/* Company and Project carousel for small devices */}
        <div className="max-w-full sm:max-w-lg w-full bg-white shadow-lg rounded-lg p-6 space-y-6 hover:shadow-2xl transition duration-300 md:hidden">
          {/* Company Logo and Title */}
          <div className="flex items-center space-x-4">
            <img
              src={experiences[currentCompanyIndex].logo}
              alt={`${experiences[currentCompanyIndex].company} Logo`}
              className="h-12 w-12 sm:h-16 sm:w-16 rounded-full object-cover"
            />
            <div>
              <h4 className="text-xl font-semibold text-gray-800">
                {experiences[currentCompanyIndex].company}
              </h4>
              <p className="text-md text-gray-600">
                {experiences[currentCompanyIndex].duration}
              </p>
            </div>
          </div>

          {/* Job Description */}
          <p className="text-sm text-gray-700 leading-relaxed">
            {experiences[currentCompanyIndex].description}
          </p>

          {/* Project Carousel */}
          <div className="mt-4">
            <h4 className="text-lg font-semibold text-gray-800">
              {experiences[currentCompanyIndex].projects[currentProjectIndex].name}
            </h4>
            <p className="text-sm text-gray-600">
              {experiences[currentCompanyIndex].projects[currentProjectIndex].description}
            </p>
          </div>

          {/* Dot Indicators for the Project Carousel */}
          <div className="flex justify-center space-x-2 mt-4">
            {experiences[currentCompanyIndex].projects.map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 rounded-full ${
                  currentProjectIndex === index ? 'bg-blue-600' : 'bg-gray-400'
                }`}
              ></span>
            ))}
          </div>
        </div>

        {/* For medium and above devices, show a single detailed card */}
        <div className="hidden md:block max-w-7xl w-full bg-white shadow-lg rounded-lg p-8 space-y-8 hover:shadow-2xl transition duration-300">
          {/* Company Logo and Title */}
          <div className="flex items-center space-x-6">
            <img
              src={experiences[currentCompanyIndex].logo}
              alt={`${experiences[currentCompanyIndex].company} Logo`}
              className="h-16 w-16 rounded-full object-cover"
            />
            <div>
              <h4 className="text-2xl font-semibold text-gray-800">
                {experiences[currentCompanyIndex].company}
              </h4>
              <p className="text-xl text-gray-600">
                {experiences[currentCompanyIndex].duration}
              </p>
            </div>
          </div>

          {/* Job Description */}
          <p className="text-lg text-gray-700 leading-relaxed">
            {experiences[currentCompanyIndex].description}
          </p>

          {/* Display all projects in a list for md and above */}
          <div className="mt-6 space-y-6">
            <h5 className="text-xl font-semibold text-gray-800">Projects</h5>
            {experiences[currentCompanyIndex].projects.map((project, index) => (
              <div key={index}>
                <h6 className="text-lg font-semibold text-gray-800">{project.name}</h6>
                <p className="text-md text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
              
