// Exercise from https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/07_Day_Functions/07_day_functions.md#-exercises

// Exercise: Level 1
function fullName() {
  let firstName = "Supakrit";
  let lastName = "Chuchatwannakul";
  console.log(`Exercise 1.1: ${firstName} ${lastName}`);
}
fullName();

function fullNameWithParams(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log("Exercise 1.2:", fullNameWithParams("Supakrit", "Chuchatwannakul"));

function addNumbers(num1, num2) {
  return num1 + num2;
}
console.log("Exercise 1.3:", addNumbers(3, 4));

function areaOfRectangle(length, width) {
  return length * width;
}
console.log("Exercise 1.4:", areaOfRectangle(3, 4));

function perimeterOfRectangle(length, width) {
  return (length + width) * 2;
}
console.log("Exercise 1.5:", perimeterOfRectangle(3, 4));

function volumeOfRectPrism(length, width, height) {
  return length * width * height;
}
console.log("Exercise 1.6:", volumeOfRectPrism(3, 4, 5));

function areaOfCircle(r) {
  return Math.PI * r * r;
}
console.log("Exercise 1.7:", areaOfCircle(7));

function circumOfCircle(r) {
  return 2 * Math.PI * r;
}
console.log("Exercise 1.8:", circumOfCircle(7));

function density(mass, volume) {
  return mass / volume;
}
console.log("Exercise 1.9:", density(100, 5));

function speed(distance, time) {
  return distance / time;
}
console.log("Exercise 1.10:", speed(100, 5));

function weight(mass, gravity = 9.81) {
  return mass * gravity;
}
console.log("Exercise 1.11:", weight(3, 10));

function convertCelsiusToFahrenheit(celsius) {
  return celsius * (9 / 5) + 32;
}
console.log("Exercise 1.12:", convertCelsiusToFahrenheit(100));

function bmi(weight, height) {
  let bmi = weight / height ** 2;
  console.log(bmi);
  switch (true) {
    case bmi >= 30:
      return "Obese";
    case bmi >= 25 && bmi < 30:
      return "Overweight";
    case bmi >= 18.5 && bmi < 25:
      return "Normal";
    default:
      return "Underweight";
  }
}
console.log("Exercise 1.13:", bmi(72, 1.72));

function checkSeason(month) {
  let autumn = ["September", "October", "November"];
  let winter = ["December", "January ", "February"];
  let spring = ["March", "April", "May"];
  if (autumn.includes(month)) {
    return "Autumn";
  } else if (winter.includes(month)) {
    return "Winter";
  } else if (spring.includes(month)) {
    return "Spring";
  } else {
    return "Summer";
  }
}
console.log("Exercise 1.14:", checkSeason("October"));

function findMax(num1, num2, num3) {
  let maxNum;
  if (num1 >= num2) {
    maxNum = num1;
    return maxNum >= num3 ? maxNum : num3;
  } else {
    maxNum = num2;
    return maxNum >= num3 ? maxNum : num3;
  }
}
console.log("Exercise 1.14:", findMax(0, 10, 5));
console.log("Exercise 1.14:", findMax(0, -10, -2));

// Exercises: Level 2
function solveLinEquation(a, b, c) {
  // [slope, x-int, y-int]
  return [-(a / b), -(c / a), -(b / c)];
}
console.log("Exercise 2.1:", solveLinEquation(1, 4, 4)); // [-0.25, -4, -1]

function solveQuadEquation(a, b, c) {
  switch (true) {
    case Math.sqrt(b ** 2 - 4 * a * c) > 0:
      return [(-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a), (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a)];
    case Math.sqrt(b ** 2 - 4 * a * c) == 0:
      return [-b / (2 * a)];
    default:
      return [];
  }
}
console.log("Exercise 2.2:", solveQuadEquation(1, 4, 4)); // [-2]
console.log("Exercise 2.2:", solveQuadEquation(1, -1, -2)); // [2, -1]
console.log("Exercise 2.2:", solveQuadEquation(1, 7, 12)); // [-3, -4]
console.log("Exercise 2.2:", solveQuadEquation(1, 0, -4)); // [2, -2]
console.log("Exercise 2.2:", solveQuadEquation(1, -1, 0)); // [1, 0]

function printArray(arr) {
  arr.forEach((num) => {
    console.log("Exercise 2.3:", num);
  });
}
printArray([1, 2, 3, 4]);

function showDateTime() {
  const now = new Date();
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

  return `${dateNow}/${monthNow}/${yearNow} ${hourNow}:${minuteNow}`;
}
console.log("Exercise 2.4:", showDateTime());

function swapValues(x, y) {
  return [y, x];
}
console.log("Exercise 2.5:", swapValues(4, 5));

function reverseArray(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}
console.log("Exercise 2.6:", reverseArray([1, 2, 3, 4, 5]));
// [5, 4, 3, 2, 1]
console.log("Exercise 2.6:", reverseArray(["A", "B", "C"]));
// ['C', 'B', 'A']

function capitalizeArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].toUpperCase());
  }
  return result;
}
console.log("Exercise 2.7:", capitalizeArray(["a", "b", "c"]));

