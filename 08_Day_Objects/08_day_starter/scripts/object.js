/*
  Objects have properties and properties have values, 
  so an object is a "key" "value" pair. 
*/

// The order of the key is not reserved or there is no order.

// Creating an empty object
const emptyPerson = {};

// Creating an objecting with values
const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  isMarried: true,
  "phone number": "+3584545454545",

  /*
    Creating object methods
      We can not use an arrow function as object method because the word "this"
      refers to the window inside an arrow function instead of the object itself.
  */
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(person);

// Getting values from an object
// accessing values using .
console.log(person.firstName);
console.log(person.lastName);

// value can be accessed using square bracket and key name
console.log(person["age"]);
console.log(person["location"]); // undefined

// for instance to access the phone number we only use the square bracket method
console.log(person["phone number"]);

console.log(person.getFullName());
// Asabeneh Yetayeh

// Setting new key for an object
person.nationality = "Ethiopian";
person.country = "Finland";
person.title = "teacher";
person.skills.push("Meteor");
person.skills.push("SasS");
person.isMarried = true;

person.getPersonInfo = function () {
  let skillsWithoutLastSkill = this.skills
    .splice(0, this.skills.length - 1)
    .join(", ");
  let lastSkill = this.skills.splice(this.skills.length - 1)[0];

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`;
  let fullName = this.getFullName();
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`;
  return statement;
};
console.log(person);
console.log(person.getPersonInfo());

/*
  Object Methods
    - Object.assign: To copy an object without modifying the original object
    - Object.keys: To get the keys or properties of an object as an array
    - Object.keys: To get the keys or properties of an object as an array
    - Object.entries: To get the keys and values in an array
    - hasOwnProperty: To check if a specific key or property exist in an object
*/
const copyPerson = Object.assign({}, person);
console.log(copyPerson);

const keys = Object.keys(copyPerson);
console.log(keys);
// ['firstName', 'age', 'country', 'city', 'skills', 'title', 'address', 'getPersonInfo']

const values = Object.values(copyPerson);
console.log(values);
// ['Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki', Array(0), true, '+3584545454545', ƒ, 'Ethiopian', 'teacher', ƒ]

const entries = Object.entries(copyPerson);
console.log(entries);
/*
  ['firstName', 'Asabeneh'],
  ['lastName', 'Yetayeh'],
  ['age', 250],
  ['country', 'Finland'],
  ['city', 'Helsinki'],
  ['skills', Array(0)],
  ['isMarried', true],
  ['phone number', '+3584545454545'],
  ['getFullName', ƒ],
  ['nationality', 'Ethiopian'],
  ['title', 'teacher'],
  ['getPersonInfo', ƒ]
*/

console.log(copyPerson.hasOwnProperty("name"));
// false
console.log(copyPerson.hasOwnProperty("score"));
// false
