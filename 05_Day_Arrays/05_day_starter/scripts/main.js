// Exercise from https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/05_Day_Arrays/05_day_arrays.md#-exercise

// Exercise: Level 1
console.log("Exercise 1.1 - Declare an empty array", Array());

const myArray = [1, 2, 3, 4, 5, 6, 7];
console.log(
  "Exercise 1.2 - Declare an array with more than 5 number of elements",
  myArray
);

console.log("Exercise 1.3 - Find the length of your array", myArray.length);

console.log(
  "Exercise 1.4 - Get the first item, the middle item, and the last item of the array",
  myArray[0],
  myArray[(myArray.length - 1) / 2],
  myArray[myArray.length - 1]
);

const mixedDataTypes = [undefined, null, "Supakrit", 10, true, ["Tata", false]];

console.log(
  "Exercise 1.5 - Declare an array called mixedDataTypes",
  mixedDataTypes,
  mixedDataTypes.length
);

const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

console.log(
  "Exercise 1.6 & 1.7 - Declare an array variable name itCompanies",
  itCompanies
);

console.log(
  "Exercise 1.8 - Print the number of companies in the array",
  itCompanies.length
);

console.log(
  "Exercise 1.9 - Print the first company, middle and last company Print out each company\n",
  itCompanies[0],
  itCompanies[(myArray.length - 1) / 2],
  itCompanies[myArray.length - 1]
);

itCompanies.forEach((company) => {
  console.log("Exercise 1.10 - Print out each company", company);
});

itCompanies.forEach((company) => {
  console.log(
    "Exercise 1.11 - Change each company name to uppercase",
    company.toUpperCase()
  );
});

console.log(
  "Exercise 1.12 - Print the array in a sentence\n",
  itCompanies.join(", ") + " are big IT companies."
);

let checkCompany = "Amazon";
itCompanies.includes(checkCompany)
  ? console.log(
      "Exercise 1.13 - Check if a certain company exists in the itCompanies array\n",
      checkCompany
    )
  : console.log(
      "Exercise 1.13 - Check if a certain company exists in the itCompanies array\n",
      "Company is not found"
    );

console.log(
  "Exercise 1.14 - Filter out companies which have more than one 'o'\n",
  itCompanies.map((company) => {
    if (
      company.toLowerCase().match(/o/g) &&
      company.toLowerCase().match(/o/g).length >= 1
    ) {
      return "";
    } else {
      return company;
    }
  })
);

console.log(
  "Exercise 1.15 - Sort the array using sort() method",
  itCompanies.sort()
);

console.log(
  "Exercise 1.16 - Reverse the array using reverse() method",
  itCompanies.reverse()
);

console.log(
  "Exercise 1.17 - Slice out the first 3 companies from the array",
  itCompanies.slice(0, 3)
);

console.log(
  "Exercise 1.18 - Slice out the last 3 companies from the array",
  itCompanies.slice(4)
);

console.log(
  "Exercise 1.19 - Slice out the middle IT company or companies from the array",
  itCompanies.slice(itCompanies.length / 2, itCompanies.length / 2 + 1)
);

console.log(
  "Exercise 1.20 - Remove the first IT company from the array\n",
  itCompanies.shift(),
  itCompanies
);

console.log(
  "Exercise 1.21 - Remove the middle IT company or companies from the array\n",
  itCompanies.splice(itCompanies.length / 2, 1),
  itCompanies
);

console.log(
  "Exercise 1.22 - Remove the last IT company from the array\n",
  itCompanies.pop(),
  itCompanies
);

console.log("Exercise 1.23 - Remove all IT companies\n", itCompanies.splice());

// Exercise: Level 2
console.log(
  "Exercise 2.1 - Access both file in main.js file",
  countries,
  webTechs
);

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

let splittedText = text.split(" ").map((word) => {
  return word.replace(/\W/g, "");
});

console.log(
  "Exercise 2.2 - First remove all the punctuations and change the string to array and count the number of words in the array",
  splittedText,
  splittedText.length
);

