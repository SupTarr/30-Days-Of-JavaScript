/* 
  Assignment operators
    An equal sign in JavaScript is an assignment operator. 
    It uses to assign a variable.
*/
let firstName = "Asabeneh";
let country = "Finland";

// Arithmetic Operators: mathematical operators
let numOne = 4;
let numTwo = 3;
let sum = numOne + numTwo;
let diff = numOne - numTwo;
let mult = numOne * numTwo;
let div = numOne / numTwo;
let remainder = numOne % numTwo;
let powerOf = numOne ** numTwo;

console.log(sum, diff, mult, div, remainder, powerOf);
// 7, 1, 12, 1.33, 1, 64

// Comparison Operators
console.log(3 > 2); // true, because 3 is greater than 2
console.log(3 >= 2); // true, because 3 is greater than 2
console.log(3 < 2); // false,  because 3 is greater than 2
console.log(2 < 3); // true, because 2 is less than 3
console.log(2 <= 3); // true, because 2 is less than 3
console.log(3 == 2); // false, because 3 is not equal to 2
console.log(3 != 2); // true, because 3 is not equal to 2
console.log(3 == "3"); // true, compare only value
console.log(3 === "3"); // false, compare both value and data type
console.log(3 !== "3"); // true, compare both value and data type
console.log(3 != 3); // false, compare only value
console.log(3 !== 3); // false, compare both value and data type
console.log(0 == false); // true, equivalent
console.log(0 === false); // false, not exactly the same
console.log(0 == ""); // true, equivalent
console.log(0 == " "); // true, equivalent
console.log(0 === ""); // false, not exactly the same
console.log(1 == true); // true, equivalent
console.log(1 === true); // false, not exactly the same
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(NaN == NaN); // false, not equal
console.log(NaN === NaN); // false
console.log(typeof NaN); // number

console.log("mango".length == "avocado".length); // false
console.log("mango".length != "avocado".length); // true
console.log("mango".length < "avocado".length); // true
console.log("milk".length == "meat".length); // true
console.log("milk".length != "meat".length); // false
console.log("tomato".length == "potato".length); // true
console.log("python".length > "dragon".length); // false

// Logical Operators
// &&: ampersand operator example
console.log(4 > 3 && 10 > 5); // true && true -> true
console.log(4 > 3 && 10 < 5); // true && false -> false
console.log(4 < 3 && 10 < 5); // false && false -> false

// ||: pipe or operator, example
console.log(4 > 3 || 10 > 5); // true || true -> true
console.log(4 > 3 || 10 < 5); // true || false -> true
console.log(4 < 3 || 10 < 5); // false || false -> false

// !: Negation examples
let check = !(4 > 3); //  false
let isLightOn = true;
let isLightOff = !isLightOn; // false
let isMarried = !false; // true

// Increment Operator
let countUp = 0;
console.log(++countUp); // 1
console.log(countUp); // 1

console.log(countUp++); // 1
console.log(countUp); // 2

// Decrement Operator
let countDown = 0;
console.log(--countDown); // -1
console.log(countDown); // -1

console.log(countDown--); // -1
console.log(countDown); // -2

// Ternary Operators
let isRaining = true;
isRaining
  ? console.log("You need a rain coat.")
  : console.log("No need for a rain coat.");
