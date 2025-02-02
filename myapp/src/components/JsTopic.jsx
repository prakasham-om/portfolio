import React, { useState } from 'react';

// Define custom CSS for syntax highlighting with vibrant colors
const syntaxStyles = {
  keyword: 'text-blue-500 font-bold',
  string: 'text-green-400',
  number: 'text-orange-400',
  variable: 'text-yellow-500',
  comment: 'text-gray-500 italic',
  function: 'text-purple-400 font-semibold',
  operator: 'text-pink-500',
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

  const executeCode = (code) => {
    try {
      // Create a new function from the code and execute it
      const runCode = new Function(code);
      const result = runCode(); // Execute the code
      setOutput(result);
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  // Function to highlight syntax using regular expressions
  const highlightSyntax = (code) => {
    const keywords = /\b(let|const|var|function|return|if|else|for|while|class|new|this|try|catch|console|log|switch|case|break)\b/g;
    const strings = /'([^']*?)'|"([^"]*?)"/g;
    const numbers = /\b\d+\b/g;
    const variables = /\b[a-zA-Z_$][a-zA-Z_$0-9]*\b/g;
    const comments = /\/\/[^\n]*/g;
    const functions = /\b\w+(?=\()/g;
    const operators = /[+\-*\/=%&|\^!<>]=?/g;

    // Apply the syntax styles to the matched parts
    code = code.replace(keywords, (match) => `<span class="${syntaxStyles.keyword}">${match}</span>`);
    code = code.replace(strings, (match) => `<span class="${syntaxStyles.string}">${match}</span>`);
    code = code.replace(numbers, (match) => `<span class="${syntaxStyles.number}">${match}</span>`);
    code = code.replace(variables, (match) => {
      // Avoid highlighting keywords as variables
      if (!/function|let|const|var|if|else|for|while|class|new|this|try|catch|console|log/.test(match)) {
        return `<span class="${syntaxStyles.variable}">${match}</span>`;
      }
      return match;
    });
    code = code.replace(comments, (match) => `<span class="${syntaxStyles.comment}">${match}</span>`);
    code = code.replace(functions, (match) => `<span class="${syntaxStyles.function}">${match}</span>`);
    code = code.replace(operators, (match) => `<span class="${syntaxStyles.operator}">${match}</span>`);

    return code;
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-blue-400 p-6 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-screen-xl p-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">JavaScript Code Editor</h1>
        <div className="space-y-6">
          {topics.map((topic, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{topic.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{topic.description}</p>

              {/* Code Editor (Textarea) */}
              <div className="relative">
                <textarea
                  value={topic.code}
                  onChange={(e) => handleCodeChange(index, e.target.value)}
                  className="w-full h-40 p-4 text-sm text-gray-800 bg-gray-100 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                  placeholder="Write your code here..."
                />

                {/* Run Button with Font Awesome Icon */}
                <button
                  onClick={() => executeCode(topic.code)}
                  className="absolute right-4 top-4 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition duration-200"
                >
                  <i className="fas fa-play"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global Output (Shows last executed output from any topic) */}
        {output && (
          <div className="mt-6 p-4 bg-gray-50 rounded-md text-gray-800">
            <h3 className="text-lg font-semibold">Output:</h3>
            <pre className="bg-gray-200 p-4 rounded-md text-sm">{output}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeEditor;
