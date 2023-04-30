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

let correctLetters = correctWord.map(str => str.split('')).flat()// turns word into an array of letters

console.log(correctLetters)


const printBoard = (arr) => {
  for(let i = 0; i < arr.length; i++){
    console.log("")
    for(let j = 0; j < arr.length; j++){
      process.stdout.write('a ')
      process.stdout.write('_ ')
    }
    
  }
}
printBoard(correctLetters)


function ifLetterInArray(correctLettersArray, guessLetter){
  if(correctLettersArray.includes(guessLetter)){
    
  }
}




//function that prints the board based on how many letters are in the word

//function that shows how many letters are in the word (turn word to individual letters)

//Player guesses a letter and changes to uppercase letters




//function for win

//function for losing
const guessAmount = () => {
  if(letterBank.length === 6){
    console.log('You lost!')
  } else {
    return
  }
}



function checkForWin (correctLetters) {//function check for win or lose
  if () { // spaces not filled and out of guesses, player loses

  } 
  else //if array of spaces is filled, player wins
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