// Exercise 2.3
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
// - add 'Meat' in the beginning of your shopping cart if it has not been already added
if (shoppingCart[0] !== "Meat") {
  shoppingCart.unshift("Meat");
}

// - add Sugar at the end of you shopping cart if it has not been already added
if (shoppingCart[shoppingCart.length - 1] !== "Sugar") {
  shoppingCart.push("Sugar");
}

// - remove 'Honey' if you are allergic to honey
if (shoppingCart.indexOf("Honey") !== -1) {
  shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
}

// - modify Tea to 'Green Tea'
if (shoppingCart.indexOf("Tea") !== -1) {
  shoppingCart.splice(shoppingCart.indexOf("Tea"), 1, "Green Tea");
}

console.log(
  "Exercise 2.3 - In the following shopping cart add, remove, edit items",
  shoppingCart
);

if (countries.indexOf("Ethiopia") !== -1) {
  console.log(
    "Exercise 2.4 - In countries array check if 'Ethiopia' exists in the array\n",
    "Ethiopia".toUpperCase()
  );
} else {
  console.log("Exercise 2.4 - 'Ethiopia' does not exist in the array\n");
}

if (webTechs.indexOf("Sass") !== -1) {
  console.log("Exercise 2.5 - Sass is a CSS preprocess\n");
} else {
  webTechs.push("Sass");
  console.log("Exercise 2.5 - 'Sass' does not exist in the array\n", webTechs);
}

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);

console.log(
  "Exercise 2.5 - Concatenate the following two variables and store it in a fullStack variable",
  fullStack
);

// Exercise 2.3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// - Sort the array and find the min and max age
const sortedAges = ages.sort();
console.log(
  "Exercise 3.1.1 - Sort the array and find the min and max age",
  sortedAges,
  sortedAges[0],
  sortedAges[sortedAges.length - 1]
);

// - Find the median age (one middle item or two middle items divided by two)
if (sortedAges.length % 2 == 1) {
  console.log(
    "Exercise 3.1.2 - Find the median age",
    sortedAges[(sortedAges.length - 1) / 2]
  );
} else {
  console.log(
    "Exercise 3.1.2 - Find the median age",
    (sortedAges[sortedAges.length / 2 - 1] +
      sortedAges[sortedAges.length / 2]) /
      2
  );
}

// - Find the average age (all items divided by number of items)
let sum = sortedAges.reduce((acc, cur) => {
  return acc + cur;
});

console.log("Exercise 3.1.3 - Find the average age", sum / sortedAges.length);

// - Find the range of the ages (max minus min)
console.log(
  "Exercise 3.1.4 - Find the range of the ages",
  sortedAges[sortedAges.length - 1] - sortedAges[0]
);

// - Compare the value of (min - average) and (max - average), use abs() method
let average = sum / sortedAges.length;
console.log(
  "Exercise 3.1.5 - Compare the value of (min - average)",
  Math.abs(sortedAges[0] - average)
);
console.log(
  "Exercise 3.1.5 - Compare the value of (max - average)",
  Math.abs(sortedAges[sortedAges.length - 1] - average)
);

// - Slice the first ten countries from the countries array
console.log(
  "Exercise 3.2 - Slice the first ten countries from the countries array",
  countries.slice(0, 10)
);

if (countries.length % 2 == 1) {
  console.log(
    "Exercise 3.3 - Find the middle country(ies) in the countries array (odd)",
    countries[(countries.length - 1) / 2]
  );
} else {
  console.log(
    "Exercise 3.3 - Find the middle country(ies) in the countries array (even)",
    countries[countries.length / 2 - 1],
    countries[countries.length / 2]
  );
}

if (countries.length % 2 == 1) {
  console.log(
    "Exercise 3.4 - Divide the countries array into two equal arrays (odd)",
    countries.slice(0, (countries.length - 1) / 2 + 1),
    countries.slice((countries.length - 1) / 2 + 1, countries.length),
    1
  );
} else {
  console.log(
    "Exercise 3.4 - Divide the countries array into two equal arrays (even)",
    countries.slice(0, countries.length / 2),
    countries.slice(countries.length / 2, countries.length)
  );
}
