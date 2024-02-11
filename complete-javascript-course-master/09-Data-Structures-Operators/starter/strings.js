'use strict';

// //////////////////////////////////
// ///////// STRINGS PART 1 /////////
// //////////////////////////////////

// // const airline = 'TAP Air Portugal';
// // const plane = 'A320';

// // console.log(plane[0]); // A
// // console.log(plane[1]); // 3
// // console.log('hello'[0]); // h

// // console.log(airline.length); // 16
// // console.log(plane.length); // 4

// // console.log(airline.indexOf('r')); // 6th index in
// // console.log(airline.lastIndexOf('r')); // the occurence of 'r'
// // console.log(airline.indexOf('Portugal')); // is case sensitive

// // // SLICE
// // console.log(airline.slice(4)); // returns rest of string from index 4 on
// // const airPort = airline.slice(4);
// // console.log(airPort);
// // console.log(airline.slice(4, 7)); // 4 = start slice / 7 = end slice

// // // SLICE UNKNOWN FIRST WORD
// // console.log(airline.slice(0, airline.indexOf(' '))); // TAP
// // console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal

// // // NEGATIVE SLICING
// // console.log(airline.slice(-8)); // Portugal
// // console.log(airline.slice(1, -8)); // AP Air

// // const checkMiddleSeat = function (seat) {
// //   // B and E are middle seats
// //   // A B C
// //   // D E F
// //   seat.slice(-1) === 'B' || seat.slice(-1) === 'E'
// //     ? console.log(`${seat} is a middle seat`)
// //     : console.log(`${seat} is not a middle seat`);
// // };

// // checkMiddleSeat('11A');

// // // INSIDE THE BLACK BOX
// // console.log(new String('Jimmy'));
// // // JS actually converts strings to boxed objects when a method is performed
// // // on a string temporarily

// //////////////////////////////////
// ///////// STRINGS PART 2 /////////
// //////////////////////////////////

// const airline = 'TAP Air Portugal';

// // console.log(airline.toLowerCase());
// // console.log(airline.toUpperCase());
// // console.log('JiMMy'.toLowerCase());
// const passenger = 'jAmEs';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// const autoFormatName = function (passengerName) {
//   const passLower = passengerName.toLowerCase();
//   const passCorrect = passLower[0].toUpperCase() + passLower.slice(1);
//   console.log(passCorrect);
// };
// autoFormatName('jEreMy'); // Jeremy
// autoFormatName('DONNa'); // Donna

// // COMPARE EMAILS
// const email = 'hello@jimmy.io';
// const loginEmail = '  HeLLo@jIMMY.IO \n';

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();
// // console.log(trimmedEmail);

// // ONE STEP SOLUTION
// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// // REPLACING PARTS OF STRINGS

// const priceGB = '288,97£';
// const priceUS = '$' + priceGB.replace('£', '').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23! Boarding door 23!';

// console.log(announcement.replaceAll('door', 'gate')); // replaces all instances of 'door' with 'gate'

// // BOOLEANS
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.startsWith('A3'));
// console.log(plane.startsWith('Air'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('good job');
// }

// // Practice Exercise
// const checkBaggage = function (items) {
//   const itemsLowerCase = items.toLowerCase();
//   // easier to compare with everything lowercase
//   if (itemsLowerCase.includes('gun') || itemsLowerCase.includes('knife')) {
//     console.log('You cannot board the plane.');
//   } else {
//     console.log('You may board the plane.');
//   }
// };

// checkBaggage('I got some gum, a laptop, food, and a pocket knife');
// checkBaggage('I have a pair of socks and a camera');
// checkBaggage('Got some snacks and a gun of course, for protection');

//////////////////////////////////////
// MORE PRACTICE WITH STRINGS - 126
//////////////////////////////////////

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//// PRODUCE THE FOLLOWING
//  🔴 Delayed Departure from FAO to TXL (11h25)
//      Arrival from BRU to FAO (11hr45)
//  🔴 Delayed Departure from FAO to TXL (11h25)
//      Departure from FAO to LIS (12h30)

// DRY CODE REASONS
const getFlightCode = function (str) {
  return str.slice(0, 3).toUpperCase();
};
for (const flight of flights.split('+')) {
  const [flightType, from, to, time] = flight.split(';');
  const output = `${
    flightType.includes('Delayed') ? '🔴' : ''
  }${flightType.replaceAll('_', ' ')} ${getFlightCode(from)} to ${getFlightCode(
    to
  )} (${time.replace(':', 'h')})`.padStart(45); // trial / error on padding

  console.log(output);

  // MY SOLUTION
  // const flightReplace = flight.replaceAll('_', ' ');
  // const flightSplit = flightReplace.split(';');
  // console.log(
  //   `${flightSplit[0]} from ${flightSplit[1]
  //     .toUpperCase()
  //     .slice(0, 3)} to ${flightSplit[2]
  //     .toUpperCase()
  //     .slice(0, 3)} (${flightSplit[3].slice(0, 2)}h${flightSplit[3].slice(
  //     3,
  //     5
  //   )})`
  // );
}
// console.log(splitStr);
