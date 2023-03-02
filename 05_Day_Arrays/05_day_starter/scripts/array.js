// Create an empty array
const arr1 = Array();
const arr2 = [];

// Create an array with values
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
const fruits = ["banana", "orange", "mango", "lemon"]; // array of strings, fruits
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of strings, vegetables

console.log("Numbers:", numbers);
console.log("Number of numbers:", numbers.length);

// Array can have items of different data types
const arr = [
  "Asabeneh",
  250,
  true,
  { country: "Finland", city: "Helsinki" },
  { skills: ["HTML", "CSS", "JS", "React", "Python"] },
];
console.log(arr);

// Creating an array using split
let js = "JavaScript";
const charsInJavaScript = js.split("");

console.log(charsInJavaScript);
// ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
const companies = companiesString.split(",");

console.log(companies);
// ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]

let txt =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const words = txt.split(" ");

console.log(words);
// the text has special characters think how you can just get only the words
// ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python."]

console.log(words.map((word) => word.replace(/\W/g, "")));
// ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

// Accessing array items using index
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
]; // List of countries

console.log(countries); // -> all countries in array
console.log(countries[0]); // -> Albania
console.log(countries[10]); // -> Kenya

let lastIndex = countries.length - 1;
console.log(countries[lastIndex]); // -> Kenya

// Modifying array element
countries[0] = "Afghanistan"; // Replacing Albania by Afghanistan
countries[lastIndex] = "Korea"; // Replacing Kenya by Korea

console.log(countries);
// ["Afghanistan", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Korea"]
