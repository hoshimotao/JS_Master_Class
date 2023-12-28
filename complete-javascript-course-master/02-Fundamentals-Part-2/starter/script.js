"use strict";

// function logger() {
//   console.log(`my name is Jimmy`);
// }

// // called over and over again so can be generic without params
// logger();
// logger();

// function fruitProcessor(applesAmt, orangesAmt) {
//   console.log(applesAmt, orangesAmt);
//   const juice = `Juice with ${applesAmt} apples and ${orangesAmt} oranges.`;

//   return juice;
// }

// fruitProcessor(1, 2);
// // injects 1 & 2 into the function

// const fruitJuice = fruitProcessor(1, 2);
// // fruitJuice will now be assigned whatever was returned in fruitProcessor function

// console.log(fruitJuice);

// function yourAge(answer) {
//   const myAge = `I am ${answer} years old!`;
//   return myAge;
// }

// yourAge(32);

// const actualAge = yourAge(32);
// console.log(actualAge); // preferable to save as a variable to be reused
// console.log(yourAge(32)); // same thing written a diff way

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// console.log(Number("23"));

// function myAge(years) {
//   const yearsOld = `Hello, I am ${years} years old`;
//   return yearsOld;
// }

// function herAge(years) {
//   const yearsOld = `she is ${years} years old.`;
//   return yearsOld;
// }

// const howOldAreYou = `${myAge(32)} and ${herAge(22)}`;

// function combinedAge(bothAges, age1, age2) {
//   const combinedAges = `${bothAges} Together we are ${age1 + age2}`;
//   return combinedAges;
// }

// const agesCombined = combinedAge(howOldAreYou, 32, 22);

// console.log(howOldAreYou);
// console.log(agesCombined);

///////////////////////////////

// DECLARATION VS EXPRESSION

// Declaraction

// const age1 = calcAge1(1991); // can be called before function is defined

// function calcAge1(birthYear) {
//   return 2023 - birthYear;
// }

// // Expression
// const calcAge2 = function (birthYear) {
//   return 2023 - birthYear;
// };
// const age2 = calcAge2(1991); // // must be defined before calling function
// console.log(age1, age2);

///////////////////////////////////////

// ARROW FUNCTIONS
// Cannot use 'this' keyword
// const calcAge3 = (birthYear) => 2023 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsTillRetirement = (birthYear, firstName) => {
//   const age = 2023 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };
// console.log(yearsTillRetirement(1991, "Jimmy"));
// console.log(yearsTillRetirement(2001, "Colleen"));

////////////////////////////////////////////

// FUNCTIONS USING OTHER FUNCTIONS

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(applesAmt, orangesAmt) {
//   const applePieces = cutFruitPieces(applesAmt); // 8
//   const orangesPieces = cutFruitPieces(orangesAmt); // 16
//   const juice = `Juice with ${applePieces} apple pieces and ${orangesPieces} orange pieces.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 4));

//////////////////////////////////////////////

// FUNCTIONS REVIEW

// const calcAge = function (year) {
//   return 2023 - year;
// };

// const yearsTillRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     return `${firstName} retires in ${retirement} years`;
//   } else {
//     return `${firstName} is retired.`;
//   }
// };

// console.log(yearsTillRetirement(1991, "Jimmy"));
// console.log(yearsTillRetirement(1955, "Jim"));

// const calcAverage = (param1, param2, param3) => {
//   return (param1 + param2 + param3) / 3;
// };

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreDolphins2 = calcAverage(85, 54, 41);
// const scoreKoalas = calcAverage(65, 54, 49);
// const scoreKoalas2 = calcAverage(23, 34, 27);

// console.log(scoreDolphins, scoreKoalas);
// console.log(scoreDolphins2, scoreKoalas2);

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= avgDolphins * 2) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins}`);
//   } else {
//     console.log(`No team wins...`);
//   }
// }

// checkWinner(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins2, scoreKoalas2);

///////////////////////////////////////////

// ARRAYS

///////////////////////////////////////////

const friend1 = "Mike";
const friend2 = "Jimmy";
const friend3 = "Donna";

const friends = ["Mike", "Jimmy", "Donna"];

console.log(friends);

// const years = new Array(1991, 2001, 1990);
// console.log(years);
console.log(friends.length);
console.log(friends[friends.length - 1]);
// target the last element in an array ^

friends[2] = "Joe";
// you cannot assign an entire array but can mutate the elements
console.log(friends);

const firstName = "Jimmy";
const jimmy = [firstName, "Thomas", 2023 - 1991, "programmer", friends]; // arrays accept expressions
console.log(jimmy);

// EXERCISE

const calcAge = function (birthYear) {
  return 2023 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
