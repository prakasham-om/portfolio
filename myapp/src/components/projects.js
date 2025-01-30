import React from 'react';
import medium from '../assets/medium.png';
import sticky from '../assets/sticky.png';



export default function Projects() {
  const projects = [
  {
    title: 'Medium Clone',
    description: `Introducing our innovative and user-friendly Medium Clone App, a powerful platform built with cutting-edge technologies like React, MongoDB, and Node.js. Our application redefines the way users consume and share captivating stories, articles, and insights, providing an immersive and seamless reading experience.`,
    link: 'https://medium-ebon.vercel.app/',
    image: medium,
  },
  {
    title: 'Food Delhivery',
    description: 'A delicious food delivery app for your hunger needs.',
    link: 'your-link-here',
    image: '', // Add an image here if available
  },
  {
    title: 'Sticky Note Book',
    description: 'The Sticky Note Web App, crafted with HTML and Bootstrap, offers a sleek and intuitive platform for digital note-taking.',
    link: 'https://stickynote-blond.vercel.app/',
    image: sticky,
  },
];
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="max-w-xs mx-auto bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={project.image || 'https://via.placeholder.com/400x300'}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{project.title}</h3>
                <p className="text-sm text-gray-700 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Visit Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
