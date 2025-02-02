import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

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
    // Add more topics as needed
  ]);

  const [output, setOutput] = useState('');

  const handleCodeChange = (index, newCode) => {
    const updatedTopics = [...topics];
    updatedTopics[index].code = newCode;
    setTopics(updatedTopics);
  };

  const executeCode = (code) => {
    try {
      const result = eval(code); // Execute the code for this topic
      setOutput(result);
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-8 flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded-lg w-full max-w-4xl shadow-lg">
        <h1 className="text-white text-2xl mb-6">JavaScript Code Editor</h1>
        <div className="space-y-6">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="bg-gray-700 p-6 rounded-lg shadow-md"
            >
              <h2 className="text-white text-xl mb-2">{topic.title}</h2>
              <p className="text-gray-400 mb-4">{topic.description}</p>

              {/* Code Editor (Textarea) */}
              <textarea
                value={topic.code}
                onChange={(e) => handleCodeChange(index, e.target.value)}
                className="w-full h-40 p-4 text-white bg-gray-800 rounded-md border-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your code here..."
              />

              {/* Run Button */}
              <button
                onClick={() => executeCode(topic.code)}
                className="mt-4 p-2 bg-blue-500 text-white rounded-md"
              >
                Run Code
              </button>

              {/* Code Preview */}
              <div className="mt-4">
                <h3 className="text-white text-lg mb-2">Preview:</h3>
                <SyntaxHighlighter language="javascript" style={docco}>
                  {topic.code}
                </SyntaxHighlighter>
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
                           
