const jsTopic = [
  {
    topicName: "Variables (let, const, var)",
    description: "Variables are used to store data. `let` and `const` are block-scoped, while `var` is function-scoped.",
    code: `let x = 10;
const y = 20;
var z = 30;
console.log(x, y, z);`,
    output: "10 20 30"
  },
  {
    topicName: "Data Types",
    description: "JavaScript has primitive data types like string, number, boolean, null, undefined, and symbol.",
    code: `console.log(typeof "Hello", typeof 42, typeof true, typeof null, typeof undefined);`,
    output: "string number boolean object undefined"
  },
  {
    topicName: "Type Coercion",
    description: "JavaScript automatically converts types when performing operations.",
    code: `console.log("5" + 5, "5" - 5);`,
    output: "55 0"
  },
  {
    topicName: "Functions",
    description: "Functions are reusable blocks of code.",
    code: `function greet() { return "Hello!"; }
console.log(greet());`,
    output: "Hello!"
  },
  {
    topicName: "Arrow Functions",
    description: "Arrow functions provide a concise syntax for writing functions.",
    code: `const greet = () => "Hello!";
console.log(greet());`,
    output: "Hello!"
  },
  {
    topicName: "Objects",
    description: "Objects are collections of key-value pairs.",
    code: `const person = { name: "John", age: 30 };
console.log(person.name);`,
    output: "John"
  },
  {
    topicName: "Arrays",
    description: "Arrays are ordered lists of values.",
    code: `const arr = [1, 2, 3];
console.log(arr[1]);`,
    output: "2"
  },
  {
    topicName: "Array Methods (map, filter, reduce)",
    description: "Array methods are used to manipulate arrays.",
    code: `const nums = [1, 2, 3];
const doubled = nums.map(x => x * 2);
console.log(doubled);`,
    output: "[2, 4, 6]"
  },
  {
    topicName: "Destructuring",
    description: "Destructuring allows unpacking values from arrays or objects.",
    code: `const [a, b] = [1, 2];
console.log(a, b);
let arr=[[12,22],[222,'rohit'],{hello:'sbsj',aaa:'sggd'}]
console.log(arr[2]);

let [[x,y],[z,l],{hello,aaa}]=arr;

console.log(hello) //sbsj
`,
    output: "1 2" 
  },
  {
    topicName: "Template Literals",
    description: "Template literals allow embedding expressions in strings.",
    code: `const name = "John";
console.log(\`Hello, \${name}!\`);`,
    output: "Hello, John!"
  },
  {
    topicName: "Spread Operator",
    description: "The spread operator expands arrays or objects.",
    code: `const arr1 = [1, 2];
const arr2 = [...arr1, 3];
console.log(arr2);`,
    output: "[1, 2, 3]"
  },
  {
    topicName: "Rest Parameters",
    description: "Rest parameters allow functions to accept an indefinite number of arguments.",
    code: `function sum(...nums) { return nums.reduce((a, b) => a + b); }
console.log(sum(1, 2, 3));`,
    output: "6"
  },
  {
    topicName: "Promises",
    description: "Promises handle asynchronous operations.",
    code: `const promise = new Promise((resolve) => setTimeout(() => resolve("Done!"), 1000));
promise.then(console.log);`,
    output: "Done! (after 1 second)"
  },
  {
    topicName: "Async/Await",
    description: "Async/await simplifies working with promises.",
    code: `async function fetchData() { return "Data"; }
fetchData().then(console.log);`,
    output: "Data"
  },
  {
    topicName: "Closures",
    description: "Closures allow functions to retain access to their lexical scope.",
    code: `function outer() {
  const x = 10;
  return function inner() { return x; };
}
console.log(outer()());`,
    output: "10"
  },
  {
    topicName: "Hoisting",
    description: "Hoisting moves variable and function declarations to the top of their scope.",
    code: `console.log(x);
var x = 5;`,
    output: "undefined"
  },
  {
    topicName: "Event Loop",
    description: "The event loop handles asynchronous callbacks.",
    code: `console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
console.log("End");`,
    output: "Start End Timeout"
  },
  {
    topicName: "DOM Manipulation",
    description: "The DOM can be manipulated using JavaScript.",
    code: `document.body.innerHTML = "<h1>Hello</h1>";`,
    output: "Page displays 'Hello'"
  },
  {
    topicName: "Event Handling",
    description: "Events can be handled using event listeners.",
    code: `document.addEventListener("click", () => console.log("Clicked!"));`,
    output: "Clicked! (when page is clicked)"
  },
  {
    topicName: "Fetch API",
    description: "The Fetch API is used to make HTTP requests.",
    code: `fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.json())
  .then(data => console.log(data));`,
    output: "{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }"
  },
  {
    topicName: "Classes",
    description: "Classes are blueprints for creating objects.",
    code: `class Person {
  constructor(name) { this.name = name; }
  greet() { return \`Hello, \${this.name}!\`; }
}
const john = new Person("John");
console.log(john.greet());`,
    output: "Hello, John!"
  },
  {
    topicName: "Inheritance",
    description: "Inheritance allows classes to inherit properties and methods.",
    code: `class Animal {
  constructor(name) { this.name = name; }
  speak() { return \`\${this.name} makes a noise.\`; }
}
class Dog extends Animal {
  speak() { return \`\${this.name} barks.\`; }
}
const dog = new Dog("Rex");
console.log(dog.speak());`,
    output: "Rex barks."
  },
  {
    topicName: "Modules",
    description: "Modules allow splitting code into reusable pieces.",
    code: `// math.js
export const add = (a, b) => a + b;
// main.js
import { add } from './math.js';
console.log(add(2, 3));`,
    output: "5"
  },
  {
    topicName: "Error Handling",
    description: "Errors can be handled using try-catch blocks.",
    code: `try {
  throw new Error("Oops!");
} catch (e) {
  console.log(e.message);
}`,
    output: "Oops!"
  },
  {
    topicName: "Regular Expressions",
    description: "Regular expressions are used for pattern matching.",
    code: `const str = "Hello, World!";
console.log(str.match(/Hello/));`,
    output: "['Hello']"
  },
  {
    topicName: "JSON",
    description: "JSON is a data format used for data exchange.",
    code: `const obj = { name: "John" };
const json = JSON.stringify(obj);
console.log(json);`,
    output: '{"name":"John"}'
  },
  {
    topicName: "Local Storage",
    description: "Local storage allows storing data in the browser.",
    code: `localStorage.setItem("name", "John");
console.log(localStorage.getItem("name"));`,
    output: "John"
  },
  {
    topicName: "Session Storage",
    description: "Session storage is similar to local storage but cleared on page close.",
    code: `sessionStorage.setItem("name", "John");
console.log(sessionStorage.getItem("name"));`,
    output: "John"
  },
  {
    topicName: "Timers (setTimeout, setInterval)",
    description: "Timers are used to delay or repeat code execution.",
    code: `setTimeout(() => console.log("Timeout"), 1000);
setInterval(() => console.log("Interval"), 2000);`,
    output: "Timeout (after 1 second) Interval (every 2 seconds)"
  },
  {
    topicName: "This Keyword",
    description: "`this` refers to the current execution context.",
    code: `const obj = {
  name: "John",
  greet() { return \`Hello, \${this.name}!\`; }
};
console.log(obj.greet());`,
    output: "Hello, John!"
  },
  {
    topicName: "Bind, Call, Apply",
    description: "These methods control the value of `this` in functions.",
    code: `function greet() { return \`Hello, \${this.name}!\`; }
const obj = { name: "John" };
console.log(greet.call(obj));`,
    output: "Hello, John!"
  },
  {
    topicName: "Prototypes",
    description: "Prototypes allow objects to inherit properties and methods.",
    code: `function Person(name) { this.name = name; }
Person.prototype.greet = function() { return \`Hello, \${this.name}!\`; };
const john = new Person("John");
console.log(john.greet());`,
    output: "Hello, John!"
  },
  {
    topicName: "Iterators and Generators",
    description: "Iterators and generators allow custom iteration behavior.",
    code: `function* generator() {
  yield 1;
  yield 2;
}
const gen = generator();
console.log(gen.next().value);`,
    output: "1"
  },
  {
    topicName: "Proxy",
    description: "Proxies allow custom behavior for fundamental operations.",
    code: `const target = { name: "John" };
const handler = {
  get(obj, prop) { return prop in obj ? obj[prop] : "Not found"; }
};
const proxy = new Proxy(target, handler);
console.log(proxy.name, proxy.age);`,
    output: "John Not found"
  }
];
export default jsTopic
