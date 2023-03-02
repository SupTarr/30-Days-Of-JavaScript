// Array Constructor
// Array: To create an array
const arr = Array(); // creates an an empty array
console.log(arr);

const eightEmptyValues = Array(8); // it creates eight empty values
console.log(eightEmptyValues); // [empty x 8]

// fill: Fill all the array elements with a static value
const eightXvalues = Array(8).fill("X"); // it creates eight element values filled with 'X'
console.log(eightXvalues); // ['X', 'X','X','X','X','X','X','X']

// concat: To concatenate two arrays
const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList);

console.log(thirdList); // [1, 2, 3, 4, 5, 6]

// Length: To know the size of the array
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.length); // -> 5 is the size of the array

// indexOf: To check if an item exist in an array.
// If it exists it returns the index else it returns -1.
console.log(numbers.indexOf(5)); // ->  4
console.log(numbers.indexOf(0)); // -> -1
console.log(numbers.indexOf(1)); // ->  0
console.log(numbers.indexOf(6)); // -> -1

const indexOfOne = numbers.indexOf(1);
indexOfOne == -1
  ? console.log("This number does not exist in the array")
  : console.log("This number does exist in the array");

// lastIndexOf: It gives the position of the last item in the array.
// If it exist, it returns the index else it returns -1
const longNumbers = [1, 2, 3, 4, 5, 3, 1, 2];
console.log(longNumbers.lastIndexOf(2)); // 7
console.log(longNumbers.lastIndexOf(0)); // -1

// includes: To check if an item exist in an array.
// If it exist it returns the true else it returns false.
console.log(numbers.includes(5)); // true
console.log(numbers.includes(0)); // false

// Array.isArray: To check if the data type is an array
console.log(Array.isArray(numbers)); // true

const number = 100;
console.log(Array.isArray(number)); // false

// toString: Converts array to string
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
console.log(names.toString()); // Asabeneh,Mathias,Elias,Brook

/*
  join: It is used to join the elements of the array.
  By default, it joins with a comma, but we can pass 
  different string parameter which can be joined between the items.
*/
console.log(names.join()); // Asabeneh,Mathias,Elias,Brook
console.log(names.join("")); // AsabenehMathiasEliasBrook
console.log(names.join(" ")); // Asabeneh Mathias Elias Brook
console.log(names.join(", ")); // Asabeneh, Mathias, Elias, Brook
console.log(names.join(" # ")); // Asabeneh # Mathias # Elias # Brook

/*
  slice: To cut out a multiple items in range. It takes two parameters:
  starting and ending position. It doesn't need to include the ending position.
*/
console.log(numbers.slice()); // -> it copies all  item
console.log(numbers.slice(0)); // -> it copies all  item
console.log(numbers.slice(0, numbers.length)); // -> it copies all  item
console.log(numbers.slice(1, 4)); // -> [2,3,4] // it doesn't include the ending position

/*
  splice: It takes three parameters: Starting position, 
  number of times to be removed, and number of items to be added.
*/
const months = ["Jan", "March", "April", "June"];
console.log(months.splice());
// Expected output: Array []

months.splice(1, 0, "Feb");
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

// push: adding item in the end. To add item to the end of an existing array.
const arrItems = ["item1", "item2", "item3"];
arrItems.push("new item");
console.log(arrItems);
// ['item1', 'item2','item3','new item']

// pop: Removing item in the end.
numbers.pop(); // -> remove one item from the end
console.log(numbers); // -> [1, 2, 3, 4]

// shift: Removing one array element in the beginning of the array.
const newNumbers = [1, 2, 3, 4, 5];
newNumbers.shift(); // -> remove one item from the beginning
console.log(newNumbers); // -> [2, 3, 4, 5]

// unshift: Adding array element in the beginning of the array.
newNumbers.unshift(0); // -> add one item from the beginning
console.log(newNumbers); // -> [0, 2, 3, 4, 5]

// reverse: reverse the order of an array.
newNumbers.reverse(); // -> reverse array order
console.log(newNumbers); // -> [5, 4, 3, 2, 0]

/*
  sort: arrange array elements in ascending order. Sort takes 
  a call back function, we will see how we use sort with 
  a call back function in the coming sections.
*/
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

webTechs.sort();
console.log(webTechs);
// ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

// Array of arrays
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = [frontEnd, backEnd];
console.log(fullStack); 
// [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
