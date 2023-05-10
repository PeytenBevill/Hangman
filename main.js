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






const randomWords = require('random-words')
//for correctLetters.length, print 

const correctWord = randomWords({exactly: 1, maxLength: 10})[0];

let correctLetters = Array.from(correctWord, () => '_');

console.log("this is the random word", correctWord)

=
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
let incorrectGuesses = 0;
let board = Array(correctLetters.length).fill('_')
let maxAttempts = 6;

let attemptsLeft = maxAttempts;


const printBoard = () => {
  console.log(correctLetters.join(' '));
}


let incorrectGuesses = 0;

function checkArray(correctLetters, guessedLetter, incorrectGuesses) {
  if (
    correctLetters.includes(guessedLetter) ||
    incorrectGuesses.includes(guessedLetter)
  ) {
    //changed has to includes
    console.log("You already guessed this letter.");
    return;
  } else if (!correctLetters.includes(guessedLetter)) {
    //changed from guessedLetter ==== false
    letterBank.push(guessedLetter); // switched whats being pushed to where
    console.log("Wrong guess");
    incorrectGuesses++;
  } else if (letterBank.includes(guessedLetter)) {
    console.log("Letter has already been guessed");
    return;
  } else {
    // removed (correctLetters.includes(guessLetter)) //if the letter is in the array we want to add the guessed letter to an array of already guessed letters

    let indexOfLetter = []; //initialize empty array to place letters that have already been guessed
    for (let i = 0; i < correctLetters.length; i++) {
      //traverse the random word and find all ocurrences of the letter in the word
      if (correctLetters[i] === guessedLetter) {
        indexOfLetter.push(i);
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


const checkForWin = () => {
  return !correctLetters.includes('_');
}

const guessAmount = () => {
  return attemptsLeft === 0;

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

});

getPrompt()


// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#checkArray', () => {
      describe('when a letter has already been correctly guessed', () => {
        it('should return true when using the include method on the correctLetters', () => {
          // Set up
          const guessedLetter = 'a';
          const correctWord = 'banana';
          const correctLetters = ["a","b","n"];
          const incorrectGuesses = [];

          // Exercise
          const result = checkArray(correctLetters, guessedLetter, incorrectGuesses);

          // Verify
          expect(result).toBe(true);
        });
      });
    });
  });

    });
 
describe('#guessAmount', () => {
  it('should return true when `attemptsLeft` is 0', () => {
    attemptsLeft = 0;
    const result = guessAmount();
    assert.strictEqual(result, true);
  });
}

  it('should return false when `attemptsLeft` is greater than 0', () => {
    attemptsLeft = 3;
    const result = guessAmount();
    assert.strictEqual(result, false);
  });
});
}
