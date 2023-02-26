// Booleans
let isLightOn = true;
let isRaining = false;
let isHungry = false;
let isMarried = true;
let trueValue = 4 > 3; // true
let falseValue = 4 < 3; // false

/*
  Truthy values
    - All numbers(positive and negative) are truthy except zero
    - All strings are truthy except an empty string ('')
    - The boolean true
*/

/*
  Falsy values
    - 0
    - 0n
    - null
    - undefined
    - NaN
    - the boolean false
    - '', "", ``, empty string
*/

/*
  Undefined
    - Declare a variable and do not assign a value
    - A function is not returning the value, it will return undefined.
*/
let firstName;
console.log("FirstName: ", firstName);
// undefined, because it is not assigned to a value yet
console.log("Type of firstName: ", firstName);

// Null
let empty = null;
console.log(empty); // null -> means no value
