'use strict';

// Declare DOM Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

// Starting Conditions
const scores = [0, 0];
score0El.textContent = 0;
score1El.textContent = 0;
let currentScore = 0;
let activePlayer = 0;
let playing = true;

diceEl.classList.add('hidden');

// Rolling dice functionality

// ROLL
btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1; // Random Number
    diceEl.src = `dice-${dice}.png`; // Random dice pic
    diceEl.classList.remove('hidden'); // display dice

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch player & and clear current score
      switchPlayer();
    }
  }
});

// SWITCH PLAYER
const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// HOLD DICE
btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. add current score to active players score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //
    // 2. Check if players score is >=100
    if (scores[activePlayer] >= 15) {
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // 4. Switch to next player
      switchPlayer();
    }
  }
});

// NEW GAME
btnNew.addEventListener('click', function () {
  playing = true;
});
