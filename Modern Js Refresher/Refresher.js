//Template literals
let age = 22;
console.log(`I am ${age} years old`);

//Arrow functions - automatically bind the this keyword to the context in which they are declared at
const greet = name => `Hello ${name}`; // Arrow function with a single argument - parentheses mandatory
console.log(greet('Henri'));

const sayHello = () => 'Hello';// arrow function with no argument - mandatory parentheses
console.log(sayHello());

const add = (a, b) =>{// arrow function with multiple arguments - parentheses is mandatory

   return  a + b;

}
console.log(add(2, 3));

//implicit return - no return key word single function expression
const add = (a, b) => a + b;
console.log(add(4, 5));

//Returning an Object - to return an object wrap it directly in parentheses
const createUser = (name, age) => ({name, age});
console.log(createUser('Henri', 22));

//Default parameters - allow functions to have pre-set values if no arguments are passed or when an argument is undefined 

//Destructuring Objects and Arrays 
// destructuring allows one to extract values from arrays and properties from objects into variables
// it is obtained by enclosing the desired variables within curly braces for objects and square brackets for arrays 

//Array Destructuring
const [first, second] = [5, 10];
console.log(first);

// Object destructuring 
const user = { name: 'Henri', age: 22};
const {name, age} = user;
console.log(name);

//Rest and Spread Operators (...)
// spread operator - used to unpack arrays or objects into individual elements 

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);

// it can also be used to copy objects or combine objects 

const obj1 = {name: 'Henri', age :22};
const obj2 = {...obj1, job:'Engineer'};
console.log(obj2)

// Rest operator - does the opposite by collecting multiple arguments or elements into a single array 
// used when working with functions that accept a variable no of arguments 

function sum(...args) {
    return args.reduce((total, num) => total + num, 0);

}

console.log(sum(1, 2, 3));//6

//Map, filter and Reduce Methods - useful in array manipulation in js 
//Map - transforms the elements of an array according to the provided function 
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2 );
console.log(doubled);

//Filter - creates a new array with elements that pass a condition specified in the callback function
const numbers = [1, 2, 3, 4, 5 ,6];
const evenNumbers = numbers.filter( num => num % 2 === 0);
console.log(evenNumbers);//2,4,6



//Reduce - Accumulates values into a single result. it is used when in need to accumulate data such a s summing values or combining objects 
const numbers = [1, 2, 3, 4, 5, 6];
const sum = numbers.reduce((total, num) => total + sum , 0);
console.log(sum);//10

//Mutability Issues with Methods like Array Sort 
// react recognizes immutability within state management
//react detects state changes by comparing the previous and new state and triggers rerenders based on the changes
const numbers = [4, 2, 3, 5, 1];
const sorted = [...numbers].sort();
console.log(sorted);

//Ternary Operator
// syntax condition ? expressionIfTrue : expressionIfFalse

let age = 22;
let message = age > 18 ? "you can vote " : " You are too young";
console.log(message);

//Short-circuiting and Logical Operators - determines whether a component should be rendered in react

//  LOGICAL AND (&&) the && operator evaluates the expression on the left side first . if its true the right-hand expression is evaluated and returned . if its false the right hand expression is ignored 
let isLoggedIn = true;
console.log(isLoggedIn && 'Welcome back '); 

//LOGICAL OR (||) - it works oppositely in that it evaluates the left- hand expression first and if its true or has any truthy value it returns that value if its false, it evaluates and returns the right hand  expressions
let username = ' ';
console.log(username || 'Guest');


//Optional chaining(?.) - it allows accessing deeply nested properties of an object without worrying about encountering undefined or null errors 

//Asynchronous JS :callbacks, Promises, Async/Await

//Modules (import/export) - it enables you exporting and importing of values, functions or components from one file to another 
//module.js
export const greet = () => console.log('Hello');

//anotherFile.js
import{greet} from './module';
greet();
