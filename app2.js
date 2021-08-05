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


let greet = function greeting(name) {
  return `Hello, ${name}!`;
}

let message1 = greet('John');
console.log(message1);

//arrow function for greet
let greet2 = name => `Hello ${name}!`;
let message1a = greet2('John Arrow');
console.log(message1a);