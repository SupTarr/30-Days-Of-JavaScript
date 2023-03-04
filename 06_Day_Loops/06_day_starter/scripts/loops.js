// for Loop
// 0 1 2 3 4 5
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

// 5 4 3 2 1 0
for (let i = 5; i >= 0; i--) {
  console.log(i);
}

const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
const newArr = [];
for (let i = 0; i < countries.length; i++) {
  newArr.push(countries[i].toUpperCase());
}
// ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]

// while loop
// 0 1 2 3 4 5
{
  let i = 0;
  while (i <= 5) {
    console.log(i);
    i++;
  }
}

// do while loop
// 0 1 2 3 4 5
{
  let i = 0;
  do {
    console.log(i);
    i++;
  } while (i <= 5);
}

// for of loop
const numbers = [1, 2, 3, 4, 5];

// 1 2 3 4 5
for (const num of numbers) {
  console.log(num);
}

// 1 4 9 16 25
for (const num of numbers) {
  console.log(num * num);
}

// break
// Break is used to interrupt a loop.
// 0 1 2
for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    break;
  }
  console.log(i);
}

// continue
// We use the keyword continue to skip a certain iterations.
// 0 1 2 4 5
for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}