function addItem(arr, item) {
  arr.push(item);
  return arr;
}
console.log("Exercise 2.8:", addItem(["A", "B", "C"], "D"));

function removeItem(arr, index) {
  arr.splice(index, 1);
  return arr;
}
console.log("Exercise 2.9:", removeItem(["A", "B", "C"], 1));

function sumOfNumbers(numMin, numMax) {
  let sum = 0;
  for (let i = numMin; i <= numMax; i++) {
    sum += i;
  }
  return sum;
}
console.log("Exercise 2.10:", sumOfNumbers(1, 4));

function sumOfOdds(numMin, numMax) {
  let sum = 0;
  for (let i = numMin; i <= numMax; i++) {
    if (i % 2 == 1) {
      sum += i;
    }
  }
  return sum;
}
console.log("Exercise 2.11:", sumOfOdds(1, 4));

function sumOfEven(numMin, numMax) {
  let sum = 0;
  for (let i = numMin; i <= numMax; i++) {
    if (i % 2 == 0) {
      sum += i;
    }
  }
  return sum;
}
console.log("Exercise 2.12:", sumOfEven(1, 4));

function evensAndOdds(num) {
  let countEvens = 0;
  let countOdds = 0;
  if (num > 0) {
    for (let i = 0; i <= num; i++) {
      i % 2 == 0 ? countEvens++ : countOdds++;
    }
  }
  return [countEvens, countOdds];
}
console.log("Exercise 2.13:", evensAndOdds(100));

let sum = (...args) => {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
};
console.log("Exercise 2.14:", sum(1, 2, 3));
console.log("Exercise 2.14:", sum(1, 2, 3, 4));

function randomNumber(min, max) {
  return Math.floor(Math.random() * max + min);
}
function randomUserIp() {
  let ipAddress = randomNumber(0, 255).toString();
  let counter = 1;
  while (counter < 4) {
    ipAddress += `.${randomNumber(0, 255)}`;
    counter++;
  }
  return ipAddress;
}
console.log("Exercise 2.15:", randomUserIp());

function makeHEX(digits) {
  let result = "";
  const hexNumber = "0123456789abcdef";
  let counter = 0;
  while (counter < digits) {
    result += hexNumber.charAt(Math.floor(Math.random() * hexNumber.length));
    counter += 1;
  }
  return result;
}
function randomMacAddress() {
  let macAddress = makeHEX(2);
  let counter = 1;
  while (counter < 6) {
    macAddress += `:${makeHEX(2)}`;
    counter++;
  }
  return macAddress;
}
console.log("Exercise 2.16:", randomMacAddress());

function randomHexNumberGenerator() {
  let result = "#";
  const hexNumber = "0123456789abcdef";
  let counter = 0;
  while (counter < 6) {
    result += hexNumber.charAt(Math.floor(Math.random() * hexNumber.length));
    counter += 1;
  }
  return result;
}
console.log("Exercise 2.17:", randomHexNumberGenerator());

function userIdGenerator(length) {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
    counter += 1;
  }
  return result;
}

console.log(userIdGenerator(7));

