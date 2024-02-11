'use strict';

/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is clicked.

TEST DATA (Paste into textarea)
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure



SHOULD PRODUCE THIS OUTPUT(5 separate console.log outputs)
underscoreCase    ✅
firstName         ✅✅
someVariable      ✅✅✅
calculateAge      ✅✅✅✅
delayedDeparture  ✅✅✅✅✅

HINT 1: Remember which character defines a new line in textarea

HINT 2: The solution only needs to work for a variable made out of 2 words, a_b 

HINT 3: Start without worrying about the ✅. Tackle that only after you have the vaiable name conversion working.

*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const button = document.querySelector('button');
button.innerText = 'Send';

button.addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const textArr = text.split('\n');

  for (const [i, texts] of textArr.entries()) {
    const [firstWord, secondWord] = texts.toLowerCase().trim().split('_');
    // console.log(firstWord, secondWord);
    const output = `${firstWord}${secondWord.replace(
      secondWord[0],
      secondWord[0].toUpperCase()
    )}`;

    console.log(`${output.padEnd(20)} ${'✅'.repeat(i + 1)}`);

    // MY SOLUTION - SLOW
    // const trimmedLower = texts.toLowerCase().trim().split('_');
    // const firstIndex = trimmedLower[1];
    // const firstIndexUpper = firstIndex[0].toUpperCase() + firstIndex.slice(1);
    // const formattedText = trimmedLower[0] + firstIndexUpper;

    // emoji = emoji + '✅';

    // const formattedTextPlus = formattedText + ' ' + emoji;
    // console.log(formattedTextPlus);
  }
});

//
//
//
/* TEST DATA (Paste into textarea)
 underscore_case
  first_name
 Some_Variable
   calculate_AGE
 delayed_departure
 */
