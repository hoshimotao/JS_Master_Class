'use strict';

// Coding Challenge #2
// Soccer betting app

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrusia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Loop over the game.score array and print each player name to the console, along with the goal number (example: "Goal 1: Lewandowski")

for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// 2. Use a loop to calculate the average odd and log it to the console

let oddsAvg = 0;
const odds = Object.values(game.odds);
// let sum = 0;
//   sum += odd;
for (const odd of odds) oddsAvg += odd;

oddsAvg /= odds.length;
console.log(oddsAvg);

// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrusia Dortmund: 6.5

// const [team1, x, team2] = Object.entries(game.odds);
// console.log(`Odd of victory ${game.team1}: ${team1[1]}`);
// console.log(`Odd of draw: ${x[1]}`);
// console.log(`Odd of victory ${game.team2}: ${team2[1]}`);

for (const [team, odd] of Object.entries(game.odds)) {
  //   console.log(team, odd);
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}:`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

// 4. Create object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the values.
// example:

// {
//     Gnarby: 1,
//     Hummels: 1,
//     Lewandowski: 2
// }

const scorers = {};
for (const player of game.scored) {
  //   console.log(player); // player name even duplicates
  scorers[player] = (scorers[player] || 0) + 1;
  //   console.log(scorers[player]); // how many of that name appear
}
console.log(scorers);
// {Lewandowski: 2, Gnarby: 1, Hummels: 1}

let playerCounts = {};
let player = 'Lewandowski';

playerCounts[player] = 2; // Javscript magic does not reassign or assign 2 to the object key, instead it assigns or increments that key's value.

console.log(playerCounts); // Output: { Lewandowski: 2 }
console.log(typeof Object.keys(playerCounts)[0]); // Output: string
console.log(typeof Object.values(playerCounts)[0]); // Output: number

// USE Object.entries(objectName) for objects
// USE arrayName.entries() for arrays
