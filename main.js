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

const correctWord = randomWords({exactly: 1, maxLength: 10})[0];

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
    return
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
  describe('#displayWord', () => {
    describe('displays correctly guessed letters on board', () => {
      it('should return correctly guessed words to board', () => {
        const guessedLetter = 'a';
        const correctWord = 'banana';
        const correctLetters = ["a","b","n"];
        const incorrectGuesses = [];

        const result = displayWord(correctWord, guessedLetter);

        expect(result).toBe('','a','','a','_','a');
      });
    });

  });
}

