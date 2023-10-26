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

///////////////////////////////////
// TEMPLATE LITERALS
///////////////////////////////////

// const firstName = "Jimmy";
// const job = "Developer";
// const birthYear = 1991;
// const year = 2023;

// const jimmy =
//   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + ".";

// const jimmyNew = `Hello, my name is ${firstName}, and I am a ${
//   year - birthYear
// } year old ${job}.`;

// console.log(jimmy);
// console.log(jimmyNew);

// use backticks normally so it's easier to inject variables if needed later on.

// console.log(`Strings
// on
// multiple
// lines`);

///////////////////////////////////
// IF/ELSE STATEMENTS
///////////////////////////////////

// const age = 13;
// const isDrivingAge = age >= 18;

// console.log(isDrivingAge);

// IF ELSE STATEMENTS ARE A CONSIDERED A CONTROL STRUCTURE
// if (isDrivingAge) {
//   console.log("Sarah can start driving license");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(
//     `Sarah is not old enough to drive. She must wait ${yearsLeft} years to apply.`
//   );
// }

// const birthYear = 2002;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

// const massMark = 80;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.65;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// } else {
//   console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// }

////////////// TYPE CONVERSION VS COERCION ///////////

//// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jimmy"));
console.log(typeof NaN);
console.log(String(23), 23);

//// type coercion
console.log(`I am ` + 23 + ` years old.`);
// js assumes its concatenating a string despite there being a number
console.log(`23` - `10` - 3);
// subtraction operators convert strings to numbers
console.log(`23` * `10` * 3);
// multiplication and division operators convert strings to numbers

let n = "1" + 1;
let m = "baby" + 1;
n = n - 1;
console.log(m);

// WANT TO BE CAREFUL WITH ADDING AND SUBTRACTING STRINGS? USE TYPEOF
// TO ENSURE YOU ARE ADDING OR SUBTRACTING ETC WITH TYPEOF NUMBER

/////// 5 FALSEY VALUES ////////

// 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean(1));
// console.log(Boolean({}));

// const money = 0;

// if (money) {
//   // if money is not 0 it is truthy and will execute the first block
//   console.log("Don't spend it all!");
//   console.log(Boolean(money));
// } else {
//   console.log("Get a job!");
//   console.log(Boolean(money));
// }

// let height = 9;
// if (height) {
//   // if money is not 0 it is truthy and will execute the first block
//   console.log(`height has a value of ${height}!`);
//   console.log(Boolean(money));
// } else {
//   console.log("height is undefined!");
//   console.log(Boolean(money));
// }
