/*
  Window Global Object
    Without using console.log() open your browser and check, you will see the 
    value of "a" and "b" if you write "a" or 'b' on the browser. That means 
    "a" and "b" are already available in the window.
*/

/*
  declaring a variable without let or const make it 
  available in window object and this found anywhere
*/
a = "JavaScript";
// this is a global scope variable and found in the window object
b = 10;

function letsLearnScope() {
  // if we don't call function, we won't execute inside.
  console.log(a, b);
  if (true) {
    console.log(a, b);
  }
}
console.log(a, b); // accessible

/*
  Global scope
    A globally declared variable can be accessed every where in the same file.
    But the term global is relative. It can be global to the file or it can be
    global relative to some block of codes.
*/
{
  let a = "JavaScript"; // is a global scope it will be found anywhere in this file
  let b = 10; // is a global scope it will be found anywhere in this file
  function letsLearnScope() {
    console.log(a, b); // JavaScript 10, accessible
    if (true) {
      let a = "Python";
      let b = 100;
      console.log(a, b); // Python 100
    }
    console.log(a, b); // JavaScript 10, accessible
  }
  letsLearnScope();
  console.log(a, b); // JavaScript 10, accessible
}

/*
  Local scope
    A variable is declared as local can be accessed only in certain block code.
      - Block Scope
      - Function Scope
*/
{
  let a = "JavaScript"; // is a global scope it will be found anywhere in this file
  let b = 10; // is a global scope it will be found anywhere in this file
  // Function scope
  function letsLearnScope() {
    console.log(a, b); // JavaScript 10, accessible
    let value = false;
    // Block Scope
    if (true) {
      // we can access from the function and outside the function but
      // variables declared inside the if will not be accessed outside the if block
      let a = "Python";
      let b = 20;
      let c = 30;
      let d = 40;
      value = !value;
      console.log(a, b, c, value); // Python 20 30 true
    }
    // we can not access c because c's scope is only the if block
    console.log(a, b, value); // JavaScript 10 true
  }
  letsLearnScope();
  console.log(a, b); // JavaScript 10, accessible
}

// A variable declared with "var" only scoped to function.
function letsLearnScope() {
  var gravity = 9.81;
  console.log(gravity);
}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

if (true) {
  var gravity = 9.81;
  console.log(gravity); // 9.81
}
console.log(gravity); // 9.81

for (var i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
console.log(i); // 3

/*
  A variable declared with "let" or "const" is block scope 
  (function block, if block, loop block, etc). 
*/
function letsLearnScope() {
  // you can use let or const, but gravity is constant I prefer to use const
  const gravity = 9.81;
  console.log(gravity);
}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

if (true) {
  const gravity = 9.81;
  console.log(gravity); // 9.81
}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
// console.log(i), Uncaught ReferenceError: i is not defined
