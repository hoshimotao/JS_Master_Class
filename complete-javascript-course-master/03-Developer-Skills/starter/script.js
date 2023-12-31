// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// TODO: reminder goes here

// find the temp aplitude
const temperatures = [3, -2, -6, -1, "error", -20, 13, 17, 15, 14, 9, 5, 78];
const temps2 = [-4, 2, -6, 40, 90, 24];

// 1) Understand the problem
//   - What is temp amplitude? Diff btw highest and lowest temp
//   - How to compute max and min temps?
//   - What to do when you get an error temp
// 2) Breaking problem down into sub-problems
//   - How to ignore errors?
//   - Find max value in temp array
//   - Find min value in temp array
//   - Subtract min from max and return it

const calcTempAmplitude = function (temps, temps2) {
  const temps3 = temps.concat(temps2);
  let max = temps3[0];
  let min = temps3[0];

  for (let i = 0; i < temps3.length; i++) {
    const currTemp = temps3[i];
    if (typeof currTemp !== "number") {
      continue;
    }
    if (currTemp > max) {
      max = currTemp;
    }
    if (currTemp < min) {
      min = currTemp;
    }
  }
  console.log(min, max);
  console.log(temps3);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures, temps2);
console.log(amplitude);

// PROBLEM 2
// function should now accept 2 arrays of temps
// - Merge both arrays into one
