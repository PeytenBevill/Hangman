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

let board = []


//for correctLetters.length, print 


const randomWords = require('random-words')

const correctWord = randomWords(1)
console.log("this is the correct word", correctWord)

let correctLetters = correctWord.map(str => str.split('')).flat()

console.log(correctLetters)


const printBoard = (arr) => {
  for(let i = 0; i < arr.length; i++){
    process.stdout.write('_ ')
  }
}
printBoard(correctLetters)


//function that prints the board based on how many letters are in the word

//function that shows how many letters are in the word (turn word to individual letters)

//Player guesses a letter

//function that shows if the letter is in the word and how many times and what spaces it's in


//function for win

//function for losing
const guessAmount = () => {
  if(letterBank.length === 6){
    console.log('You lost!')
  } else {
    return
  }
}

//function for wrong letters into a letter bank that can't be reused
const wrongLetters = () => {
  let letterBank = []
  if(guessLetter === false){
    guessLetter.push(letterBank)
  } else if(letterBank.includes(guessLetter)){
    console.log("Letter has already been guessed")
    return
  }
}

//Terminal function @TODO edit function to apply to hangman
const getPrompt = () => {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
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
