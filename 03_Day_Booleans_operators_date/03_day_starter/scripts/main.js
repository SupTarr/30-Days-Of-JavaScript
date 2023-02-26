// This is your main.js script

// Exercise from https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/03_Day_Booleans_operators_date/03_booleans_operators_date.md#-day-3-exercises

// Exercise: Level 1
// Exercise 1.1:
let firstName = "Supakrit";
let lastName = "Chuchatwannakul";
let country = "Thailand";
let city = "Songkhla";
let age = 22;
let isMarried = false;
let year = 2023;

console.log("Type of firstName: ", typeof firstName);
console.log("Type of lastName: ", typeof lastName);
console.log("Type of country: ", typeof country);
console.log("Type of city: ", typeof city);
console.log("Type of age: ", typeof age);
console.log("Type of isMarried: ", typeof isMarried);
console.log("Type of year: ", typeof year);

console.log("Exercise 1.2 - type of '10' is equal to 10: ", typeof "10" == 10);

console.log(
  "Exercise 1.3 - parseInt('9.8') is equal to 10: ",
  parseInt("9.8") == 10
);

console.log("Exercise 1.4.1 - Three truthy values: ", true, 1, "true");
console.log("Exercise 1.4.2 - Three falsy values: ", false, 0, NaN);

console.log("Exercise 1.5.1 - 4 > 3: ", 4 > 3); // true
console.log("Exercise 1.5.2 - 4 >= 3: ", 4 >= 3); // true
console.log("Exercise 1.5.3 - 4 < 3: ", 4 < 3); // false
console.log("Exercise 1.5.4 - 4 <= 3: ", 4 <= 3); // false
console.log("Exercise 1.5.5 - 4 == 4: ", 4 == 4); // true
console.log("Exercise 1.5.6 - 4 === 4: ", 4 === 4); // true
console.log("Exercise 1.5.7 - 4 != 4: ", 4 != 4); // false
console.log("Exercise 1.5.8 - 4 !== 4: ", 4 !== 4); // false
console.log("Exercise 1.5.9 - 4 != '4': ", 4 != "4"); // false
console.log("Exercise 1.5.10 - 4 == '4': ", 4 == "4"); // true
console.log("Exercise 1.5.11 - 4 === '4': ", 4 != 4); // false
console.log(
  "Exercise 1.5.12 - Length of 'python' and 'jargon': ",
  "python".length == "jargon".length
); // true

console.log("Exercise 1.6.1 - 4 > 3 && 10 < 12: ", 4 > 3 && 10 < 12); // true
console.log("Exercise 1.6.2 - 4 > 3 && 10 > 12: ", 4 > 3 && 10 > 12); // false
console.log("Exercise 1.6.3 - 4 > 3 || 10 < 12: ", 4 > 3 || 10 > 12); // true
console.log("Exercise 1.6.4 - 4 > 3 || 10 > 12: ", 4 > 3 || 10 > 12); // true
console.log("Exercise 1.6.5 - !(4 > 3): ", !(4 > 3)); // false
console.log("Exercise 1.6.6 - !(4 < 3): ", !(4 < 3)); // true
console.log("Exercise 1.6.7 - !(false): ", !false); // true
console.log("Exercise 1.6.8 - !(4 > 3 && 10 < 12): ", !(4 > 3 && 10 < 12)); // false
console.log("Exercise 1.6.9 - !(4 > 3 && 10 > 12): ", !(4 > 3 && 10 > 12)); // true
console.log("Exercise 1.6.10 - !(4 === '4'): ", !(4 === "4")); // true
console.log(
  "Exercise 1.6.11 - There is no 'on' in both 'dragon' and 'python': ",
  !("dragon".includes("on") && "python".includes("on"))
); // false

const now = new Date();
console.log("Exercise 1.7.1 - What is the year today?: ", now.getFullYear());
console.log(
  "Exercise 1.7.2 - What is the month today as a number?: ",
  now.getMonth()
);
console.log("Exercise 1.7.3 - What is the date today?: ", now.getDate());
console.log(
  "Exercise 1.7.4 - What is the day today as a number?: ",
  now.getDay()
);
console.log("Exercise 1.7.5 - What is the hours now?: ", now.getHours());
console.log("Exercise 1.7.6 - What is the minutes now?: ", now.getMinutes());
console.log(
  "Exercise 1.7.7 - Find out the numbers of seconds elapsed from January 1, 1970 to now: ",
  Math.round(now.getTime() / 1000)
);

// Exercises: Level 2

let base = prompt("Enter base: ");
let height = prompt("Enter height: ");
let area = 0.5 * base * height;
console.log(
  "Exercise 2.1 - Prompt the user to enter base and height: ",
  "The area of the triangle is ",
  area
);

let sideA = parseInt(prompt("Enter side a: "));
let sideB = parseInt(prompt("Enter side b: "));
let sideC = parseInt(prompt("Enter side c: "));
let perimeter = sideA + sideB + sideC;
console.log(
  "Exercise 2.2 - Prompt the user to enter side a, side b, and side c: ",
  "The perimeter of the triangle is ",
  perimeter
);

