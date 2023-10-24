// // let js = "amazing";
// // console.log(40 + 8 + 23 - 10);

// // let firstName = "Jimmy";
// // console.log("Hi my name is " + firstName);

// // let myFirstJob = "Developer";
// // let myCurrentJob = "Teacher";

// console.log(typeof true);
// console.log(typeof 23);
// console.log(typeof "hello");
// let jonas = "Jonas";

// console.log(jonas);

// // Dynamic typing is just changing the variable assignment
// jonas = 23;

// console.log(jonas);

// let year = undefined;
// console.log(typeof year);
// console.log(year);

// console.log(jimmyAge); // simple subtraction
// console.log(jimmyAge, jimmyAge ** 2); //to the power of 2

// const firstName = "Jimmy";
// const lastName = "Thomas";
// console.log(firstName + " " + lastName);

// ASSIGNMENT OPERATORS
// let x = 5 + 10; // 15

// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--; // x = x - 1

// console.log(x);
// console.log();

// const currentYear = 2023;
// const jimmybday = 1991;
// const samBday = 2001;

// const ageJimmy = currentYear - jimmybday;
// const ageSam = currentYear - samBday;

// // console.log(ageJimmy > ageSam);
// console.log(ageSam >= 18);

// const isFullAge = ageSam >= 18;
// console.log(isFullAge);

// console.log(currentYear - 1991 > currentYear - 2001);

// const massMark = 79.8323;
// const heightMark = 1.8034;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn);
// console.log(markHigherBMI);

// TEMPLATE LITERALS

const firstName = "Jimmy";
const job = "Developer";
const birthYear = 1991;
const year = 2023;

const jimmy =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + ".";

const jimmyNew = `Hello, my name is ${firstName}, and I am a ${
  year - birthYear
} year old ${job}.`;

console.log(jimmy);
console.log(jimmyNew);

// use backticks normally so it's easier to inject variables if needed later on.

console.log(`Strings
on
multiple
lines`);
