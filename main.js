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

let correctLetters = correctWord.map(str => str.split('')).flat()// turns word into an array of letters

// console.log(correctLetters)

let letterBank = [];
let guessedLetters = []

let incorrectGuesses = 0;
let board = Array(correctLetters.length).fill('_')

const printBoard = () => {
  console.log(board.join(' '));
}


function ifLetterInArray(correctLettersArray, guessLetter){
  if(correctLettersArray.includes(guessLetter)){
    
  }
}




//function that prints the board based on how many letters are in the word

//function that shows how many letters are in the word (turn word to individual letters)

//Player guesses a letter and changes to uppercase letters




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
    it('should place a letter on the dashes', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check if a guesses letter is correct word', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should place wrong letters in bank', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });

    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
