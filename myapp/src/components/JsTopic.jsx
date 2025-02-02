import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa'; // Import the FaPlay icon from react-icons

// Define custom CSS for syntax highlighting
const syntaxStyles = {
  keyword: 'text-blue-500 font-bold',
  string: 'text-green-400',
  number: 'text-orange-400',
  variable: 'text-yellow-500',
  comment: 'text-gray-500 italic',
};

const CodeEditor = () => {
  const [topics, setTopics] = useState([
    {
      title: "Variables",
      description: "Learn how to declare variables in JavaScript.",
      code: `let x = 10;\nconst y = 20;\nvar z = x + y;\nconsole.log(z);`,
    },
    {
      title: "Functions",
      description: "Functions are reusable blocks of code.",
      code: `function greet(name) {\n  return 'Hello, ' + name;\n}\nconsole.log(greet('Alice'));`,
    },
    {
      title: "Loops",
      description: "Loops allow you to repeat a block of code multiple times.",
      code: `for (let i = 0; i < 5; i++) {\n  console.log(i);\n}`,
    },
    {
      title: "Array Methods",
      description: "Learn how to use common array methods in JavaScript.",
      code: `const arr = [1, 2, 3, 4, 5];\nconsole.log(arr.map(x => x * 2));`,
    },
    {
      title: "Objects",
      description: "Objects are collections of key-value pairs in JavaScript.",
      code: `const person = {\n  name: 'John',\n  age: 30,\n  greet() {\n    return 'Hello, ' + this.name;\n  }\n};\nconsole.log(person.greet());`,
    },
  ]);

  const [output, setOutput] = useState('');

  const handleCodeChange = (index, newCode) => {
    const updatedTopics = [...topics];
    updatedTopics[index].code = newCode;
    setTopics(updatedTopics);
  };

  // Mock console.log to capture output
  const captureConsoleOutput = () => {
    let output = '';
    const originalConsoleLog = console.log;

    console.log = (message) => {
      output += message + '\n'; // Capture each log message
    };

    return {
      execute: (code) => {
        try {
          new Function(code)(); // Execute the code dynamically
          setOutput(output);
        } catch (error) {
          setOutput(`Error: ${error.message}`);
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
    <div className="min-h-screen bg-gray-900 p-8 flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded-lg w-full max-w-4xl shadow-lg">
        <h1 className="text-white text-2xl mb-6">JavaScript Code Editor</h1>
        <div className="space-y-6">
          {topics.map((topic, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-md relative">
              <h2 className="text-white text-xl mb-2">{topic.title}</h2>
              <p className="text-gray-400 mb-4">{topic.description}</p>

              {/* Code Editor (Textarea) */}
              <textarea
                value={topic.code}
                onChange={(e) => handleCodeChange(index, e.target.value)}
                className="w-full h-40 p-4 text-white bg-gray-800 rounded-md border-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your code here..."
              />

              {/* Run Button with Font Awesome Play Icon */}
              <button
                onClick={() => captureConsoleOutput().execute(topic.code)}
                className="absolute right-4 top-4 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition duration-200"
              >
                <FaPlay />
              </button>

              {/* Code Preview */}
              <div className="mt-4">
                <h3 className="text-white text-lg mb-2">Preview:</h3>
                <pre
                  className="text-gray-200 bg-gray-800 p-4 rounded-md"
                  dangerouslySetInnerHTML={{ __html: highlightSyntax(topic.code) }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Global Output (Shows last executed output from any topic) */}
        {output && (
          <div className="mt-6 p-4 bg-gray-700 rounded-md text-white">
            <h3 className="text-lg">Output:</h3>
            <pre>{output}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeEditor;
