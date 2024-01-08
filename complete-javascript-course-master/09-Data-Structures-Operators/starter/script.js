'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  locationName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    time = '20:00',
    address,
    mainIndex = 0,
    starterIndex = 1,
  }) {
    console.log(
      `Order received at: ${time}. Your food will be delivered to ${address}. Your starter option is ${this.starterMenu[starterIndex]} and your main dish is ${this.mainMenu[mainIndex]}.`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`You ordered: ${ing1}, ${ing2}, and ${ing3}.`);
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

// const ingredients = [
//   prompt('Ingredient 1?'),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// restaurant.orderPasta(...ingredients); //You ordered: Garlic, Onion, and Butter.

// SPREAD OPERATORS ON ARRAYS
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]]; // [1,2,7,8,9]
// console.log(badNewArr);

// const newArr = [1, 2, ...arr]; // [1,2,7,8,9]
// console.log(newArr);

// const newRestaurant = [...restaurant.categories, ...restaurant.mainMenu];

// console.log(newRestaurant);
// console.log(...newRestaurant);

// const newMenu = [...restaurant.mainMenu, 'Spinach Pasta'];
// console.log(newMenu);

// // COPY ARRAY
// const mainMenuCopy = [...restaurant.mainMenu];

// const fullMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(fullMenu); // array of all menu items combined
// console.log(...fullMenu); // a list of all menu items as strings

// Spread operator works on ARRAYS and STRINGS alike

// const str = 'James';
// const letters = [...str, ' ', 'T.'];
// console.log(letters);
// console.log(...str);
// console.log(`${[...str]} is awesome`); // 'J,a,m,e,s is awesome'

////////////////////////////////////////////////////////////////////
// SPREAD OPERATORS ON OBJECTS
////////////////////////////////////////////////////////////////////
const newRestaurant = { ...restaurant, founder: 'James Thomas', founded: 1991 };
// console.log(newRestaurant);
const restaurantCopy = { ...restaurant };
restaurantCopy.locationName = 'Pizza Time';
console.log('Copy:', restaurantCopy.locationName);
console.log('Original:', restaurant.locationName);

////////////////////////////////////////////////////////////////////
// DESTRUCTURING OBJECTS
////////////////////////////////////////////////////////////////////
// const { locationName, openingHours, categories } = restaurant;

// const {
//   sat: { open, close },
//   fri: { open: friOpen, close: friClose },
// } = openingHours;

// console.log(open, close, friOpen, friClose);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: '321 Boca Raton Drive, FL',
//   starterIndex: 3,
// });

// restaurant.orderDelivery({
//   starterIndex: 2,
//   address: '123 Sunny Circle, FL',
// });

// NESTED OBJECTS

// console.log(locationName, openingHours, categories);

// const {
//   locationName: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// // if menu doesnt exist, it becomes an empty array instead, starterMenu renamed to starters, and is an empty array if 'starterMenu' isnt found in restaurant | menu = [] to set default value, starterMenu: starters to create new variable with new name that refers to starterMenu in restaurant

// // DEFAULT VALUES
// const { menu = [], starterMenu: starters = [] } = restaurant;

// console.log(menu, starters);

// // MUTATING VARIABLES
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// // DESTRUCTURING ASSIGNMENT
// // must be wrapped in parenthesis - otherwise JS expects a code block

// console.log(a, b);

// let brother = 'Jimmy';

// // DESTRUCTURING ARRAYS
// const arr = [2, 3, 4];
// const [x, y, z] = arr; // BEWARE - [x,y,z] is not an array
// console.log(x, y, z);
// // they are variables being assigned to each value in the targeted array
// // 'arr'

// const family = ['Donna', 'Jim', 'Jamie'];

// const [dad, sister] = family;

// console.log(dad, sister);

// let [main, , secondary] = restaurant.categories; // leave a blank space as a name to skip over that element
// console.log(main, secondary);

// main = 'Mexican'; // wont change original value of Italian! :)
// console.log(main, secondary);
// console.log(restaurant);

// // OLD WAY OF DESTRUCTURING
// // const temp = main; // REPLACED
// // main = secondary; /// BY
// // secondary = temp; /// DESTRUCTURING
// // console.log(main, secondary);

// [main, secondary] = [secondary, main]; // WAY EASIER!
// console.log(main, secondary);

// console.log(restaurant.order(2, 0));
// const [starterMeal, mainMeal] = restaurant.order(2, 0);

// console.log(starterMeal, mainMeal);

// // NESTED DESTRUCTURING
// const nestedArr = [1, 2, [4, 5]];
// const [one, , [four, five]] = nestedArr;
// console.log(one, four, five);

// // DEFAULT VALUES FOR ARR LENGTH UNKNOWN
// const [p = 1, q = 1, r = 1] = [5, 6];
// console.log(p, q, r);
