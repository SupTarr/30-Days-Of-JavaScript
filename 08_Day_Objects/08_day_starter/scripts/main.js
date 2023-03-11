// Exercise from https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/08_Day_Objects/08_day_objects.md#-exercises

// Exercise: Level 1
const dog = {};
console.log(
  "Exercise 1.1 & 1.2: Create an empty object called dog and print the the dog object on the console",
  dog
);

dog.name = "Dodo";
dog.legs = 4;
dog.color = "Black";
dog.age = 5;
dog.bark = function () {
  return "woof woof";
};
console.log(
  "Exercise 1.3 & 1.4: Get name, legs, color, age and bark value from the dog object",
  dog.name,
  dog.legs,
  dog.color,
  dog.age,
  dog.bark()
);

dog.breed = "Siberian Husky";
dog.getDogInfo = function () {
  return `${this.name}, ${this.breed.toLowerCase()} dog has ${
    this.legs
  } legs, ${this.age} years old, and ${this.color.toLowerCase()} color.`;
};

// Exercise: Level 2
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

function mostSkillsUser(users) {
  let usernames = Object.keys(users);
  let mostSkillsUser = usernames[0];
  for (let i = 1; i < usernames.length; i++) {
    if (
      users[usernames[i]]?.skills?.length >
      users[mostSkillsUser]?.skills?.length
    ) {
      mostSkillsUser = usernames[i];
    }
  }
  return mostSkillsUser;
}
console.log(
  "Exercise 2.1: Find the person who has many skills in the users object",
  mostSkillsUser(users)
);

function countUsersLogIn(users) {
  let usernames = Object.keys(users);
  let logIn = 0;
  for (let i = 0; i < usernames.length; i++) {
    if (users[usernames[i]]?.isLoggedIn) {
      logIn++;
    }
  }
  return logIn;
}
console.log("Exercise 2.2.1: Count logged in users", countUsersLogIn(users));

function countUsersMoreThanPoint(users, point) {
  let usernames = Object.keys(users);
  let moreThanPoint = 0;
  for (let i = 0; i < usernames.length; i++) {
    if (users[usernames[i]]?.points >= point) {
      moreThanPoint++;
    }
  }
  return moreThanPoint;
}
console.log(
  "Exercise 2.2.2: Count users having greater than equal to 50 points",
  countUsersMoreThanPoint(users, 50)
);

function countUsersMERN(users) {
  let usernames = Object.keys(users);
  let mernStackList = ["MongoDB", "Express", "React", "Node"];
  let mernStack = 0;
  for (let i = 0; i < usernames.length; i++) {
    if (
      mernStackList.every((skill) =>
        users[usernames[i]]?.skills.includes(skill)
      )
    ) {
      mernStack++;
    }
  }
  return mernStack;
}
console.log(
  "Exercise 2.3: Find people who are MERN stack developer from the users object",
  countUsersMERN(users)
);

users.Tata = {
  email: "tatasuppakrit@gmail.com",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "MongoDB",
    "Express",
    "React",
    "Node",
    "ReScript",
  ],
  age: 23,
  isLoggedIn: false,
  points: 60,
};
console.log("Exercise 2.4: Set your name in the users object", users.Tata);

console.log(
  "Exercise 2.5: Get all keys or properties of users object",
  Object.keys(users)
);

console.log(
  "Exercise 2.6: Get all the values of users object",
  Object.values(users)
);

for (let country of countries) {
  console.log(
    `Exercise 2.7: ${country.name} ${country.capital} ${country.population} ${country.languages}`
  );
}

// Exercises: Level 3

