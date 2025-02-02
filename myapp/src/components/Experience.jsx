import React from 'react';
import cmpImg from '../assets/download.jpeg';  // Example logo
import Slider from "react-slick"; // Import Slick Carousel

// Sample data for multiple companies and projects
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

function Experience() {
  // Settings for carousel
  const companySettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const projectSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
  };

  return (
    <section id="experience" className="p-8 bg-gradient-to-r from-blue-500 to-indigo-600 mb-4">
      <div className="flex flex-col items-center space-y-8">
        {/* Company Carousel */}
        <Slider {...companySettings}>
          {experiences.map((experience, index) => (
            <div key={index} className="max-w-lg w-full bg-white shadow-lg rounded-lg p-6 space-y-6 hover:shadow-2xl transition duration-300">
              {/* Company Logo and Title */}
              <div className="flex items-center space-x-4">
                <img
                  src={experience.logo}
                  alt={`${experience.company} Logo`}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{experience.company}</h4>
                  <p className="text-lg text-gray-600">{experience.duration}</p>
                </div>
              </div>

              {/* Job Description */}
              <p className="text-sm text-gray-700">{experience.description}</p>

              {/* Project Carousel */}
              <Slider {...projectSettings}>
                {experience.projects.map((project, projectIndex) => (
                  <div key={projectIndex} className="mt-5">
                    <h4 className="text-lg font-semibold text-gray-800">{project.name}</h4>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                ))}
              </Slider>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Experience;
