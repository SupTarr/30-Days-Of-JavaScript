// Exercise from https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/06_Day_Loops/06_day_loops.md#-exercisesday-6

// Exercise: Level 1
for (let i = 0; i <= 10; i++) {
  console.log("Exercise 1.1:", i);
}

for (let i = 10; i >= 0; i--) {
  console.log("Exercise 1.2:", i);
}

// let input = parseInt(prompt("Exercise 1.3: Enter n"));
// for (let i = 0; i <= input; i++) {
//   console.log("Exercise 1.3: ", i);
// }

for (let i = 1; i <= 7; i++) {
  console.log("Exercise 1.4:", Array(i).fill("#").join(""));
}

for (let i = 0; i <= 10; i++) {
  console.log("Exercise 1.5:", `${i} x ${i} = ${i * i}`);
}

for (let i = 0; i <= 10; i++) {
  console.log("Exercise 1.6: ", `${i}\t${i ** 2}\t${i ** 3}`);
}

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log("Exercise 1.7: Print only even numbers", i);
  }
}

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 1) {
    console.log("Exercise 1.8: Print only odd numbers", i);
  }
}

for (let i = 0; i <= 100; i++) {
  let isPrime = true;
  if (i > 1) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log("Exercise 1.9: Print only prime numbers", i);
    }
  }
}

let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log("Exercise 1.10: The sum of all numbers from 0 to 100 is", sum);

let sumEven = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    sumEven += i;
  }
}

let sumOdd = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 1) {
    sumOdd += i;
  }
}
console.log("Exercise 1.11: The sum of all evens from 0 to 100 is", sumEven);
console.log("Exercise 1.11: The sum of all odds from 0 to 100 is", sumOdd);

console.log("Exercise 1.12: Print sum of evens and sum of odds as array", [
  sumEven,
  sumOdd,
]);

let randomNumber = [];
for (let i = 0; i <= 5; i++) {
  randomNumber.push(Math.round(Math.random() * 10));
}
console.log("Exercise 1.13: Array of 5 random numbers", randomNumber);

let randomUniqueNumber = [];
for (let i = 0; i <= 5; i++) {
  let randomNumber;
  do {
    randomNumber = Math.round(Math.random() * 10);
  } while (randomUniqueNumber.includes(randomNumber));

  randomUniqueNumber.push(randomNumber);
}
console.log("Exercise 1.14: Array of 5 random numbers", randomUniqueNumber);

function makeId(length) {
  let result = "";
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
    counter += 1;
  }
  return result;
}

console.log(
  "Exercise 1.15: Develop a small script which generate a six characters random id",
  makeId(6)
);

// Exercise: Level 2
function makeHEX() {
  let result = "#";
  const hexNumber = "0123456789abcdef";
  let counter = 0;
  while (counter < 6) {
    result += hexNumber.charAt(Math.floor(Math.random() * hexNumber.length));
    counter += 1;
  }
  return result;
}

console.log(
  "Exercise 2.2: Write a script which generates a random hexadecimal number",
  makeHEX()
);

function makeRGB() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

console.log(
  "Exercise 2.3: Write a script which generates a random rgb color number",
  makeRGB()
);

const capitalizedCountries = countries.map((country) => {
  return country.toUpperCase();
});

console.log("Exercise 2.4:", capitalizedCountries);

const capitalizedCountriesLength = countries.map((country) => {
  return country.length;
});

console.log(
  "Exercise 2.5: Create an array for countries length",
  capitalizedCountriesLength
);

const countriesDetail = countries.map((country) => {
  return [country, country.slice(0, 3).toUpperCase(), country.length];
});

console.log("Exercise 2.6:", countriesDetail);

let includeLandCountries = countries.filter((country) => {
  if (country.match("land")) {
    return true;
  } else {
    return false;
  }
});

if (includeLandCountries.length > 0) {
  console.log(
    "Exercise 2.7: Filter to have only country containing 'land'",
    includeLandCountries
  );
} else {
  console.log(
    "Exercise 2.7: Filter to have only country containing 'land' ",
    "All these countries are without land"
  );
}

