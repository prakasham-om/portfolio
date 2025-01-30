import React, { useState } from 'react';
import { FaEnvelope, FaUser, FaPaperPlane } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch('https://portfolio-b0xq.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          message: '',
        });

        // Automatically hide the success notification and reset loading state after 2000 milliseconds (2 seconds)
        setTimeout(() => {
          setSubmitSuccess(false);
          setLoading(false);
        }, 2000);
      } else {
        console.error('Error sending message:', response.statusText);
        setLoading(false);
      }
    } catch (error) {
      console.error('Error sending message:', error.message);
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="p-8 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
        Contact Me
      </h2>
      <p className="mb-6 text-center text-gray-600">
        Have a question or want to work together? Feel free to reach out using the form below or through my email at{' '}
        <a href="prakashchandrasahoo8991@gmail.com" className="text-blue-500 hover:underline">
          prakashchandrasahoo8991@gmail.com
        </a>
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative mb-4">
          <label htmlFor="email" className="absolute left-4 top-2 text-gray-500">
            <FaEnvelope />
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            className="border rounded w-full py-3 pl-12 pr-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            placeholder="john.doe@example.com"
            required
            onChange={handleChange}
            autoComplete="off"
          />
        </div>

        <div className="relative mb-4">
          <label htmlFor="name" className="absolute left-4 top-2 text-gray-500">
            <FaUser />
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            className="border rounded w-full py-3 pl-12 pr-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            placeholder="John Doe"
            required
            onChange={handleChange}
            autoComplete="off"
          />
        </div>

        <div className="relative mb-6">
          <label htmlFor="message" className="absolute left-4 top-2 text-gray-500">
            <FaPaperPlane />
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            rows="4"
            className="border rounded w-full py-3 pl-12 pr-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            placeholder="How can I assist you?"
            required
            onChange={handleChange}
            autoComplete="off"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 px-4 rounded hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          disabled={loading}
        >
          {loading ? (
            <span className="flex justify-center items-center">
              <span className="loader"></span> Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </button>
      </form>

      {submitSuccess && (
        <div
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 p-4 text-white rounded shadow-lg animate__animated animate__fadeIn animate__delay-1s"
        >
          Message sent successfully!
        </div>
      )}
    </section>
  );
}

export default Contact;
