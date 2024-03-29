'use strict';

const weekdays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const openingHours = {
  [weekdays[4]]: {
    open: 12,
    close: 22,
  },
  [weekdays[6 - 1]]: {
    // objects can have computed keys
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  locationName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    // before = order: function(){}
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ time = '20:00', address, mainIndex = 0, starterIndex = 1 }) {
    console.log(
      `Order received at: ${time}. Your food will be delivered to ${address}. Your starter option is ${this.starterMenu[starterIndex]} and your main dish is ${this.mainMenu[mainIndex]}.`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`You ordered: ${ing1}, ${ing2}, and ${ing3}.`);
  },

  orderPizza(mainIngredient, ...restOfOrder) {
    console.log(`Main Ingredient: ${mainIngredient}`);
    console.log(`Other Ingredients: ${restOfOrder}.`);
  },
  openingHours,
  // ES6 Enhanced Object Literals - no more openingHours: openingHours
};

// ////////////////////////////////////////////////////////////////////
// // OPTIONAL CHAINING
// ////////////////////////////////////////////////////////////////////
// OLD WAY
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// NEW WAY - CHECK IF PROPERTY EVEN EXISTS AND IF IT DOESNT,
// WILL RETURN UNDEFINED RIGHT AWAY
// console.log(restaurant.openingHours?.thu); // 12

const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  //console.log(`On ${day} the restaurant is open at ${open}`);
}

// METHODS
//console.log(restaurant.orter?.(0, 1) ?? 'Method does not exist');

// ON ARRAYS
const users = [
  { name: 'Jimmy', email: '123@gmail.com', age: 32 },
  { name: 'Colleen', email: '456@gmail.com', age: 22 },
];
// using optional chaining :)
//console.log(users[0]?.name ?? 'Users array is empty');
// old way
if (users.length > 0) {
  //console.log(users[0].name);
} else {
  //console.log('Users array is empty');
}

// ///////////////////////////////////////////////////////////
// // LOOPING OBJECTS - OBJ KEYS, VALUES, AND ENTRIES
// ///////////////////////////////////////////////////////////

// CHEAT SHEET
// Object.keys(objectName) = actual key name ('Monday')
// Object.values = that day's opening hours
// ({open: 12, close: 22})
// Object.entries = all key value pairs inside openingHours
// example:['monday', {open: 12, close: 22}]

// Property KEYS
const properties = Object.keys(openingHours);
// console.log(properties);

