/*
we have a map with a log of the events at a soccer game.
The values are the events themselves.
The keys are the minutes in which each event happened.


*/
// GAME EVENT MAP
const gameEvents = new Map([
  [17, 'GOAL!!'],
  [36, 'Substitution'],
  [47, 'GOAL!!'],
  [61, 'Substitution'],
  [64, 'Yellow Card'],
  [69, 'Red Card'],
  [70, 'Substitution'],
  [72, 'Substitution'],
  [76, 'GOAL!!'],
  [80, 'GOAL!!'],
  [92, 'Yellow Card'],
]);

console.log(gameEvents);

/* 1. Create an array 'events' of the different game events that happened (no duplicates)*/

// create a unique 'SET' - use spread operator to 'unpack' SET into an ARRAY
const events = [...new Set(gameEvents.values())];
// Console log the results
console.log(events);

/* 2. After game has finished, it was found that the yellow card from min 64 (gameEvents.delete(64)) was unfair. So remove this event from the event logs */

// ANSWER FOR NUMBER 2
// gameEvents.delete(64);
console.log(gameEvents);

/* 3. Print the following string to the console: 'An event happened, on average, every NUMBER minutes" (keep in mind that a game is 90 mins) --> possibly get the total length and divide by 90? */

console.log(
  `An event happened, on average, every ${Math.floor(
    90 / gameEvents.size
  )} minutes`
);

/* Loop over the events and log them to the console, marking whether it's in the 1st or 2nd half (within the first 45 mins or after) like this: 
[FIRST HALF] 17: GOAL
[SECOND HALF] 65: GOAL*/

for (const [minute, event] of gameEvents) {
  const half = minute <= 45 ? 'FIRST HALF' : 'SECOND HALF';
  console.log(`[${half}] ${minute}: ${event}`);
}
