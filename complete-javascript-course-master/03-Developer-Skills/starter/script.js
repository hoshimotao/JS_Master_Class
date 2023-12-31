// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// find the temp aplitude
// const temperatures = [3, -2, -6, -1, "error", -20, 13, 17, 15, 14, 9, 5, 78];
// const temps2 = [-4, 2, -6, 40, 90, 24];

// 1) Understand the problem
//   - What is temp amplitude? Diff btw highest and lowest temp
//   - How to compute max and min temps?
//   - What to do when you get an error temp
// 2) Breaking problem down into sub-problems
//   - How to ignore errors?
//   - Find max value in temp array
//   - Find min value in temp array
//   - Subtract min from max and return it

// const calcTempAmplitude = function (temps, temps2) {
//   const temps3 = temps.concat(temps2);
//   let max = temps3[0];
//   let min = temps3[0];

//   for (let i = 0; i < temps3.length; i++) {
//     const currTemp = temps3[i];
//     if (typeof currTemp !== "number") {
//       continue;
//     }
//     if (currTemp > max) {
//       max = currTemp;
//     }
//     if (currTemp < min) {
//       min = currTemp;
//     }
//   }
//   console.log(min, max);
//   console.log(temps3);
//   return max - min;
// };
// const amplitude = calcTempAmplitude(temperatures, temps2);
// console.log(amplitude);

// PROBLEM 2
// function should now accept 2 arrays of temps
// - Merge both arrays into one

// -------- DEBUGGING -------
// IDENTIFY / FIND / FIX / PREVENT

// -------- DEBUGGING WITH CONSOLE + BREAKPOINTS -------

// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     // value: Number(prompt("Degrees celsius: ")),
//     value: 10,
//   };

//   console.log(typeof measurement.value);
//   const kelvin = measurement.value + 273;

//   return kelvin;
// };

// console.log(measureKelvin());

// const temperatures = [3, -2, -6, -1, "error", -20, 13, 17, 15, 14, 9, 5, 78];
// const temps2 = [-4, 2, -6, 40, 90, 24];

// const calcTempAmplitudeBug = function (temps, temps2) {
//   const temps3 = temps.concat(temps2);
//   //   let max = temps3[0];
//   //   let min = temps3[0];
//   let max = 0;
//   let min = 0; // manually assigning min to 0 causes bug that prevents actual minimum from being found

//   for (let i = 0; i < temps3.length; i++) {
//     const currTemp = temps3[i];
//     if (typeof currTemp !== "number") {
//       continue;
//     }
//     if (currTemp > max) {
//       max = currTemp;
//     }
//     if (currTemp < min) {
//       min = currTemp;
//     }
//   }
//   console.log(min, max);
//   console.log(temps3);
//   return max - min;
// };
// const amplitude = calcTempAmplitudeBug(temperatures, temps2);
// console.log(amplitude);

// ---------------- CODING CHALLENGE ----------------

// Given array of forecasted max temps, the thermometer displayed a string
// with these temps

// Example: 17 C in 1 days, 21 C in 2 days, etc
// Create function 'printForecast' that takes an array 'arr' and logs string
// like above

// TEST DATA: [17,21,23]
// TEST DATA 2: [12, 5, -5, 0, 4]

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]} degrees in ${[i + 1]} days ... `;
  }
  return str;
};

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(printForecast(data1));
console.log(printForecast(data2));
