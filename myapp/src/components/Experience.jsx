// src/components/Experience.js
import React from 'react';

function Experience() {
  return (
    <section id="experience" className="p-8">
      <h2 className="text-xl font-bold mb-4">Experience</h2>
      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2">Software Engineer - ENSS TECHNOLOGIES pvt ltd.</h3>
        <p className="text-gray-600">nov 2021 - Present</p>
        <p>
        As a FullStack Developer specializing in React.js at Greet Lab Company,
         I meticulously design and implement captivating user interfaces, ensuring
          a seamless and delightful user experience and creating immersive and user-friendly web experiences 
          also design lot of API using nodejs and MongoDB
        </p>

        <p className='text-green-500 mt-5'>
        KYP(Know Your Provider):
        description: This is one-step solution for screening,
        enrollment and monitoring of providers for eligibility for claim.
        </p>
      </div>
    </section>
  );
}

export default Experience;
