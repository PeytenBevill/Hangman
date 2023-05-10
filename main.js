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


<<<<<<< HEAD



const randomWords = require('random-words')
=======
//for correctLetters.length, print 
>>>>>>> 2a013433f6ce8bcd5fa96c10bb3c000b3d144a7b

const correctWord = randomWords({exactly: 1, maxLength: 10})[0];

<<<<<<< HEAD
let correctLetters = Array.from(correctWord, () => '_');

console.log("this is the random word", correctWord)

=======
// console.log("this is the random word", correctWord)
=======
const randomWords = require('random-words')

const correctWord = randomWords(1)
// console.log("this is the correct word", correctWord)

// console.log(correctWord)
// console.log(correctLetters)
//  function printBoard(correctWord, guessedLetters){
//    for(let i = 0; i < arr.length; i++){
//     if(checkIfLetterInArray(guessedLetters, correctWord))
//      process.stdout.write('_ ')    
//    }
//    else{
//     process.stdout.write('_ ')    

//    }
//  }
=======
let correctLetters = correctWord.map(str => str.split('')).flat()


// console.log(correctLetters)

>>>>>>> 2a013433f6ce8bcd5fa96c10bb3c000b3d144a7b
let letterBank = [];
let guessedLetters = []

<<<<<<< HEAD
let maxAttempts = 6;

let attemptsLeft = maxAttempts;


const printBoard = () => {
  console.log(correctLetters.join(' '));
}


function displayWord(guessedLetter) {
  for (let i = 0; i < correctWord.length; i++) {
    if (correctWord[i] === guessedLetter) {
      correctLetters[i] = guessedLetter;
=======
let incorrectGuesses = 0;
let board = Array(correctLetters.length).fill('_')


const printBoard = () => {
  console.log(board.join(' '));
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
>>>>>>> 2a013433f6ce8bcd5fa96c10bb3c000b3d144a7b
    }
  }
}
=======
//function that prints the board based on how many letters are in the word

//function that shows how many letters are in the word (turn word to individual letters)

//Player guesses a letter

//function that shows if the letter is in the word and how many times and what spaces it's in




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


<<<<<<< HEAD
function getPrompt() {
=======

=======
//Terminal function @TODO edit function to apply to hangman
const getPrompt = () => {
>>>>>>> 2a013433f6ce8bcd5fa96c10bb3c000b3d144a7b
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
<<<<<<< HEAD
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
=======

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      ticTacToe(0, 0)
      ticTacToe(0, 1)
      ticTacToe(1, 1)
      ticTacToe(0, 2)
      ticTacToe(2, 2)
      assert.equal(checkForWin(), true);
>>>>>>> 2a013433f6ce8bcd5fa96c10bb3c000b3d144a7b
    });
  });
<<<<<<< HEAD
}
=======
} else {

  getPrompt();

}
}
>>>>>>> 2a013433f6ce8bcd5fa96c10bb3c000b3d144a7b
