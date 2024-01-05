'use strict';

function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    let output = `${firstName}, You are ${age} years old, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'John';
      const str = `Oh, and you're a millenial! ${firstName}.`;
      // looks up for nearest firstName defined - John in this case
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      output = 'NEW OUTPUT';

      console.log(add(1, 2));
    }
    console.log(output);

    console.log(millenial);
    // var is function scoped - can be located anywhere within the function
    // it is declared in
  }

  printAge();
  return age;
}

const firstName = 'Jimmy';
calcAge(1991);
