const topics = [
  {
    topicName: "Variables (let, const, var)",
    description: "Variables are used to store data. `let` and `const` are block-scoped, while `var` is function-scoped.",
    code: `let x = 10;
const y = 20;
var z = 30;
console.log(x, y, z);



var a=10;
console.log(a); //output 10
var a=12 //here a redeclare
console.log(a);//output will 12 
a=19
console.log(a);//update a value

{
    var name="prakash";
    console.log(name);
}
console.log(name);  //name is declare in blockscope but we can access it out of block

function vardeclar(){
    for(var i=0;i<12;i++){
        console.log(i);//0,1,2,3,4,5,6,7,8,9,10,11
    }
    console.log(i);//12
}

`,
    output: "10 20 30"
  },
  {
    topicName: "Data Types",
    description: "JavaScript has primitive data types like string, number, boolean, null, undefined, and symbol.",
    code: `


let a=null; //null
let b=261523; //num
let c=Symbol("i am a symbol"); //symbol
let d="prakash"; //string
let e=BigInt("5252");//bigint
let f; //undefined
console.log(a,b,c,d,e,f)
//beuity of bigint
let add= BigInt("54")+BigInt("6")
console.log(add);


//non-premitive:-
const item={
    "name":"Prakash",
    "age":24,
    "marritial status":undefined,
    "developer":true

}
console.log(item["marritial status","age"])



//q1 try to add new key in the given object

const data={
    "name":"shiva",
    "age":2,

}
data["mob"]="8787665";
console.log(data)
//data is a refence of object 


    `,
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
    code: `
    function findOddEven(number){
    (number % 2==0 ) ? console.log("even") :console.log("odd")
}
findOddEven(37)




/**
 * Anonymous function / function expression : variable or an event to run.
 */

let findoddeven=function (number){
    (number % 2==0 ) ? console.log("even") :console.log("odd")
}
findoddeven(84)

/*IIFE

Invoked function expression runs as soon as the browser encounters it.
The benefit of this function is that it runs immediately where it’s located 
in the code and produces a direct output. That means 
it is unaffected by code which appears further down in the script which can be useful.
*/

let iif=(function (){
    console.log("my name is Rohit")
})();
    `,
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
    code: `
let obj={
   firstName:"prakash",
    lastName:"sahoo"
}

console.log(obj.firstName)  //property called by . notation

console.log(obj["firstName"])//property called by array notation
//modify property

obj.firstName="Rohit";
console.log(obj.firstName);

//add new property

obj.age=25;

console.log(obj) // op:{ firstName: 'Rohit', lastName: 'sahoo', age: 25 }

//delete property

delete obj.firstName
console.log(obj) // op:{ lastName: 'sahoo', age: 25 }

`,
    output: "John"
  },
  {
    topicName: "Arrays",
    description: "Arrays are ordered lists of values.",
    code: `
    /**
 * In JavaScript, array is a single variable that is used to store different elements.
 * It is often used when we want to store list of elements and access  them by a single variable.
 * 
 * in javascript type of array is a object
 * 
 * we can store multiple type of data type 
 * 
 * always array index no. start from 0
 */

let arr=[23,3,"prakash"];
console.log(arr);



//example
let name=['arun','anand','khagesh','prabin'];
console.log(name[2]);//it will print index two element

//methods of an array

//*push method-used for add element at the end of an array and it can  change original array
//ex--
name.push("prakash");
console.log(name);//print total element of an array['arun','anand','khagesh','prabin','prakash]

//pop_method of anrray is used for delete an element end of an array it can also change orginal arr
//ex--
name.pop();
console.log(name) //['arun','anand','khagesh','prabin']

//unshift_method is used to add element at the starting of index 
//ex---
name.unshift('chandan');
console.log(name);//['chandan','arun','anand','khagesh','prabin']

//shift_method is used to delete element at the starting of index
//ex---
name.shift();
console.log(name);//['arun','anand','khagesh','prabin']

//splice() is used random element delete alse we add and it can change the original array
name.splice(2,1);// it delete one element from  index no.2 
console.log(name);//['arun','anand','prabin']
name.splice(2,1,"jyoti");
console.log(name); //[ 'arun', 'anand', 'jyoti' ] here prabin removed and add jyoti



// slice() create new array with change original array
console.log(name.slice(1)); //[ 'anand', 'jyoti' ] remove index 1 item



//split() in array
//make sentence to aaray
let fr="khalikote autonomous college"
let xyz=fr.split(" ");//it dpend what we pass argument here we pass space ..
console.log(xyz);//['khalikote','autonomous','college']

//join() in an array we can join text and using this method
let mn=name.join("---");
console.log(mn); //arun---anand---prabin

//concat() this method is used for adding two or more array it doesn't change existing array
let lastName=['pradhan','samal','sahu'];
let friend=name.concat(lastName);
console.log(friend); //[ 'arun', 'anand', 'prabin', 'pradhan', 'samal', 'sahu' ]

//sort( )  for sort in alpha betically  it can change original array

console.log(name.sort());
// in sort method we can arrange it accending or decending order using a compare function
//it can change the original
//ex:

let arr1=[13,344,4,23,7,2,76,9,3];
let compare=(a,b)=>{
  return a-b; //for deccending order and 'b-a' used for accending order
}
console.log(arr1.sort(compare)) //[2,3,4,7,9,13,23,76,344] deccending oreder



//reverse method used tp reverse all items

console.log(arr1.reverse()); //[344, 76, 23, 13, 9,7,  4,  3,  2]


//from() used to create a array from other object

let a="raghav";
console.log(Array.from(a)); //[ 'r', 'a', 'g', 'h', 'a', 'v' ]
    `,
    output: "2"
  },
  {
    topicName: "Array Methods (map, filter, reduce,forEach)",
    description: "Array methods are used to manipulate arrays.",
    code: `
  

    let arr=[1,5,11];

    let arr1=arr.map((val,indx,arr)=>{
        console.log(val,indx,arr);//it print val,index,array like: 5 1 [ 1, 5, 11 ]
        return val+indx;
    })
    console.log(arr1);

    /**
 * in filter method only the the true value return 
 */

let arr=[1,2,3,4,5,53,];
let new_Arr=arr.filter((val,indx,arr)=>{
  return val >5 ;

})
console.log(new_Arr);

//find the duplicate no

function findDuplicates(arr1) {
   return  arr1.filter((item, index) => arr1.indexOf(item) !== index);
   // console.log(arr1);
   // return [...new Set(arr11)] // sort method for removing duplicate
}
 
const arr1 = [1,6,2,4,6,7,8,9,8,7,9,5];
const duplicates = findDuplicates(arr1);

console.log(duplicates); 

/**
 * reduce method pick the element of array from left to right and conver it a single value;
 * we pass two arguments(accumulator,value)
 */
let arr=[1,2,4,4,5,3];
//let reduce=arr.reduce((acc,val)=>{return acc+val},intialvalue);
let reduce=arr.reduce((acc,val)=>{return acc+val},9);  //the total arrray is=19 and intail value 9 total=28
console.log(reduce)

/**
 * when we need to perform a same operation for each element of a array there we use for each method
 * we can pass three argument forEach(value,index,arr)
 * 
 */
 let arr=[1,2,3,4,5,6,7,8,9];

 arr.forEach((ele)=>{  console.log(ele*ele)});

//for....of loop using this loop we can do the iteration method only for array

for(let i of arr){
    console.log(i) //[1,2,3,4,5,6,7,8,9];
}

//for...in loop using this loop we can find index no
for(let i in arr){
    console.log(i) //[1,2,3,4,5,6,7,8]; index no
}
  
    `,
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

/**
 * object destructure key based
 * 
 * whene we destrucure a object it most be need a valid key name otherwise undefined show
 */

let obj={
    name:"Prakash",
    email:"rohitsahoo866@gmail.com",
    mob:7750097143
}

let {email}=obj; //here email don't copy first value it depends upon key

console.log(email);


//we can destrure using rest operator
let {...rest}=obj;
console.log(rest); // print all key and value of a object

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
    code: `
    //ex promise object
let data=2
let _promise=new Promise((resolve,reject)=>{ //resolve and reject are  function
    setTimeout(()=>{
        reject("err")
       // console.log(data)  
},2000)
})

_promise.then((item)=>{console.log(item)}).catch((err)=>{
    console.log(err);
})
`
  ,
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
    code: `
    b=10;
    console.log(b); //10
    var b;
    //in the above code 'var b' will shift the top of the code

    console.log(x); //undefined
    var x=9;
/**
 * in the above code we will get undefined because
 * console.log(x)
 * var x=9; the execution code will this type so x didn't get any value
            {
                var x;
                console.log(x);
                x=9;
            }
 */
    
    //for function
 
    super_man()  //here we called a function which is not defined but it give out put
   function super_man(){
    console.log("super man have four hand and 10 heads");
   }
    `,
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
export default topics
