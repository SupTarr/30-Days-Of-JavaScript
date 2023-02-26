// * Window Object *

// Window alert() method:
// displays an alert box with a specified message and an OK button.
alert("Welcome to 30DaysOfJavaScript");

// Window prompt() method:
// display a prompt box with an input on your browser to take input values.
let number = prompt("Enter number", "number goes here");
console.log(number);

// Window confirm() method:
// displays a dialog box with a specified message,
// along with an OK and a Cancel button.
const agree = confirm("Are you sure you like to delete? ");
console.log(agree);
// result will be true or false based on what you click on the dialog box

// * Date Object *

// Creating a time object
const now = new Date();
console.log(now);
// Sun Feb 26 2023 11:00:48 GMT+0700 (Indochina Time)

// Getting full year
console.log(now.getFullYear()); // 2023

// Getting month
console.log(now.getMonth());
// 1, because the month is February, month (0 - 11)

// Getting date
console.log(now.getDate());
// 26, because the day of the month is 26th, day (1 - 31)

// Getting day in week
console.log(now.getDay());
// 0, because the day is Sunday which is the 1th day
// Sunday is 0, Monday is 1 and Saturday is 6
// Getting the weekday as a number (0 - 6)

// Getting hours
console.log(now.getHours());
// 11, because the time is 11:00:48

// Getting minutes
console.log(now.getMinutes());
// 0, because the time is 11:00:48

// Getting seconds
console.log(now.getSeconds());
// 48, because the time is 11:00:48

// Getting time: give time in milliseconds starting from
// January 1, 1970 (Unix time).
// 1. Using getTime()
console.log(now.getTime());
// 1677384048136, this is the number of milliseconds passed from
// January 1, 1970 to February 26, 2023 11:00:48

// 2. Using Date.now()
const allSeconds = Date.now();
console.log(allSeconds);
// 1677384048136, this is the number of milliseconds passed from
// January 1, 1970 to February 26, 2023 11:00:48

const timeInSeconds = new Date().getTime();
console.log(allSeconds == timeInSeconds); // true

// Human readable time format
const year = now.getFullYear(); // return year
const month = now.getMonth() + 1; // return month (0 - 11)
const date = now.getDate(); // return date (1 - 31)
const hours = now.getHours(); // return number (0 - 23)
const minutes = now.getMinutes(); // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`); // 26/2/2023 11.0
