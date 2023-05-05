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


//for correctLetters.length, print 


const randomWords = require('random-words')

const correctWord = randomWords(1)
// console.log("this is the correct word", correctWord)

let correctLetters = correctWord.map(str => str.split('')).flat()

// console.log(correctLetters)

let letterBank = [];
let guessedLetters = []

let incorrectGuesses = 0;
let board = Array(correctLetters.length).fill('_')

const printBoard = () => {
  console.log(board.join(' '));
}


//function that prints the board based on how many letters are in the word

//function that shows how many letters are in the word (turn word to individual letters)

//Player guesses a letter

//function that shows if the letter is in the word and how many times and what spaces it's in


//function for win
const checkForWin = () => {
  if(correctLetters.length === guessedLetters.length){
    console.log("You won!")
    process.exit(0)
  }
}

//function for losing
const guessAmount = () => {
  if(incorrectGuesses === 6){
    console.log('You lost!')
    process.exit(0)
  }
}



//Terminal function @TODO edit function to apply to hangman
const getPrompt = () => {
  printBoard();
  console.log("Guess a letter, Player ");
  rl.question('', (guessedLetter) => {
    checkArray(guessedLetter.toLowerCase());
    displayWord(correctWord, guessedLetter)
    guessAmount()
    checkForWin()
    getPrompt();
  });
}


// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

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
    });
  });
} else {

  getPrompt();

}
