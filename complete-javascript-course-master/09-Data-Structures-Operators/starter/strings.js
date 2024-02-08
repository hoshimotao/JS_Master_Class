const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log('hello'[0]); // h

console.log(airline.length); // 16
console.log(plane.length); // 4

console.log(airline.indexOf('r')); // 6th index in
console.log(airline.lastIndexOf('r')); // the occurence of 'r'
console.log(airline.indexOf('Portugal')); // is case sensitive

// SLICE
console.log(airline.slice(4)); // returns rest of string from index 4 on
const airPort = airline.slice(4);
console.log(airPort);
console.log(airline.slice(4, 7)); // 4 = start slice / 7 = end slice

// SLICE UNKNOWN FIRST WORD
console.log(airline.slice(0, airline.indexOf(' '))); // TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal

// NEGATIVE SLICING
console.log(airline.slice(-8)); // Portugal
console.log(airline.slice(1, -8)); // AP Air

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  // A B C
  // D E F
  seat.slice(-1) === 'B' || seat.slice(-1) === 'E'
    ? console.log(`${seat} is a middle seat`)
    : console.log(`${seat} is not a middle seat`);
};

checkMiddleSeat('11A');

// INSIDE THE BLACK BOX
console.log(new String('Jimmy'));
// JS actually converts strings to boxed objects when a method is performed
// on a string temporarily
