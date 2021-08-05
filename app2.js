// let greetings = function() {
//   return 'Hello World';
// } usual function


//arrow function
// let greetings = () => {
//   return 'Hello World';
// }

// or we can put 
let greetings = () => 'Hello World Arrow'; 
// because no parameters we are passing

let message = greetings();
console.log(message);


let greet = function greeting(name = 'Default') {
  return `Hello, ${name}!`;
}

let message1 = greet();
console.log(message1);

//arrow function for greet
let greet2 = (name = 'Default2') => `Hello ${name}!`;
let message1a = greet2();
console.log(message1a);

function sum(n1, n2) {
  return n1 + n2;
}

let sum1 = (n1, n2) => n1 + n2;

let output = sum1(2, 4);
console.log(output);

