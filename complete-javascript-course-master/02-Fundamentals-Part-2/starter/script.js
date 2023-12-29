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

// const friend1 = "Mike";
// const friend2 = "Jimmy";
// const friend3 = "Donna";

// const friends = ["Mike", "Jimmy", "Donna"];

// console.log(friends);

// // const years = new Array(1991, 2001, 1990);
// // console.log(years);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
// // target the last element in an array ^

// friends[2] = "Joe";
// // you cannot assign an entire array but can mutate the elements
// console.log(friends);

// const firstName = "Jimmy";
// const jimmy = [firstName, "Thomas", 2023 - 1991, "programmer", friends]; // arrays accept expressions
// console.log(jimmy);

// // EXERCISE

// const calcAge = function (birthYear) {
//   return 2023 - birthYear;
// };
// const years = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

///////////////////////////////////////////

// ARRAY METHODS

///////////////////////////////////////////

// const friends = ["Mike", "Jimmy", "Donna"];

// // ADD ELEMENTS

// friends.push("Taylor");
// const newLength = friends.push(1 + 2); // Returns a value --> 5
// console.log(friends);
// console.log(newLength);
// friends.unshift("John"); // adds named element to beginning of array
// console.log(friends);

// // REMOVE ELEMENTS

// friends.pop(); // remove last element
// console.log(friends);
// const poppedElement = friends.pop(); // Returns the removed element
// console.log(poppedElement);
// console.log(friends);
// friends.shift(); // removes first element from array
// console.log(friends);

// // FIND AN ELEMENT IN AN ARRAY

// console.log(friends.indexOf("Mike")); // 0th element
// console.log(friends.includes("Jimmy"));
// // true - the array contains this element
// console.log(friends.includes("Joey"));
// // false - the array does not contain this element
// friends.push(23);
// console.log(friends.includes("23")); // false - must be exact match

// if (friends.includes("Jimmy")) {
//   console.log(`You have a friend named ${friends[1]}`);
// }

// CHALLENGE #2
// Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// Your tasks:

// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

// And now let's use arrays! So, create an array called bills containing the test data below.

// Create an array called tips containing the tip value for each bill, calculated from the function you created before.

// BONUS: Create an array totals containing the total values, so the bill + tip.

// TEST DATA: 125, 555, and 44.

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// const bills = [123, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// calcTip(100);
// console.log(totals);

///////////////////////////////////////////

// OBJECTS

///////////////////////////////////////////

// const jimmyArray = [
//   "Jimmy",
//   "Thomas",
//   2023 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// const jimmy = {
//   firstName: "Jimmy",
//   lastName: "Thomas",
//   age: 2023 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };

// console.log(jimmy.firstName);
// console.log(jimmy["lastName"]);

// const nameKey = "Name";

// console.log(jimmy["first" + nameKey]);
// console.log(jimmy["last" + nameKey]);

// // const interestedIn = prompt("what do you want to know about Jimmy?"); // saves the value to interestedIn

// // if (jimmy[interestedIn]) {
// //   console.log(jimmy[interestedIn]);
// // } else {
// //   console.log("Wrong request");
// // }

// // ADD PROPERTIES TO OBJECT
// jimmy.location = "Florida";
// jimmy["twitter"] = "@hoshi";
// console.log(jimmy);

// console.log(
//   `${jimmy.firstName} has ${jimmy.friends.length} friends, and his best friend's name is ${jimmy.friends[0]}.`
// );

// const jimmy = {
//   firstName: "Jimmy",
//   lastName: "Thomas",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Mike", "Denise", "Steven"],
//   hasDriversLicense: true,
//   // calcAge: function (birthYear) {
//   //   return 2023 - birthYear;
//   // },

//   // calcAge: function () {
//   //   console.log(this);
//   //   return 2023 - this.birthYear;
//   //   // try not to hardcode the object that is calling the function so you don't repeat yourself because jimmy object could be renamed later
//   // },
//   calcAge: function () {
//     this.age = 2023 - this.birthYear;
//     return this.age;
//   },
//   // CHALLENGE - produce a summary of the object
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and ${
//       this.hasDriversLicense
//         ? "he has a driver's license"
//         : "he does not have a driver's license."
//     }`;
//   },
// };

// // console.log(jimmy.calcAge()); // this = jimmy obj
// // console.log(jimmy.age);

// console.log(jimmy.getSummary());

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

mark.calcBMI(); // mark.bmi does not exist until called
john.calcBMI();

console.log(
  `${mark.bmi > john.bmi ? mark.fullName : john.fullName}'s BMI (${
    mark.bmi > john.bmi ? mark.bmi : john.bmi
  }) is higher than ${mark.bmi > john.bmi ? john.fullName : mark.fullName}'s (${
    mark.bmi > john.bmi ? john.bmi : mark.bmi
  })`
);
