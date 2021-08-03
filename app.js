function sum(num1, num2) {
  return arguments[0] + arguments[1];
}

let x = sum(2,3);
console.log(x);

function greeting() {
  let message = 'Hi';
  let sayHi = function hi() {
    let message = 'Hi hi';
    console.log(message + ' inside block');
  }
  sayHi();
  console.log(message);
}

greeting();