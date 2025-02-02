import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa'; // Import the FaPlay icon from react-icons
import topics from '../jsTopic'; // Assuming topics is imported correctly

// Define custom CSS for syntax highlighting
const syntaxStyles = {
  keyword: 'text-blue-500 font-bold',
  string: 'text-green-400',
  number: 'text-orange-400',
  variable: 'text-yellow-500',
  comment: 'text-gray-500 italic',
};

const CodeEditor = () => {
  const [topicsState, setTopics] = useState(topics); // Ensure state is correctly initialized

  const handleCodeChange = (index, newCode) => {
    const updatedTopics = [...topicsState];
    updatedTopics[index].code = newCode;
    updatedTopics[index].output = ''; // Reset output when code changes
    setTopics(updatedTopics);
  };

  // Mock console.log to capture output
  const captureConsoleOutput = (index) => {
    let output = '';
    const originalConsoleLog = console.log;

    console.log = (message) => {
      output += message + '\n'; // Capture each log message
    };

    return {
      execute: (code) => {
        try {
          new Function(code)(); // Execute the code dynamically
          const updatedTopics = [...topicsState];
          updatedTopics[index].output = output; // Store the output for this topic
          setTopics(updatedTopics); // Update state after capturing the output
        } catch (error) {
          const updatedTopics = [...topicsState];
          updatedTopics[index].output = `Error: ${error.message}`;
          setTopics(updatedTopics); // Update state with error
        } finally {
          console.log = originalConsoleLog; // Restore original console.log
        }
      },
    };
  };

  // Highlight the syntax
  const highlightSyntax = (code) => {
    const keywords = /\b(let|const|var|function|return|if|else|for|while|class|new|this|try|catch|console|log)\b/g;
    const strings = /'([^']*?)'|"([^"]*?)"/g;
    const numbers = /\b\d+\b/g;
    const variables = /\b[a-zA-Z_$][a-zA-Z_$0-9]*\b/g;
    const comments = /\/\/[^\n]*/g;

    code = code.replace(keywords, (match) => `<span class="${syntaxStyles.keyword}">${match}</span>`);
    code = code.replace(strings, (match) => `<span class="${syntaxStyles.string}">${match}</span>`);
    code = code.replace(numbers, (match) => `<span class="${syntaxStyles.number}">${match}</span>`);
    code = code.replace(variables, (match) => {
      if (!/function|let|const|var|if|else|for|while|class|new|this|try|catch|console|log/.test(match)) {
        return `<span class="${syntaxStyles.variable}">${match}</span>`;
      }
      return match;
    });
    code = code.replace(comments, (match) => `<span class="${syntaxStyles.comment}">${match}</span>`);

    return code;
  };

  return (
    <div className="min-h-screen bg-gray-900 p-4 flex items-center justify-center">
      <div className="bg-gray-800 p-2 rounded-lg w-full max-w-4xl shadow-lg">
        <h1 className="text-white text-2xl mb-6">JavaScript</h1>
        <div className="space-y-6">
          {topicsState.map((topic, index) => (
            <div key={index} className="bg-gray-700 p-2 rounded-lg shadow-md relative">
              <h2 className="text-white text-xl mb-2">{topic.topicName}</h2>
              <p className="text-gray-400 mb-4">{topic.description}</p>

              {/* Code Editor (Textarea) */}
              <textarea
                value={topic.code}
                onChange={(e) => handleCodeChange(index, e.target.value)}
                className="w-full h-40 p-2 text-white bg-gray-800 rounded-md border-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your code here..."
              />

              {/* Run Button with Font Awesome Play Icon */}
              <button
                onClick={() => captureConsoleOutput(index).execute(topic.code)}
                className="absolute right-4 top-4 p-2 bg-gray-200 text-white rounded-md hover:bg-blue-500 transition duration-200"
              >
                <FaPlay />
              </button>

              {/* Output Below Each Code Editor */}
              {topic.output && (
                <div className="mt-4 p-2 bg-gray-600 rounded-md text-white">
                  <h3 className="text-lg">Output:</h3>
                  <pre>{topic.output}</pre>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
      
