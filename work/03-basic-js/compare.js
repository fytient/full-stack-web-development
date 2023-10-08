"use strict";
/* DO NOT MODIFY EXCEPT WHERE ALLOWED */
module.exports = compare; // DO NOT MODIFY - USED FOR TESTING

function compare( word, guess ) {  // DO NOT MODIFY

/* YOU MAY MODIFY THE LINES BELOW */

  let count = 0;
  let wordCount = word.toLowerCase();
  let guessCount = guess.toLowerCase();

  for (let index = 0; index < wordCount.length; index++) {
    let currentLetter = wordCount[index];
    let letterIndex = guessCount.indexOf(currentLetter);
    
    if (letterIndex !== -1) {
      count++;
      guessCount = guessCount.substring(0, letterIndex) + guessCount.substring(letterIndex + 1);
    }
  }

  return count;
}