// Exercises: Level 3
function userIdGeneratedByUser(numChar, numAmount) {
  let result = [];
  for (let i = 0; i < numAmount; i++) {
    result.push(userIdGenerator(numChar));
  }
  return result;
}
console.log("Exercise 3.1:", userIdGeneratedByUser(16, 5));

function rgbColorGenerator() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}
console.log("Exercise 3.2:", rgbColorGenerator());

function arrayOfHexColors(num) {
  let result = [];
  for (let i = 0; i < num; i++) {
    result.push(randomHexNumberGenerator());
  }
  return result;
}
console.log("Exercise 3.3:", arrayOfHexColors(5));

function arrayOfRgbColors(num) {
  let result = [];
  for (let i = 0; i < num; i++) {
    result.push(rgbColorGenerator());
  }
  return result;
}
console.log("Exercise 3.4:", arrayOfRgbColors(5));

function convertHexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`;
}
console.log("Exercise 3.5:", convertHexToRgb("#FFFFFF"));

function convertRgbToHex(r, g, b) {
  return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
}
console.log("Exercise 3.6:", convertRgbToHex(255, 255, 255));

function generateColors(type, amount) {
  switch (type) {
    case "hex":
      return arrayOfHexColors(amount);
    case "rgb":
      return arrayOfRgbColors(amount);
    default:
      return [];
  }
}
console.log("Exercise 3.7:", generateColors("hex", 3));
console.log("Exercise 3.7:", generateColors("rgb", 4));

function shuffleArray(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}
console.log("Exercise 3.8:", shuffleArray(["1", "2", "3", "4"]));

function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}
console.log("Exercise 3.9:", factorial(5));

function isEmpty(arr) {
  return arr.length ? false : true;
}
console.log("Exercise 3.10:", isEmpty([]));

function sumArgs() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}
console.log("Exercise 3.11:", sumArgs(1, 2, 3, 4, 5));

function sumOfArrayItems(arr) {
  if (arr.every((num) => (typeof num == "number" ? true : false))) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      result += arr[i];
    }
    return result;
  } else {
    return "Not a number";
  }
}
console.log("Exercise 3.12:", sumOfArrayItems([1, 2, 3, 4, 5]));

function average(arr) {
  if (arr.every((num) => (typeof num == "number" ? true : false))) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      result += arr[i];
    }
    return result / arr.length;
  } else {
    return "Not a number";
  }
}
console.log("Exercise 3.13:", average([1, 2, 3, 4, 5]));

function modifyArray(arr) {
  if (arr.length >= 5) {
    arr[4] = arr[4].toUpperCase();
    return arr;
  } else {
    return "Item not found";
  }
}
console.log("Exercise 3.14:", modifyArray(["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"]));

function isPrime(num) {
  if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return false;
      } else {
        return true;
      }
    }
  } else if (i == 1) {
    return false;
  } else {
    return "Not in range to find prime number";
  }
}
console.log("Exercise 3.15:", isPrime(23));

function isUnique(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return false;
      }
    }
  }
  return true;
}
console.log("Exercise 3.16:", isUnique([1, 2, 3, 4, 5]));

function isSameType(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (typeof arr[i] !== typeof arr[j]) {
        return false;
      }
    }
  }
  return true;
}
console.log("Exercise 3.17:", isSameType([1, 2, 3, 4, 5]));

function isValidVariable(name) {
  return name.match(/^[a-zA-Z_$][0-9a-zA-Z_$]*$/) ? true : false;
}
console.log("Exercise 3.18:", isValidVariable("0tata"));

function sevenRandomNumbers() {
  let randomUniqueNumber = [];
  for (let i = 0; i < 7; i++) {
    let randomNumber;
    do {
      randomNumber = Math.round(Math.random() * 10);
    } while (randomUniqueNumber.includes(randomNumber));

    randomUniqueNumber.push(randomNumber);
  }
  return randomUniqueNumber;
}
console.log("Exercise 3.19:", sevenRandomNumbers());

function reverseCountries(arr) {
  let reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}
console.log("Exercise 3.20:", reverseCountries([1, 2, 3, 4, 5]));
