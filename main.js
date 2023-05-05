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

let letterBank = [];
let guessedLetters = []

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
    }
    letterBank.push(guessedLetter);
    console.log("Correct guess");
    return indexOfLetter;
  }
  // guessedLetter.push(guessedLetter); // adds guessed letter to array console logs all guessed letters (letterbank)
  // console.log("Letters used: ", letterBank);
}
=======
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



=======
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
}
