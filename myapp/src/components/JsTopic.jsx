import React, { useState } from 'react';
import { FaCopy } from 'react-icons/fa'; // Icon for the Copy button
import jsTopic from '../jsTopic'


const JsTopic = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);

  // Handle search input change
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handle copying code to clipboard
  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };

  // Filter topics based on search query
  const filteredTopics = jsTopic.filter((topic) =>
    topic.topicName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-2">
      <div className="max-w-4xl mx-auto">
        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search Topics..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* If no topics match the search query, display a message */}
        {searchQuery && filteredTopics.length === 0 && (
          <p className="text-center text-xl text-gray-600">Sorry, we are in progress mode.</p>
        )}

        {/* Display filtered topics or all topics */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {filteredTopics.length > 0 || !searchQuery ? (
            filteredTopics.length > 0 ? (
              filteredTopics.map((topic, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-2 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-semibold mb-4">{topic.topicName}</h3>
                  <p className="text-gray-600 mb-4">{topic.description}</p>

                  <div className="mb-4">
                    <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
                      {topic.code}
                    </pre>
                    <button
                      onClick={() => handleCopy(topic.code)}
                      className="mt-2 text-white bg-blue-500 hover:bg-blue-600 rounded px-4 py-2 flex items-center justify-center transition-all duration-200"
                    >
                      <FaCopy className="mr-2" />
                      {copied ? "Copied!" : "Copy Code"}
                    </button>
                  </div>
                  {/* <div>
                    <h4 className="font-semibold">Expected Output:</h4>
                    <p>{topic.output}</p>
                  </div>*/}
                </div>
              ))
            ) : (
              // If no search term is entered, show all topics
              jsTopic.map((topic, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-2 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-semibold mb-4">{topic.topicName}</h3>
                  <p className="text-gray-600 mb-2">{topic.description}</p>

                  <div className="mb-2">
                    <pre className="bg-gray-800 text-white p-2 rounded-md overflow-x-auto">
                      {topic.code}
                    </pre>
                  <button
                      onClick={() => handleCopy(topic.code)}
                      className="mt-2 text-white bg-blue-500 hover:bg-blue-600 rounded px-4 py-2 flex items-center justify-center transition-all duration-200"
                    >
                      <FaCopy className="mr-2" />
                      {copied ? "Copied!" : "Copy Code"}
                    </button>
                  </div>
                  <div>
                    <h4 className="font-semibold">Expected Output:</h4>
                    <p>{topic.output}</p>
                  </div>
                </div>
              ))
            )
          ) : (
            <p className="text-center text-xl text-gray-600">Start typing to search for topics...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default JsTopic;
                  