let openStr = `the restaurant is open ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
  // adds the day to the end of the string - thu fri sat
}

//console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
//console.log(values);

// Entire Object - ENTRIES

const entries = Object.entries(openingHours);
//console.log(entries);

// [key, value] - value can be destructured into whats inside
// {open, close}
// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }

// ///////////////////////////////////////////////////////////
// // FOR OF LOOPS
// ///////////////////////////////////////////////////////////

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const foodItem of menu) {
//   console.log(foodItem);
// }
// console.log(menu.length);

// for (const foodItem of menu.entries()) {
//   const [key, value] = [...menu.entries()];
//   // console.log(`key: ${key[0]}, value: ${value[1]}`); // old way
//   console.log(`${foodItem[0] + 1}: ${foodItem[1]}`); // old way
// }

// better way
for (const [i, el] of menu.entries()) {
  // console.log(`${i + 1}: ${el}`);
}

// console.log([...menu.entries()]);

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

////////////////
// SETS
///////////////

// ***** CANNOT RETRIEVE DATA ELEMENTS FROM SETS - USE ARRAYS
// ***** ELEMENTS IN SETS CANNOT BE TARGETED

// creates a set of unique elements and removes dupes
// pass in an iterable - such as an Array
// const orderSet = new Set(['Pasta', 'Risotto', 'Pizza', 'Pasta']);
// // {'Pasta', 'Risotto', 'Salad', 'Pizza'}
// // Also works with mixed data types like numbers, strings
// console.log(new Set('Jimmy'));

// console.log(orderSet);
// console.log(orderSet.size); // contains 3 unique elements

// // check if an element exists in the set
// console.log(orderSet.has('Pasta')); // true
// console.log(orderSet.has('Jimmy')); // false

// orderSet.add('Salad'); // adds salad to orderSet
// console.log(orderSet); // {'Pasta', 'Risotto', 'Pizza', 'Salad'}
// orderSet.delete('Pizza');
// console.log(orderSet);
// // orderSet.clear(); // deletes all elements in set
// console.log(orderSet);

// LOOP OVER SETS USING FOR OF LOOP
// for (const order of orderSet) {
//   console.log(order);
// }

// // Creating a Set from an array with duplicates - most common use
// const staff = ['Waiter', 'Chef', 'Hostess', 'Manager', 'Waiter', 'Chef'];

// // const staffSet = new Set(staff);
// // creates ---> {'Waiter', 'Chef', 'Hostess', 'Manager'}

// const staffSet = [...new Set(staff)]; // destructure iterable Set into array
// console.log(staffSet); // ['Waiter', 'Chef', 'Hostess', 'Manager']
// console.log(new Set(staff).size); // 4 different roles in restaurant
// console.log(new Set('JimmyThomas').size); // 9 unique letters

// ***** IF ORDER IS IMPORTANT - USE ARRAYS

////////////////
// MAPS
////////////////
// Define a callback function
// function square(x) {
//   return x ** 2;
// }

// // Create an array
// const numbers = [1, 2, 3, 4, 5];

// // Apply the square function to each element of the array using map()
// const squaredNumbers = numbers.map(square);

// console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// const rest = new Map(); // You typically start with empty Map
// // console.log(new Map().set(true, 'hey')); // random new map object

// // SET METHOD
// rest
//   .set('name', 'classico Italiano')
//   .set(1, 'Boca, FL')
//   .set('categories', ['Italian', 'Vegetarian', 'Keto'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open!')
//   .set(false, 'We are closed!');

// // GET METHOD
// console.log(rest.get('name')); // Input = key, Output = val
// console.log(rest.get('Boca, FL')); // Input = val, Output = undefined
// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// // HAS METHOD
// console.log(rest.has('name')); // name is a key - true
// console.log(rest.has('joe')); // joe is not a key - false

// // DELETE METHOD
// rest.delete('name');
// console.log(rest.has('name')); // key 'name' has been removed
// console.log(rest.size); // 6 key value pairs now
// rest.clear();
// console.log(rest); // empty Map object called rest

// // WITH ARRAYS AS KEYS
// const someArr = [1, 2];
// rest.set(someArr, 'TEST');
// console.log(rest.get(someArr));
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest.get(document.querySelector('h1')));
// console.log(rest);

// More effective way to set key value pairs in a Map object
// const question = new Map([
//   ['question', 'What is the best coding language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Python'],
//   [4, 'Javascript'],
//   ['correct', 4],
//   [true, 'Correct!'],
//   [false, 'Incorrect, please try again.'],
// ]);

// console.log(question);

// Convert object to map
// console.log(Object.entries(openingHours)); // looks similar to map
const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);
// MAPS ARE ALSO ITERABLE!! Can use for loops and for of loops on them!

// QUIZ APP PRACTICE
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }

// const answer = Number(prompt('Your answer'));
// console.log(question.get(question.get('correct') === answer));
// becomes one of the following
// question.get(true) or question.get(false)
// based on user's input
// therefore fetching the true key --> 'Correct!'
// or the false key --> 'Incorrect, please try again.'

// Convert Map back into an Array

// console.log(question);
// console.log([...question]);
// // console.log([...question.entries()]); same as ...question
// console.log([...question.keys()]);
// console.log([...question.values()]);

// Which Data Structure to Use? Arrays, Sets, Objects, Maps
// ARRAYS = use when you need ORDERED list of values (allows duplicates)
// use when you need to MANIPULATE data

// SETS = Use when you need to work with UNIQUE values / HIGH PERFORMANCE is very important / REMOVE DUPLICATES from arrays

// OBJECTS = More traditional key/value store ('typically overused when not necessary') / Easier to write and access values with '.' and [] / use when you need to include functions (methods) in object / when working with JSON (can convert to Map)

// MAPS = Better performance than objects / keys can have ANY data type / easy to iterate / Easy to compute size (mapVariableName.size) / when you simply need to map keys to values / when you need keys that are NOT strings
