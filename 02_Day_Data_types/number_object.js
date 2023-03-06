// Numbers
// An integer is a whole number
const myNumber = 42;

// A number with a decimal point is a float which references the "floating point"
const myFloat = 42.0;
const myString = "42.123abc";

// Number Methods
// The Number.isInteger() method determines whether the passed value is an integer
console.log(Number.isInteger(myNumber));

// NaN is an acronym for Not a Number
// The Number.isNaN() method determines whether the passed is NaN AND its type is Number.

// global isNaN() function determines whether a value is NaN or not.
console.log(Number.isNaN("Dave"));

/*
  The Number.parseFloat() method parses an argument and
  returns a floating point number. If a number cannot be
  parsed from the argument, it returns NaN.
*/

/*
  The toFixed() method formats a number according to how
  many decimal points you provide as the parameter.
*/
console.log(Number.parseFloat(myString).toFixed(2));

// The toString() method returns a string representing the number.
console.log(typeof myFloat.toString());
