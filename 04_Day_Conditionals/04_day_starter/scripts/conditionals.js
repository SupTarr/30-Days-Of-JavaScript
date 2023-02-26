// If
let num = 3;
if (num > 0) {
  console.log(`${num} is a positive number`);
}
// 3 is a positive number

// If Else
num = -3;
if (num > 0) {
  console.log(`${num} is a positive number`);
} else {
  console.log(`${num} is a negative number`);
}
//  -3 is a negative number

// If Else if Else
let a = 0;
if (a > 0) {
  console.log(`${a} is a positive number`);
} else if (a < 0) {
  console.log(`${a} is a negative number`);
} else if (a == 0) {
  console.log(`${a} is zero`);
} else {
  console.log(`${a} is not a number`);
}

// Switch
let weather = "cloudy";
switch (weather) {
  case "rainy":
    console.log("You need a rain coat.");
    break;
  case "cloudy":
    console.log("It might be cold, you need a jacket.");
    break;
  case "sunny":
    console.log("Go out freely.");
    break;
  default:
    console.log(" No need for rain coat.");
}

let numPrompt = parseInt(prompt("Enter number"));
switch (true) {
  case numPrompt > 0:
    console.log("Number is positive");
    break;
  case numPrompt == 0:
    console.log("Numbers is zero");
    break;
  case numPrompt < 0:
    console.log("Number is negative");
    break;
  default:
    console.log("Entered value was not a number");
}

// Ternary Operators
let isRaining = true;
isRaining
  ? console.log("You need a rain coat.")
  : console.log("No need for a rain coat.");
