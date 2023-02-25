// This is your main.js script

// Exercise from https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/02_Day_Data_types/02_day_data_types.md#-day-2-exercises

// Exercise: Level 1
// Exercise 1.1:
let challenge = "30 Days Of JavaScript";
// Exercise 1.2
console.log(challenge);

console.log("Exercise 1.3 - Challenge's length: ", challenge.length);
console.log(
  "Exercise 1.4 - Challenge to capital letters: ",
  challenge.toUpperCase()
);
console.log(
  "Exercise 1.5 - Challenge to lowercase letters: ",
  challenge.toLowerCase()
);
console.log(
  "Exercise 1.6 - Challenge's first word: ",
  challenge.substring(0, 2)
);
console.log(
  "Exercise 1.7 - Slice out the phrase 'Days Of JavaScript' from challenge: ",
  challenge.slice(0, 3)
);
console.log(
  "Exercise 1.8 - Check 'Script' inside Challenge: ",
  challenge.includes("Script")
);
console.log("Exercise 1.9 - Split string into array : ", challenge.split());
// ['30 Days Of JavaScript']
console.log(
  "Exercise 1.10 - Split string into array at space: ",
  challenge.split(" ")
);
// ['30', 'Days', 'Of', 'JavaScript']

let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(
  "Exercise 1.11 - Split string into array at comma: ",
  companies.split(", ")
);
// ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

console.log(
  "Exercise 1.12 - Change Challenge word: ",
  challenge.replace("JavaScript", "Python")
);
console.log(
  "Exercise 1.13 - The character at index 15: ",
  challenge.charAt(15)
);
console.log(
  "Exercise 1.14 - The character code of J: ",
  challenge.charCodeAt(11)
);
console.log(
  "Exercise 1.15 - The first occurrence of a: ",
  challenge.indexOf("a")
);
console.log(
  "Exercise 1.16 - The last occurrence of a: ",
  challenge.lastIndexOf("a")
);

let sentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(
  "Exercise 1.17 - The first occurrence of the word 'because': ",
  sentence.indexOf("because")
);
console.log(
  "Exercise 1.18 - The last occurrence of the word 'because': ",
  sentence.lastIndexOf("because")
);
console.log(
  "Exercise 1.19 - The first occurrence of the word 'because' using search: ",
  sentence.search("because")
);

let pollutedChallenge = "  30 Days Of JavaScript   ";
console.log(
  "Exercise 1.20 - Remove any trailing whitespace: ",
  pollutedChallenge.trim()
);
console.log(
  "Exercise 1.21 - Use startsWith() and make the result true: ",
  pollutedChallenge.trim().startsWith("30")
);
console.log(
  "Exercise 1.22 - Use endsWith() and make the result true: ",
  pollutedChallenge.trim().endsWith("Script")
);
console.log(
  "Exercise 1.23 - Use match() method to find all the a: ",
  pollutedChallenge.trim().match(/a/gi)
);
console.log(
  "Exercise 1.24 - Use concat() and merge: ",
  "".concat("30 Days of ", "JavaScript")
);
console.log(
  "Exercise 1.24 - Use repeat() method to print 30 Days Of JavaScript 2 times: ",
  challenge.repeat(2)
);

// Exercise: Level 2
console.log(
  "Exercise 2.1: ",
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);
console.log(
  "Exercise 2.2: ",
  `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`
);

// Exercise 2.3 - Check if typeof '10' is exactly equal to 10. If not make it exactly equal:
if (typeof "10" === 10) {
  console.log("Exercise 2.3: Exactly equal");
} else {
  console.log("Exercise 2.3: ", typeof parseInt("10") === typeof 10);
}

// Exercise 2.4 - Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10:
if (parseFloat("9.8") === 10) {
  console.log("Exercise 2.4: Exactly equal");
} else {
  console.log("Exercise 2.4: ", Math.round(parseFloat("9.8")) === 10);
}

// Exercise 2.5 - Check if 'on' is found in both python and jargon:
if ("python".indexOf("on") !== -1 && "jargon".indexOf("on") !== -1) {
  console.log("Exercise 2.5: 'on' is found");
} else {
  console.log("Exercise 2.5: 'on' is not found");
}

// Exercise 2.6 - 'I hope this course is not full of jargon.' Check if jargon is in the sentence:
if ("I hope this course is not full of jargon.".indexOf("jargon") !== -1) {
  console.log("Exercise 2.6: 'jargon' is in the sentence");
} else {
  console.log("Exercise 2.6: 'jargon' is not in the sentence");
}

// Random from 0 to 100
console.log("Exercise 2.7: ", Math.floor(Math.random() * 101));
// Random from 0 to 50 and plus 50 to random from 50 to 100
console.log("Exercise 2.8: ", Math.floor(Math.random() * 51 + 50));
// Random from 0 to 255
console.log("Exercise 2.9: ", Math.floor(Math.random() * 256));

console.log(
  "Exercise 2.10 - Access the 'JavaScript' string characters using a random number: ",
  "JavaScript".charAt(Math.floor(Math.random() * ("JavaScript".length + 1)))
);

console.log(
  "Exercise 2.11:\n",
  `1 1 1 1 1
 2 1 2 4 8
 3 1 3 9 27
 4 1 4 16 64
 5 1 5 25 125`
);

console.log(
  "Exercise 2.11 - Use substr to slice out the phrase 'because because because': ",
  sentence.substring(
    sentence.indexOf("because"),
    sentence.lastIndexOf("because") + "because".length
  )
);

// Exercises: Level 3
let loveSentence =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
console.log(
  "Exercise 3.1 - Count the number of word 'love' in this sentence: ",
  loveSentence.match(/love/g).length
);

console.log(
  "Exercise 3.2 - Use match() to count the number of all 'because': ",
  sentence.match(/because/gi).length
);

const pollutedSentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

const findMostFrequent = (str = "", num = 1) => {
  const strArr = str.split(" ").map((ele) => ele.trim().toLowerCase());
  const map = {};
  strArr.forEach((word) => {
    if (map.hasOwnProperty(word)) {
      map[word]++;
    } else {
      map[word] = 1;
    }
  });
  const frequencyArr = Object.keys(map).map((key) => [key, map[key]]);
  frequencyArr.sort((a, b) => b[1] - a[1]);
  return frequencyArr.slice(0, num).map((el) => el[0]);
};

console.log(
  "Exercise 3.3 - Clean the following text and find the most frequent word : ",
  findMostFrequent(pollutedSentence.replace(/[^\w\s]/g, ""))
);

const incomeText =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
console.log(
  "Exercise 3.4 - Calculate the total annual income: ",
  incomeText
    .match(/\d+/g)
    .map((ele) => parseInt(ele))
    .reduce((acc, cur) => acc + cur, 0)
);
