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

const age1 = calcAge1(1991); // can be called before function is defined

function calcAge1(birthYear) {
  return 2023 - birthYear;
}

// Expression
const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};
const age2 = calcAge2(1991); // // must be defined before calling function
console.log(age1, age2);
