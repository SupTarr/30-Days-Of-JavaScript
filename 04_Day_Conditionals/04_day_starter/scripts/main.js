// This is your main.js script

// Exercise from https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/04_Day_Conditionals/04_day_conditionals.md#-exercises

// Exercise: Level 1
// Exercise 1.1:
let year = parseInt(prompt("Enter your age: "));
if (year >= 18) {
  console.log("Exercise 1.1 - You are old enough to drive.");
} else {
  console.log(`Exercise 1.1 - You are left with ${18 - year} to drive.`);
}

let myAge = parseInt(prompt("Enter my age: "));
let yourAge = parseInt(prompt("Enter your age: "));
if (myAge > yourAge) {
  console.log(`Exercise 1.2 - I am ${myAge - yourAge} years older than you.`);
} else if (myAge < yourAge) {
  console.log(`Exercise 1.2 - You are ${yourAge - myAge} years older than me.`);
} else {
  console.log(`Exercise 1.2 - We are the same age.`);
}

let a = 4;
let b = 3;
if (a > b) {
  console.log("Exercise 1.3.1 - a is greater than b");
} else {
  console.log("Exercise 1.3.1 - a is less than or equal to b");
}

a > b
  ? console.log("Exercise 1.3.2 - a is greater than b")
  : console.log("Exercise 1.3.2 - a is less than or equal to b");

let number = parseInt(prompt("Enter a number: "));
if (number % 2 == 0) {
  console.log(`Exercise 1.4 - ${number} is an even number.`);
} else {
  console.log(`Exercise 1.4 - ${number} is an odd number.`);
}

let score = 80;
if (score >= 80 && score <= 100) {
  console.log("Exercise 2.1 - A");
} else if (score >= 70 && score < 80) {
  console.log("Exercise 2.1 - B");
} else if (score >= 60 && score < 70) {
  console.log("Exercise 2.1 - C");
} else if (score >= 50 && score < 60) {
  console.log("Exercise 2.1 - D");
} else {
  console.log("Exercise 2.1 - F");
}

let autumn = ["September", "October", "November"];
let winter = ["December", "January ", "February"];
let spring = ["March", "April", "May"];
let summer = ["June", "July", "August"];
let month = prompt("Enter a month: ");
if (autumn.includes(month)) {
  console.log("Exercise 2.2 - Autumn");
} else if (winter.includes(month)) {
  console.log("Exercise 2.2 - Winter");
} else if (spring.includes(month)) {
  console.log("Exercise 2.2 - Spring");
} else {
  console.log("Exercise 2.2 - Summer");
}

let workingDays = ["monday", "tuesday", "wednesday", "thursday", "friday"];
let weekend = ["saturday", "sunday"];
let day = prompt("Enter a day: ").toLowerCase();
if (workingDays.includes(day)) {
  console.log(`Exercise 2.3 - ${day} is a working day.`);
} else if (weekend.includes(day)) {
  console.log(`Exercise 2.3 - ${day} is a weekend.`);
}

let months31Days = [
  "january ",
  "march",
  "may",
  "july",
  "august",
  "october",
  "december",
];
let months30Days = ["april ", "june", "september", "november"];
let checkMonth = prompt("Enter a month: ").toLowerCase();
if (months31Days.includes(checkMonth)) {
  console.log(`Exercise 3.1 - ${checkMonth} has 31 days.`);
} else if (months30Days.includes(checkMonth)) {
  console.log(`Exercise 3.1 - ${checkMonth} has 30 days.`);
} else {
  console.log(`Exercise 3.1 - february has 28 or 29 days.`);
}

let checkYear = parseInt(prompt("Enter a year: "));
function leapYear(year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}
if (leapYear(checkYear)) {
  console.log(`Exercise 3.2 - ${checkYear} is a leap year.`);
} else {
  console.log(`Exercise 3.2 - ${checkYear} is not a leap year.`);
}
