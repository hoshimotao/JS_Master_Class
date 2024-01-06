'use strict';

// function calcAge(birthYear) {
//   const age = 2023 - birthYear;

//   function printAge() {
//     let output = `${firstName}, You are ${age} years old, born in ${birthYear}`;
//     console.log(output);
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = 'John';
//       const str = `Oh, and you're a millenial! ${firstName}.`;
//       // looks up for nearest firstName defined - John in this case
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//       output = 'NEW OUTPUT';

//       console.log(add(1, 2));
//     }
//     console.log(output);

//     console.log(millenial);
//     // var is function scoped - can be located anywhere within the function
//     // it is declared in
//   }

//   printAge();
//   return age;
// }

// const firstName = 'Jimmy';
// calcAge(1991);

// VARIABLES
// console.log(me); // hoisted to undefined
// console.log(job); // cannot access before initialization
// console.log(year); // cannot access before initialization

// var me = 'Jimmy';
// let job = 'Developer';
// const year = 1991;

// FUNCTIONS

// console.log(addDeclaration(1, 2)); // 3
// console.log(addExpression(1, 2)); // cannot access before initialization
// console.log(addArrow(1, 2)); // cannot access before initialization

// function addDeclaration(a, b) {
//   return a + b;
// }

// const addExpression = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => {
//   return a + b;
// };

// if (!numProducts) {
//   console.log(numProducts);
//   deleteShoppingCart();
//   // will execute because numProducts = undefined aka falsey right now
// }

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('all products deleted');
// }

// BEST PRACTICE
// DECLARE CONST VARIABLES AT THE TOP
// DECLARE FUNCTIONS BEFORE USING THEM

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// // Using the THIS keyword

// const jimmy = {
//   name: 'Jimmy',
//   year: 1991,
//   calcAge: function () {
//     return 2024 - this.year;
//     // refers to object containing the function - Jimmy
//   },
// };

// console.log(jimmy.calcAge());
// jimmy.calcAge();

// if (jimmy) {
//   this.name = 'Colleen';
//   const colleen = () => this.name;
//   console.log(colleen()); // Arrow functions can only refer to outer (lexical) this keyword
// }

// console.log('Global: ', this);

// const calcAge = function (birthYear) {
//   console.log(2024 - birthYear);
//   //   console.log('Function: ', this);
//   // this is undefined since we are in strict mode and it's not inside of an object other than window
// };

// calcAge(1991); // undefined

// const calcAgeArrow = birthYear => {
//   console.log(2024 - birthYear);
//   //   console.log('Function: ', this);
//   // this window object since arrow functions don't have their own this keyword
// };

// calcAgeArrow(1991);

// const jimmy = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this); // refers to the jimmy object
//     console.log(2024 - this.year);
//   },
// };

// jimmy.calcAge(); // 'this' refers to the object CALLING the function

// const matilda = {
//   year: 1996,
// };

// matilda.calcAge = jimmy.calcAge;
// // method borrowing - matilda now has a calcAge property
// matilda.calcAge();
// console.log(matilda);

// const f = jimmy.calcAge;

// f(); // the 'this' keyword from the borrowed method points to undefined because there is no year in f function.

var firstName = 'Matilda'; // global firstName

const jimmy = {
  firstName: 'Jimmy',
  year: 1991,
  calcAge: function () {
    console.log(`Hey ${this.firstName}`); // refers to this (Jimmy)

    // const self = this;
    // // create a self variable if needed to reference the parent object's properties
    // const isMillenial = function () {
    //   console.log(self.year >= 1981 && self.year <= 1996); // RIGHT
    //   //   console.log(this.year >= 1981 && this.year <= 1996); WRONG

    const self = this; // simply assign this to self for use below

    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
      // arrow function assumes your want parent of parent object 'this'
    };
    isMillenial(); // true
  },
  greet: () => console.log(`Hey ${this.firstName}`),
  // arrow function = undefined 'this' keyword
  // actually produces -> Window.firstName
};

jimmy.calcAge();
jimmy.greet();

// RULE - NEVER USE ARROW FUNCTION AS A METHOD

// Arguments keyword
const addExpression = function (a, b) {
  console.log(arguments); // shows arguments as an object with all args included, regardless if there enough parameters
  return a + b;
};

const addArrow = (a, b) => {
  console.log(`Arguments Arrow: `, arguments); // arguments is not defined
  return a + b;
};

addExpression(1, 2);
addExpression(1, 2, 3, 4);
addArrow(1, 2, 3);
