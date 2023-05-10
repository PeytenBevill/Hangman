
'use strict';

const assert = require('assert');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const randomWords = require('random-words')

const correctWord = randomWords({exactly: 1, maxLength: 10})[0]

let correctLetters = Array.from(correctWord, () => '_');

let letterBank = [];

let maxAttempts = 6;
let attemptsLeft = maxAttempts;


const printBoard = () => {
  console.log(correctLetters.join(' '));
}


function displayWord(guessedLetter) {
  for (let i = 0; i < correctWord.length; i++) {
    if (correctWord[i] === guessedLetter) {
      correctLetters[i] = guessedLetter;
    }
  }
}

function checkArray(guessedLetter) {
  if (letterBank.includes(guessedLetter)) {
    console.log("You already guessed this letter.");
    return
  }
  if (correctWord.includes(guessedLetter)) {
    displayWord(guessedLetter);
    console.log('Correct!');
  } else {
    console.log('Incorrect!');
    attemptsLeft--;
  }
}

const checkForWin = () => {
  return !correctLetters.includes('_');
}

const guessAmount = () => {
  return attemptsLeft === 0;
}

function endGame(message) {
  console.log(message);
  console.log(`The word was: ${correctWord}`);
  rl.close();
}





function getPrompt() {
  printBoard();
  rl.question('Guess a letter: ', (guessedLetter) => {
    checkArray(guessedLetter.toLowerCase());

    if (checkForWin()) {
      endGame('You won!');
    } else if (guessAmount()) {
      endGame('You lost!');
    } else {
      getPrompt();
    }
  });
}

getPrompt();

function getPrompt() {
  printBoard();
  rl.question('Guess a letter: ', (guessedLetter) => {
    checkArray(guessedLetter.toLowerCase());

    if (checkForWin()) {
      endGame('You won!');
    } else if (guessAmount()) {
      endGame('You lost!');
    } else {
      getPrompt();
    }
  });

}
getPrompt()
if (typeof describe === 'function') {
  const assert = require('assert');
}
// Unit Tests
describe('#displayWord', () => {
  it('should correctly update the `correctLetters` array with the guessed letter', () => {
    const guessedLetter = 'a';
    displayWord(guessedLetter);
    assert.strictEqual(correctLetters, ["_", "a", "_", "a", "_", "a"]);
  });
});
describe('#checkArray', () => {
  it('should return true when the guessed letter has already been correctly guessed', () => {
    const guessedLetter = 'a';
    letterBank = ["a", "b"];
    const result = checkArray(guessedLetter);
    assert.strictEqual(result, true);
  });

  it('should decrease `attemptsLeft` when the guessed letter is incorrect', () => {
    const guessedLetter = 'c';
    attemptsLeft = 6;
    checkArray(guessedLetter);
    assert.strictEqual(attemptsLeft, 5);
  });
});


describe('#checkForWin', () => {
  it('should return true when all letters have been correctly guessed', () => {
    correctLetters = ["a", "b", "n", "a", "n", "a"];
    const result = checkForWin();
    assert.strictEqual(result, true);
  });

});