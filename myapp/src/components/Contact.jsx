import React, { useState } from 'react';

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
    <section id="contact" className="p-8">
      <h2 className="text-xl font-bold mb-4">Contact Me</h2>
      <p className="mb-4">
        Have a question or want to work together? Feel free to reach out using the form below or through my email at your.email@example.com.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            className="border rounded w-full py-2 px-3"
            placeholder="john.doe@example.com"
            required
            onChange={handleChange}
            autoComplete='autocomplete'
          />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            className="border rounded w-full py-2 px-3"
            placeholder="John Doe"
            required
            onChange={handleChange}
            autoComplete='autocomplete'
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            rows="4"
            className="border rounded w-full py-2 px-3"
            placeholder="How can I assist you?"
            required
            onChange={handleChange}
            autoComplete='autocomplete'
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {submitSuccess && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 p-4 text-white rounded shadow">
          Message sent successfully!
        </div>
      )}
    </section>
  );
}

export default Contact;