// Exercises: 3.1
const personAccount = {
  firstName: "Supakrit",
  lastName: "Chuchatwannakul",
  incomes: [50000, 50000, 50000, "THB"],
  expenses: [30000, 30000, 30000, "THB"],
  totalIncome: function () {
    return this.incomes
      .slice(0, this.incomes.length - 1)
      .reduce((acc, cur) => acc + cur);
  },
  totalExpense: function () {
    return this.expenses
      .slice(0, this.expenses.length - 1)
      .reduce((acc, cur) => acc + cur);
  },
  accountInfo: function () {
    return `totalIncome: ${this.totalIncome()} ${
      this.incomes[this.incomes.length - 1]
    }\ntotalExpense: ${this.totalExpense()} ${
      this.expenses[this.expenses.length - 1]
    }`;
  },
  addIncome: function (income) {
    let unit = this.incomes.pop();
    this.incomes.push(income);
    this.incomes.push(unit);
  },
  addExpense: function (expense) {
    let unit = this.expenses.pop();
    this.expenses.push(expense);
    this.expenses.push(unit);
  },
  accountBalance: function () {
    return `balance: ${this.totalIncome() - this.totalExpense()}`;
  },
};

{
  const users = [
    {
      _id: "ab12ex",
      username: "Alex",
      email: "alex@alex.com",
      password: "123123",
      createdAt: "08/01/2020 9:00 AM",
      isLoggedIn: false,
    },
    {
      _id: "fg12cy",
      username: "Asab",
      email: "asab@asab.com",
      password: "123456",
      createdAt: "08/01/2020 9:30 AM",
      isLoggedIn: true,
    },
    {
      _id: "zwf8md",
      username: "Brook",
      email: "brook@brook.com",
      password: "123111",
      createdAt: "08/01/2020 9:45 AM",
      isLoggedIn: true,
    },
    {
      _id: "eefamr",
      username: "Martha",
      email: "martha@martha.com",
      password: "123222",
      createdAt: "08/01/2020 9:50 AM",
      isLoggedIn: false,
    },
    {
      _id: "ghderc",
      username: "Thomas",
      email: "thomas@thomas.com",
      password: "123333",
      createdAt: "08/01/2020 10:00 AM",
      isLoggedIn: false,
    },
  ];

  const products = [
    {
      _id: "eedfcf",
      name: "mobile phone",
      description: "Huawei Honor",
      price: 200,
      ratings: [
        { userId: "fg12cy", rate: 5 },
        { userId: "zwf8md", rate: 4.5 },
      ],
      likes: [],
    },
    {
      _id: "aegfal",
      name: "Laptop",
      description: "MacPro: System Darwin",
      price: 2500,
      ratings: [],
      likes: ["fg12cy"],
    },
    {
      _id: "hedfcg",
      name: "TV",
      description: "Smart TV:Procaster",
      price: 400,
      ratings: [{ userId: "fg12cy", rate: 5 }],
      likes: ["fg12cy"],
    },
  ];

  function signUp(_id, username, email, password, createdAt, isLoggedIn) {
    for (let i = 0; i < users.length; i++) {
      if (
        users[i]._id === _id ||
        users[i].username === username ||
        users[i].email === email
      ) {
        return "You have already had an account.";
      }
    }

    users.push({
      _id: _id,
      username: username,
      email: email,
      password: password,
      createdAt: createdAt,
      isLoggedIn: isLoggedIn,
    });
  }

  function signIn(_id) {
    for (let i = 0; i < users.length; i++) {
      if (users[i]._id === _id) {
        users[i].isLoggedIn = true;
      } else {
        break;
      }
    }
  }

  function rateProduct(_id, userId, rate) {
    for (let i = 0; i < products.length; i++) {
      if (products[i]._id === _id) {
        products[i].ratings.push({ userId: userId, rate: rate });
      } else {
        break;
      }
    }
  }

  function averageRating(_id) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
      if (products[i]._id === _id) {
        products[i].ratings.forEach((rating) => {
          sum += rating.rate;
        });
        return sum / products[i].ratings.length;
      } else {
        break;
      }
    }
  }

  function likeProduct(_id, userId) {
    for (let i = 0; i < products.length; i++) {
      if (products[i]._id === _id) {
        if (!products[i].likes.includes(userId)) {
          products[i].likes.push(userId);
        } else {
          products[i].likes.splice(products[i].likes.indexOf(userId), 1);
        }
      }
    }
  }
}
