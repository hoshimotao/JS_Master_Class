'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let gameMessage = document.querySelector('.message');

// DISPLAY MESSAGE FUNCTION
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let hiddenNumber = document.querySelector('.number');

let score = 20;
let highscore = 0;

// show guessed number in console when Check! button is clicked
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // WHEN THERE IS NO INPUT
  if (!guess) {
    displayMessage('Try guessing a number!');

    // WHEN PLAYER WINS
  } else if (guess === secretNumber) {
    document.querySelector('.gameHeading').textContent =
      'Congrats, You Guessed it!';

    hiddenNumber.textContent = secretNumber;
    displayMessage('Correct!');
    document.querySelector('body').style.backgroundColor = 'green';
    hiddenNumber.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // WHEN GUESS IS WRONG
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('GAME OVER');

      document.querySelector('.score').textContent = 0;
    }
  }
});

// RESET GAME BY CLICKING AGAIN BUTTON
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  hiddenNumber.textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('.gameHeading').textContent = 'Guess A Number!';

  hiddenNumber.style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
