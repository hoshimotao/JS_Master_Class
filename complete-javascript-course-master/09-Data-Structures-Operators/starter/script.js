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

  orderPizza: function (mainIngredient, ...restOfOrder) {
    console.log(`Main Ingredient: ${mainIngredient}`);
    console.log(`Other Ingredients: ${restOfOrder}.`);
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

// const rest1 = {
//   restName: 'Capri',
//   numGuests: 0,
// };
// const rest2 = {
//   restName: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// LONG WAY
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// OR USE THE LOGICAL ASSIGNMENT OPERATOR SHORTCUT
// rest1.numGuests ||= 10; // rest1.numGuests is falsey "0" so it becomes 10
// rest2.numGuests ??= 10;
// // use nullish assignment operator instead to avoid errors <??>

// console.log(rest1, rest2);

// rest2.owner = rest2.owner && '<ANONYMOUS>'; // looking to stop at falsey
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// console.log(rest2);

// // rest1.owner = rest1.owner && '<ANONYMOUS>'; // owner: undefined
// rest1.owner &&= '<ANONYMOUS>'; // owner doesnt even populate :)
// console.log(rest1);

////////////////////////////////////////////////////////////////////
// The Nullish Coalescing Operator (??)
////////////////////////////////////////////////////////////////////

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests); // wrong answer (10)

// // skips any nullish values and logs first non-nullish value
// const correctGuests = null ?? undefined ?? restaurant.numGuests ?? 10;
// console.log(correctGuests);

////////////////////////////////////////////////////////////////////
// SHORT CIRCUITING (&& and ||)
////////////////////////////////////////////////////////////////////

// ----------- OR ------------
// console.log(3 || 'Jimmy'); // will log the first truthy value (3)
// console.log('' || 'Jimmy'); // will log the first truthy value ('Jimmy')
// console.log(true || 0); // true is first truthy option
// console.log(null || undefined); // both are falsey - selects the OR option

// const guests = restaurant.numGuests || 2;

// console.log(guests);

// ----------- AND ------------
// // is looking for first falsey value to log
// console.log(0 && 'Jimmy');
// // Opposite of OR operator - logs 0 even tho tits falsey

// console.log(true && false);
// console.log(true && 7 && null && 'Jimmy');

////////////////////////////////////////////////////////////////////
// PRACTICAL EXAMPLE
////////////////////////////////////////////////////////////////////
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('Mushrooms', 'Sausage', 'Spinach');
// }

// restaurant.orderPizza &&
//   restaurant.orderPizza('Mushrooms', 'Sausage', 'Spinach');

// restaurant.openingHours.sun &&
//   restaurant.orderPizza('Mushrooms', 'Sausage', 'Spinach');
// // nothing happens because the restaurant is closed Sunday
// ////////////////
// restaurant.openingHours.sat &&
//   restaurant.orderPizza('Mushrooms', 'Sausage', 'Spinach');
// places an order since restaurant is open on Saturdays!

////////////////////////////////////////////////////////////////////

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
// const newRestaurant = { ...restaurant, founder: 'James Thomas', founded: 1991 };
// // console.log(newRestaurant);
// const restaurantCopy = { ...restaurant };
// restaurantCopy.locationName = 'Pizza Time';
// console.log('Copy:', restaurantCopy.locationName);
// console.log('Original:', restaurant.locationName);

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

////////////////////////////////////////////////////////////////////
// REST PATTERNS AND PARAMS
////////////////////////////////////////////////////////////////////

// USE CASES - SPREAD OPERATOR - UNPACKING
// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// REST PATTERN - PACKING - TAKES THE 'REST' OF THE ARRAY AND PUTS THEM IN NEW ARRAY CALLED OTHERS
// const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, others); // OUTPUT: 1 2 [3,4,5,6]
// console.log(a, b, ...others); // OUTPUT: 1 2 3 4 5 6

// NOTE: ALWAYS MAKE SURE THE REST PATTERN IS USED LAST TO SCOOP UP REMAINING ELEMENTS

////////////////////////////////////////////////////////////////////
// DESTRUCTURING CONTINUED
////////////////////////////////////////////////////////////////////

// ...otherFood is a bucket with everything else thats not a named variable
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// // console.log(pizza, risotto, ...otherFood);

// const { sat, ...weekdays } = restaurant.openingHours;
// // console.log(weekdays);

// ////////////////////////////////////////////////////////////////////
// // DESTRUCTURING WITH FUNCTIONS
// ////////////////////////////////////////////////////////////////////

// // REST ARGUMENTS - Condense big array arguments into '...numbers'
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(2, 3);
// add(5, 7, 1, 2);

// const x = [1, 2, 4, 5];
// const y = [10, 20, 30];
// add(...x, ...y); // == 72 submits 2 iterable array to the function 'add'
// add(1, 2, 4, 5, 10, 20, 30); // == 72 same result

// restaurant.orderPizza('Cheese', ' Pepperoni', ' Sausage');
