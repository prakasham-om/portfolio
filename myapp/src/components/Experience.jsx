import React from 'react';
import cmpImg from '../assets/download.jpeg'
function Experience() {
  return (
    <section id="experience" className="p-8 bg-gray-50 mb-4">
      <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-800">Experience</h2>

      <div className="flex flex-col items-center space-y-8">
        {/* Experience Card */}
        <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-6 space-y-6 hover:shadow-2xl transition duration-300">
          {/* Company Logo and Title */}
          <div className="flex items-center space-x-4">
            <img
              src={cmpImg}// Replace with actual company image URL
              alt="ENSS Technologies Logo"
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">ENSS TECHNOLOGIES PVT LTD.</h4>
              <p className="text-lg text-gray-600">Nov 2021 - Present</p>
            </div>
          </div>

          {/* Job Description */}
          <p className="text-sm text-gray-700">
            As a FullStack Developer specializing in React.js at Terralogic Software Solutions deployed by ENSS TECHNOLOGIES PRIVATE LIMITED,
            I meticulously design and implement captivating user interfaces, ensuring a seamless and delightful user experience. 
            Additionally, I create immersive, user-friendly web experiences and design many APIs using Node.js and MongoDB.
          </p>

          {/* Project Description */}
          <div className="mt-5">
            <h4 className="text-lg font-semibold text-gray-800">KYP (Know Your Provider)</h4>
            <p className="text-gray-600">
              Description: This is a one-step solution for screening, enrollment, and monitoring of providers for eligibility for claims.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
