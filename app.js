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

(function wow() {
  console.log('IIFE');
})();

let closure = (function() {
  let message = 'M1';
  let getMessage = function() {
    return message;
  };
  return {
    getMessage: getMessage
  };
})();
console.log(closure.getMessage());

function setupCounter(val) {
  return function counter() {
    return val++;
  }
}

  let counter1 = setupCounter(0);
  console.log(counter1());
  console.log(counter1());
  let counter2 = setupCounter(10);
  console.log(counter2());
  console.log(counter2());