import React, { useState } from 'react';
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
            "All-in-one solution designed to streamline the process of screening, enrolling, and monitoring service providers for their eligibility to process claims. It helps organizations efficiently manage provider data, ensuring they meet the necessary requirements for claims submission. The system simplifies the workflow by combining multiple tasks—eligibility checks, enrollment processes, and ongoing monitoring—into one easy-to-use platform. This helps reduce errors, save time, and ensure that only eligible providers are involved in claim processing",
        },
        {
          name: "Product and Seller Management",
          description:
            "The Product and Seller Management platform streamlines the management of sellers by tracking performance, enhancing communication, and optimizing sales. It simplifies onboarding, monitors seller activity, and provides real-time analytics. The system also manages incentives and ensures compliance, helping businesses boost efficiency and maintain strong seller relationships.",
        },
      ],
    },
    // Additional companies here
    {
      company: "ABC Corp",
      duration: "May 2020 - Oct 2021",
      logo: cmpImg,
      description:
        "As a Software Engineer at ABC Corp, I contributed to the development of key projects, utilizing technologies like Node.js, React, and MongoDB. I focused on building efficient and scalable solutions for our clients.",
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

  // Functions to handle manual navigation
  const nextCompany = () => {
    setCurrentCompanyIndex((prevIndex) =>
      prevIndex === experiences.length - 1 ? 0 : prevIndex + 1
    );
    setCurrentProjectIndex(0); // Reset project index when company changes
  };

  const prevCompany = () => {
    setCurrentCompanyIndex((prevIndex) =>
      prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    );
    setCurrentProjectIndex(0); // Reset project index when company changes
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
      className="p-4 sm:p-6 lg:p-8 bg-gradient-to-r from-gray-900 to-gray-800 h-full "
    >
      <div className="flex flex-col items-center space-y-6 sm:space-y-8 lg:space-y-12">
        {/* Mobile view with company logo and carousel for projects */}
        <div className="max-w-full sm:max-w-lg w-full bg-gray-600 shadow-lg rounded-lg p-6 space-y-6 hover:shadow-2xl transition duration-300 md:hidden">
          {/* Company Header */}
          <div className="flex items-center space-x-4">
            <img
              src={experiences[currentCompanyIndex].logo}
              alt={`${experiences[currentCompanyIndex].company} Logo`}
              className="h-16 w-16 rounded-full object-cover"
            />
            <div>
              <h4 className="text-xl font-semibold text-white">
                {experiences[currentCompanyIndex].company}
              </h4>
              <p className="text-md text-white">
                {experiences[currentCompanyIndex].duration}
              </p>
            </div>
          </div>

          {/* Company Description */}
          <p className="text-sm text-white leading-relaxed">
            {experiences[currentCompanyIndex].description}
          </p>

          {/* Project Carousel */}
          <div className="mt-4">
            <h4 className="text-lg font-semibold text-white">
              {experiences[currentCompanyIndex].projects[currentProjectIndex].name}
            </h4>
            <p className="text-sm text-white">
              {experiences[currentCompanyIndex].projects[currentProjectIndex].description}
            </p>
          </div>

          {/* Dot Indicators for Project Carousel */}
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

          {/* Project Navigation Buttons */}
          <div className="flex justify-between mt-4">
            <button
              onClick={prevProject}
              className="bg-blue-600 text-white p-2 rounded-full"
            >
              &lt;
            </button>
            <button
              onClick={nextProject}
              className="bg-blue-600 text-white p-2 rounded-full"
            >
              &gt;
            </button>
          </div>
        </div>

        {/* Desktop and Medium view with company logo and full project list */}
        <div className="hidden md:block max-w-7xl w-full bg-white shadow-lg rounded-lg p-8 space-y-8 hover:shadow-2xl transition duration-300">
          {/* Company Carousel */}
          <div className="relative">
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

            {/* Company Description */}
            <p className="text-lg text-gray-700 leading-relaxed">
              {experiences[currentCompanyIndex].description}
            </p>

            {/* Project Carousel for larger screens */}
            <div className="space-y-6 mt-6">
              <h5 className="text-xl font-semibold text-gray-800">Projects</h5>

              {/* Display the current project */}
              <div>
                <h6 className="text-lg font-semibold text-gray-800">
                  {experiences[currentCompanyIndex].projects[currentProjectIndex].name}
                </h6>
                <p className="text-md text-gray-600">
                  {experiences[currentCompanyIndex].projects[currentProjectIndex].description}
                </p>
              </div>
            </div>

            {/* Project Navigation Buttons */}
            <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2">
              <button
                onClick={prevProject}
                className="bg-blue-600 text-white p-2 rounded-full"
              >
                &lt;
              </button>
              <button
                onClick={nextProject}
                className="bg-blue-600 text-white p-2 rounded-full"
              >
                &gt;
              </button>
            </div>
          </div>

          {/* Company Navigation (carousel buttons for companies) */}
          <div className="flex justify-between mt-6">
            <button
              onClick={prevCompany}
              className="bg-blue-600 text-white p-2 rounded-full"
            >
              &lt;
            </button>
            <button
              onClick={nextCompany}
              className="bg-blue-600 text-white p-2 rounded-full"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
            
