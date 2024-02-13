'use strict';

console.log('hello world');

//////////////////////////
// DEFAULT PARAMETERS
//////////////////////////

// Flight Booking Function with default Parameters

const bookings = []; // ARRAY of bookings
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
  // you can write expressions in default parameters
) {
  // booking OBJECT

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  bookings.push(booking);
};
console.log(bookings);
createBooking('A320');
createBooking('A320', 15);
// createBooking('FL123', , 129); // CANNOT SKIP REQUIRED PARAMETER
createBooking('FL123', undefined, 239);
// ====> {flightNum: 'FL123', numPassengers: 1, price: 239}
// use the value 'undefined' to skip a required parameter
