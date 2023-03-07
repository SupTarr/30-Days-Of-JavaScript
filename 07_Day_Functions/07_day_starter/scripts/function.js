// Function without a parameter and return
function addTwoNumbers() {
  let numOne = 10;
  let numTwo = 20;
  let sum = numOne + numTwo;

  console.log(sum);
}

addTwoNumbers(); // a function has to be called by its name to be executed

// Function returning value
function printFullName() {
  let firstName = "Supakrit";
  let lastName = "Chuchatwannakul";
  let space = " ";
  let fullName = firstName + space + lastName;
  return fullName;
}
console.log(printFullName());

// Function with a parameter
function areaOfCircle(r) {
  let area = Math.PI * r * r;
  return area;
}

console.log(areaOfCircle(10)); // should be called with one argument

// Function with many parameters
function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArrayValues(numbers));

// Unlimited number of parameters in regular function
function sumAllNums() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(sumAllNums(1, 2, 3, 4)); // 10
console.log(sumAllNums(10, 20, 13, 40, 10)); // 93

// Unlimited number of parameters in arrow function
const sumAllNums = (...args) => {
  let sum = 0;
  for (const element of args) {
    sum += element;
  }
  return sum;
};

console.log(sumAllNums(1, 2, 3, 4)); // 10
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40)); // 173

/*
  Function expression are anonymous functions. After we create 
  a function without a name and we assign it to a variable.
*/
const square = function (n) {
  return n * n;
};

console.log(square(2)); // -> 4

/*
  Self invoking functions are anonymous functions 
  which do not need to be called to return a value.
*/
let squaredNum = (function (n) {
  return n * n;
})(10);

console.log(squaredNum);

// Function with default parameters
function weightOfObject(mass, gravity = 9.81) {
  let weight = mass * gravity + " N"; // the value has to be changed to string first
  return weight;
}

// 9.81 gravity at the surface of Earth
console.log("Weight of an object in Newton: ", weightOfObject(100));
// 1.62 gravity at the surface of Moon
console.log("Weight of an object in Newton: ", weightOfObject(100, 1.62));
