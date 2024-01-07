'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// DESTRUCTURING ARRAYS
const arr = [2, 3, 4];
const [x, y, z] = arr; // BEWARE - [x,y,z] is not an array
console.log(x, y, z);
// they are variables being assigned to each value in the targeted array
// 'arr'

const family = ['Donna', 'Jim', 'Jamie'];

const [dad, sister] = family;

console.log(dad, sister);

let [main, , secondary] = restaurant.categories; // leave a blank space as a name to skip over that element
console.log(main, secondary);

main = 'Mexican'; // wont change original value of Italian! :)
console.log(main, secondary);
console.log(restaurant);

// OLD WAY OF DESTRUCTURING
// const temp = main; // REPLACED
// main = secondary; /// BY
// secondary = temp; /// DESTRUCTURING
// console.log(main, secondary);

[main, secondary] = [secondary, main]; // WAY EASIER!
console.log(main, secondary);

console.log(restaurant.order(2, 0));
const [starterMeal, mainMeal] = restaurant.order(2, 0);

console.log(starterMeal, mainMeal);

// NESTED DESTRUCTURING
const nestedArr = [1, 2, [4, 5]];
const [one, , [four, five]] = nestedArr;
console.log(one, four, five);

// DEFAULT VALUES FOR ARR LENGTH UNKNOWN
const [p = 1, q = 1, r = 1] = [5, 6];
console.log(p, q, r);
