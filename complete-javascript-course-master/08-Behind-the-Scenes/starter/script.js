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

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
