// Changing Data Type (Casting)

/*
  String to Int
    - parseInt()
    - Number()
    - Plus sign(+)
*/
let numStringInt = "10";
let numInt = parseInt(numStringInt);
console.log(numInt); // 10

numInt = Number(numStringInt);
console.log(numInt); // 10

numInt = +numStringInt;
console.log(numInt); // 10

/*
  String to Float
    - parseFloat()
    - Number()
    - Plus sign(+)
*/
let numStringFloat = "9.81";
let numFloat = parseFloat(numStringFloat);
console.log(numFloat); // 9.81

numFloat = Number(numStringFloat);
console.log(numFloat); // 9.81

numFloat = +numStringFloat;
console.log(numFloat); // 9.81

/*
  Float to Int
    - parseInt()
*/
let numIntFromFloat = parseInt(numStringFloat)

console.log(numIntFromFloat) // 9