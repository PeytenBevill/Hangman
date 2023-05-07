'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


//



const randomWords = require('random-words')

const correctWord = randomWords({exactly: 1, maxLength: 10})[0]; //use 'banana'; for tests

let correctLetters = Array.from(correctWord, () => '_');

console.log("this is the random word", correctWord)

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
    return true;
  }

  if (correctWord.includes(guessedLetter)) {
    displayWord(guessedLetter);
    console.log('Correct!');
  } else {
    console.log('Incorrect!');
    // guessedLetter.push(letterBank)
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
  process.exit();
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

getPrompt()



if (typeof describe === 'function') {
  const assert = require('assert');

// Unit Tests
describe('#displayWord', () => {
  it('should correctly update the `correctLetters` array with the guessed letter', () => {
    const guessedLetter = 'a';
    displayWord(guessedLetter);
    assert.deepStrictEqual(correctLetters, ["_", "a", "_", "a", "_", "a"]);
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

  it('should return false when there are still letters to be guessed', () => {
    correctLetters = ["_", "a", "_", "_", "_", "_"];
    const result = checkForWin();
    assert.strictEqual(result, false);
  });
});

describe('#guessAmount', () => {
  it('should return true when `attemptsLeft` is 0', () => {
    attemptsLeft = 0;
    const result = guessAmount();
    assert.strictEqual(result, true);
  });

  it('should return false when `attemptsLeft` is greater than 0', () => {
    attemptsLeft = 3;
    const result = guessAmount();
    assert.strictEqual(result, false);
  });
});
}
