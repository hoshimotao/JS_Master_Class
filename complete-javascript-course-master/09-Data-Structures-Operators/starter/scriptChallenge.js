// 1) Create a player array for each team
// 2) 1st player in player arrays is goalie

// first player in each array is goalkeeper [gk, ...fieldPlayers]

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

const [players1, players2] = game.players;
// console.log(players1, players2);

// 1st player in list is goalie
// all others are fieldPlayers
const [gk, ...fieldPlayers] = players1;
// console.log(`Goalie: ${gk}`, `Field Players: ${fieldPlayers}`);

// 3) Create 'allPlayers' array for all combined
const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// 4) Create new array 'players1Final' with 3 new players
// 'Thiago', 'Coutinho', 'Perisic'

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// 5) Based on the game.odds object, create a variable for each odd called 'team1','draw', 'team2'

const { team1, x: draw, team2 } = { ...game.odds };
// console.log(team1, draw, team2);

// 6) Write a function 'printGoals' that takes any number of player names (NOT AN ARRAY[]) and prints each name to the console - along with number of goals they scored
const printGoals = function (...players) {
  // takes any amount of players as an arg
  //   console.log(`${players.length} goals were scored`);
  for (let i = 0; i < players.length; i++) {
    // console.log(players[i]);
  }
};

printGoals(...game.scored);
// printGoals('Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka');

// team1: 1.33,
//
// team2: 6.5,

team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
