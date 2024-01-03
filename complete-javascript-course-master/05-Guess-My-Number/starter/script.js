'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Great guess!';

// //target text within a dom element
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// // target input value
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let gameMessage = document.querySelector('.message');

let hiddenNumber = document.querySelector('.number');

let score = 20;
let highscore = 0;

// show guessed number in console when Check! button is clicked
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // WHEN THERE IS NO INPUT
  if (!guess) {
    gameMessage.textContent = 'Try guessing a number!';

    // WHEN PLAYER WINS
  } else if (guess === secretNumber) {
    document.querySelector('.gameHeading').textContent =
      'Congrats, You Guessed it!';

    hiddenNumber.textContent = secretNumber;
    gameMessage.textContent = 'Correct!';
    document.querySelector('body').style.backgroundColor = 'green';
    hiddenNumber.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // WHEN GUESS IS TOO HIGH
  } else if (guess > secretNumber) {
    if (score > 1) {
      gameMessage.textContent = 'Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      gameMessage.textContent = 'GAME OVER';

      document.querySelector('.score').textContent = 0;
    }

    // WHEN GUESS IS TOO LOW
  } else if (guess < secretNumber) {
    if (score > 1) {
      gameMessage.textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      gameMessage.textContent = 'GAME OVER';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// RESET GAME BY CLICKING AGAIN BUTTON
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  gameMessage.textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  hiddenNumber.textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('.gameHeading').textContent = 'Guess A Number!';

  hiddenNumber.style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
