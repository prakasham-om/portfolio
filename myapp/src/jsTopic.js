const jsTopic = [
  {
    topicName: "Variables and Data Types",
    description: "In JavaScript, variables can hold different types of values, such as numbers, strings, and objects. JavaScript has dynamic typing, meaning variable types are determined at runtime.",
    code: `
      let name = "John";     // String
      let age = 30;          // Number
      let isStudent = true;  // Boolean
      let person = null;     // Null
      let details;           // Undefined
      let bigNumber = 9007199254740991n; // BigInt
      let symbol = Symbol('id'); // Symbol

      console.log(name, age, isStudent, person, details, bigNumber, symbol);
    `,
    output: "John 30 true null undefined 9007199254740991 Symbol(id)"
  },

  {
    topicName: "Hoisting",
    description: "Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope before code execution. It only hoists declarations, not initializations.",
    code: `
      greet(); // Output: "Hello, World!"
      
      function greet() {
        console.log("Hello, World!");
      }

      console.log(x); // Output: undefined
      var x = 10;
      console.log(x); // Output: 10
    `,
    output: "Hello, World!\nundefined\n10"
  },

  {
    topicName: "Strict Mode",
    description: "'Strict mode' is a way to opt into a restricted version of JavaScript. It makes it easier to write secure JavaScript by throwing errors for common mistakes (like using undeclared variables).",
    code: `
      'use strict';
      x = 5;  // This will throw an error because 'x' is not declared.
    `,
    output: "ReferenceError: x is not defined"
  },

  {
    topicName: "Null vs Undefined",
    description: "Both `null` and `undefined` represent the absence of a value, but they are different types. `undefined` is a type itself, and it is automatically assigned to uninitialized variables. `null` is an intentional absence of any object value.",
    code: `
      let a; // undefined by default
      let b = null; // explicitly assigned null

      console.log(a); // undefined
      console.log(b); // null
      console.log(a == b); // true (compared by value)
      console.log(a === b); // false (strict comparison by type)
    `,
    output: "undefined\nnull\ntrue\nfalse"
  },

  {
    topicName: "Functions",
    description: "Functions are blocks of code that perform a task. JavaScript supports named and anonymous functions, as well as arrow functions introduced in ES6.",
    code: `
      // Function declaration
      function greet() {
        console.log("Hello, World!");
      }

      // Function expression
      const add = function(a, b) {
        return a + b;
      };

      // Arrow function (ES6)
      const subtract = (a, b) => a - b;

      greet(); // Output: "Hello, World!"
      console.log(add(5, 3)); // Output: 8
      console.log(subtract(10, 4)); // Output: 6
    `,
    output: "Hello, World!\n8\n6"
  },

  {
    topicName: "Arrow Functions",
    description: "Arrow functions are a more concise way of writing functions in JavaScript. They also do not have their own `this` context, which is important when used in certain situations like event handlers.",
    code: `
      const multiply = (a, b) => a * b;
      console.log(multiply(2, 3)); // Output: 6

      // Example of missing 'this' context in arrow function:
      const person = {
        name: 'John',
        greet: () => {
          console.log(this.name); // 'this' will not refer to person
        }
      };
      person.greet(); // Output: undefined
    `,
    output: "6\nundefined"
  },

  {
    topicName: "Objects",
    description: "Objects in JavaScript are used to store collections of data in key-value pairs. They can represent real-world entities and are one of the most important data structures.",
    code: `
      const person = {
        name: 'John',
        age: 30,
        greet: function() {
          console.log("Hello, " + this.name);
        }
      };

      console.log(person.name); // Output: John
      person.greet(); // Output: Hello, John
    `,
    output: "John\nHello, John"
  },

  {
    topicName: "Arrays",
    description: "Arrays are ordered lists of elements. They can hold data of any type, and their elements can be accessed using an index starting from 0.",
    code: `
      const numbers = [1, 2, 3, 4];
      console.log(numbers[0]); // Output: 1
      console.log(numbers.length); // Output: 4

      // Adding and removing elements
      numbers.push(5);  // Adds 5 to the end
      numbers.pop();    // Removes the last element
      console.log(numbers); // Output: [1, 2, 3, 4]
    `,
    output: "1\n4\n[1, 2, 3, 4]"
  },

  {
    topicName: "Higher Order Functions",
    description: "Higher-order functions take other functions as arguments or return a function as a result. Common examples include `map`, `filter`, and `reduce`.",
    code: `
      const numbers = [1, 2, 3, 4, 5];

      // map example
      const doubled = numbers.map(num => num * 2);
      console.log(doubled); // Output: [2, 4, 6, 8, 10]

      // filter example
      const even = numbers.filter(num => num % 2 === 0);
      console.log(even); // Output: [2, 4]

      // reduce example
      const sum = numbers.reduce((acc, num) => acc + num, 0);
      console.log(sum); // Output: 15
    `,
    output: "[2, 4, 6, 8, 10]\n[2, 4]\n15"
  },

  {
    topicName: "Closures",
    description: "A closure is a function that retains access to its lexical scope, even after the outer function has finished execution. Closures are often used to create private variables or to preserve state across multiple function calls.",
    code: `
      function outer() {
        let count = 0;

        return function inner() {
          count++;
          console.log(count);
        };
      }

      const counter = outer();
      counter(); // Output: 1
      counter(); // Output: 2
    `,
    output: "1\n2"
  },

  {
    topicName: "Promises",
    description: "A `Promise` is an object representing the eventual completion or failure of an asynchronous operation. It allows chaining of `.then()` and `.catch()` methods to handle success and failure.",
    code: `
      const fetchData = new Promise((resolve, reject) => {
        const success = true;
        
        if (success) {
          resolve('Data fetched successfully');
        } else {
          reject('Error fetching data');
        }
      });

      fetchData
        .then(response => console.log(response)) // Output: 'Data fetched successfully'
        .catch(error => console.log(error));     // Output: 'Error fetching data'
    `,
    output: "Data fetched successfully"
  },

  {
    topicName: "Async/Await",
    description: "The `async` and `await` keywords provide a cleaner syntax for working with Promises, enabling asynchronous code to be written in a more synchronous style.",
    code: `
      async function fetchData() {
        const response = await new Promise((resolve, reject) => {
          setTimeout(() => resolve("Data fetched"), 2000);
        });
        console.log(response); // Output: 'Data fetched'
      }

      fetchData();
    `,
    output: "Data fetched"
  },

  {
    topicName: "Try...Catch...Finally",
    description: "The `try...catch...finally` statement is used for error handling. The code inside the `try` block is executed, and if an error occurs, the `catch` block is executed. The `finally` block is always executed, regardless of an error.",
    code: `
      try {
        let result = riskyFunction();
      } catch (error) {
        console.log('Error:', error.message); // Output: 'Error: Something went wrong'
      } finally {
        console.log('This block always executes.');
      }

      function riskyFunction() {
        throw new Error('Something went wrong');
      }
    `,
    output: "Error: Something went wrong\nThis block always executes."
  },

  {
    topicName: "Event Handling",
    description: "Event handling refers to the process of capturing and responding to events like mouse clicks, form submissions, and key presses.",
    code: `
      const button = document.createElement('button');
      button.textContent = 'Click me!';
      document.body.appendChild(button);

      button.addEventListener('click', function() {
        console.log('Button clicked!');
      });
    `,
    output: "Button clicked!" // Upon click
  }
];

export default jsTopic;