let length = parseInt(prompt("Enter length: "));
let width = parseInt(prompt("Enter width: "));
let recArea = length * width;
let recPerimeter = 2 * (length + width);
console.log(
  "Exercise 2.3 - Prompt to calculate area and perimeter of rectangle: ",
  "\nThe area of the rectangle is ",
  recArea,
  "\nThe perimeter of the rectangle is ",
  recPerimeter
);

let radius = parseInt(prompt("Enter radius: "));
let circleArea = Math.PI * radius * radius;
let circleCircum = 2 * Math.PI * radius;
console.log(
  "Exercise 2.4 - Prompt to calculate area and circumference of circle: ",
  "\nThe area of the circle is ",
  circleArea.toFixed(2),
  "\nThe circumference of the circle is ",
  circleCircum.toFixed(2)
);

// ax + by + c = 0
let a = parseInt(prompt("Enter a: "));
let b = parseInt(prompt("Enter b: "));
let c = parseInt(prompt("Enter c: "));
let slope = -(a / b);
let xIntercept = -(c / a);
let yIntercept = -(c / b);
console.log(
  "Exercise 2.5 - Calculate the slope, x-intercept and y-intercept of 'y = 2x - 2': ",
  "\nSlope is ",
  slope,
  "\nX-intercept is ",
  xIntercept,
  "\nY-intercept is ",
  yIntercept
);

let x1 = parseInt(prompt("Enter x1: "));
let x2 = parseInt(prompt("Enter x2: "));
let y1 = parseInt(prompt("Enter y1: "));
let y2 = parseInt(prompt("Enter y2: "));
let slopeBtwPoint = (y2 - y1) / (x2 - x1);
console.log(
  "Exercise 2.6 - Find the slope between point(2, 2) and point(6, 10): ",
  "\nSlope is ",
  slopeBtwPoint
);

console.log(
  "Exercise 2.7 - Compare the slope of above two questions: ",
  slope == slopeBtwPoint
);

let x = parseInt(prompt("Enter x: "));
let y = x ** 2 + 6 * x + 9;
console.log(
  "Exercise 2.8 - Calculate the value of y (y = x^2 + 6x + 9): ",
  "\nY is ",
  y,
  "\nY is equal to 0 when x is equal to ",
  -3
);

let hours = parseInt(prompt("Enter hours: "));
let rate = parseInt(prompt("Enter rate per hour: "));
let earn = hours * rate;
console.log(
  "Exercise 2.9 - Calculate pay of the person: ",
  "\nYour weekly earning is ",
  earn
);

let myName = prompt("Enter name: ");
if (myName.length > 7) {
  console.log("Exercise 2.10 - Your name is long");
} else {
  console.log("Exercise 2.10 - Your name is short");
}

let myFamilyName = prompt("Enter my family name: ");
if (myName.length > myFamilyName.length) {
  console.log(
    `Exercise 2.11 - Your first name, ${myName} is longer than your family name, ${myFamilyName}`
  );
} else {
  console.log(
    `Exercise 2.11 - Your first name, ${myName} is shorter than your family name, ${myFamilyName}`
  );
}

let myAge = 250;
let yourAge = 25;
if (myAge > yourAge) {
  console.log(`Exercise 2.12 - I am ${myAge} years older than you.`);
} else {
  console.log(`Exercise 2.12 - I am ${myAge} years younger than you.`);
}

let birthYear = parseInt(prompt("Enter birth year: "));
if (now.getFullYear() - birthYear >= 18) {
  console.log(
    `Exercise 2.13 - You are ${
      now.getFullYear() - birthYear
    }. You are old enough to drive.`
  );
} else {
  console.log(
    `Exercise 2.13 - You are ${
      now.getFullYear() - birthYear
    }. You will be allowed to drive after ${
      18 - (now.getFullYear() - birthYear)
    } years.`
  );
}

let yearsYouLive = parseInt(prompt("Enter number of years you live: "));
console.log(
  `Exercise 2.14 - You lived ${yearsYouLive * 365 * 24 * 60 * 60} seconds.`
);

let yearNow = now.getFullYear().toString();
let monthNow = now.getMonth().toString();
if (monthNow.length <= 1) {
  monthNow = "0" + (parseInt(monthNow) + 1).toString();
}
let dateNow = now.getDate().toString();
if (dateNow.length <= 1) {
  dateNow = "0" + dateNow;
}
let hourNow = now.getHours().toString();
if (hourNow.length <= 1) {
  hourNow = "0" + hourNow;
}
let minuteNow = now.getMinutes().toString();
if (minuteNow.length <= 1) {
  minuteNow = "0" + minuteNow;
}

console.log(
  `Exercise 2.15.1 - ${yearNow}-${monthNow}-${dateNow} ${hourNow}:${minuteNow}`
);
console.log(
  `Exercise 2.15.2 - ${dateNow}-${monthNow}-${yearNow} ${hourNow}:${minuteNow}`
);
console.log(
  `Exercise 2.15.3 - ${dateNow}/${monthNow}/${yearNow} ${hourNow}:${minuteNow}`
);