let endWithIaCountries = countries.filter((country) => {
  if (country.endsWith("ia")) {
    return true;
  } else {
    return false;
  }
});

if (endWithIaCountries.length > 0) {
  console.log(
    "Exercise 2.8: Filter to have only country end with 'ia'",
    endWithIaCountries
  );
} else {
  console.log(
    "Exercise 2.8: Filter to have only country end with 'ia' ",
    "These are countries ends without 'ia'"
  );
}

let biggestLength = "";
for (let i = 0; i < countries.length; i++) {
  if (biggestLength.length < countries[i].length) {
    biggestLength = countries[i];
  }
}
console.log(
  "Exercise 2.9: Find the country containing the biggest number of characters",
  biggestLength
);

console.log(
  "Exercise 2.10: Find the country containing only 5 characters",
  countries.filter((country) => {
    return country.length == 5 ? true : false;
  })
);

let biggestLengthTech = "";
for (let i = 0; i < webTechs.length; i++) {
  if (biggestLengthTech.length < webTechs[i].length) {
    biggestLengthTech = webTechs[i];
  }
}
console.log(
  "Exercise 2.11: Find the longest word in the webTechs array",
  biggestLengthTech
);

console.log(
  "Exercise 2.12: Create the following array of arrays",
  webTechs.map((tech) => {
    return [tech, tech.length];
  })
);

let acronym = "";
for (let i = 0; i < mernStack.length; i++) {
  acronym += mernStack[i][0];
}
console.log(
  "Exercise 2.13: Create the acronym MERN by using the array mernStack",
  acronym
);

for (let i = 0; i < webTechs.length; i++) {
  console.log("Exercise 2.14: Iterate through the webTechs array", webTechs[i]);
}

const fruits = ["banana", "orange", "mango", "lemon"];
let reversedFruits = [];
for (let i = fruits.length - 1; i >= 0; i--) {
  reversedFruits.push(fruits[i]);
}
console.log(
  "Exercise 2.14: Iterate through the webTechs array",
  reversedFruits
);

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
for (let i = 0; i < fullStack.length; i++) {
  for (let j = 0; j < fullStack[i].length; j++) {
    console.log(
      "Exercise 2.15: Print all the elements of array as shown below",
      fullStack[i][j]
    );
  }
}

// Exercise: Level 3
let copiedCountries = [];
for (let i = 0; i < countries.length; i++) {
  copiedCountries.push(countries[i]);
}
console.log(
  "Exercise 3.1: Copy countries array (Avoid mutation)",
  copiedCountries
);

const sortedCountries = copiedCountries.sort();
console.log(
  "Exercise 3.2: Sort the copied array and store in a variable",
  sortedCountries
);

console.log(
  "Exercise 3.3: Sort the webTechs array and mernStack array",
  webTechs.sort(),
  mernStack.sort()
);

console.log(
  "Exercise 3.4 & 3.6: Extract all the countries contain the word 'land'",
  copiedCountries.filter((country) => {
    return country.match("land") ? true : false;
  })
);

for (let i = 0; i < countries.length; i++) {
  if (biggestLength.length < countries[i].length) {
    biggestLength = countries[i];
  }
}
console.log(
  "Exercise 3.5: Find the country containing the biggest number of characters",
  biggestLength
);

console.log(
  "Exercise 3.7: Extract all the countries containing only four characters",
  copiedCountries.filter((country) => {
    return country.length == 4 ? true : false;
  })
);

console.log(
  "Exercise 3.8: Extract all the countries containing two or more words",
  copiedCountries.filter((country) => {
    return country.length >= 2 ? true : false;
  })
);

console.log(
  "Exercise 3.8: Reverse the countries array and capitalize each country and stored it as an array",
  copiedCountries.reverse().map((country) => {
    return country.toUpperCase();
  })
);
