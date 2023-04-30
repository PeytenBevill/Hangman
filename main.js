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

const alphabet = 
['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];

const randomWords = require('random-words')
const correctWord = randomWords(1)

console.log("this is the random word", correctWord)

//we may not need to turn this into a separate string array
let correctLetters = correctWord.map(str => str.split('')).flat()// turns word into an array of letters


 function printBoard(correctWord, guessedLetters){
   for(let i = 0; i < arr.length; i++){
    if(checkIfLetterInArray(guessedLetters, correctWord))
     process.stdout.write('_ ')    
   }
 }

// printBoard("Inside of printBoard", correctLetters)

//this function will display the 
function displayWord(correctWord, guessedLetters){
  let displayWord = ''
  for(let i = 0; i < correctWord.length; i++){
    if(guessedLetters.has(correctWord[i]))
      displayWord = displayWord + correctWord[i] + ' '
    else
      displayWord = displayWord + '_ '
  }
    
}

//this function checks if the guessed letter is in the random word, checks for correct guess and wrong guess
function checkIfLetterInArray(letter, guessedLetters, correctWord){ 
  if(guessedLetters.has(letter)){
    alert("You already guessed this letter.")
    return null
  }
  else if(correctWord.includes(letter)){
    //if the letter is in the array we want to add the guessed letter to an array of already guessed letters
    let indexOfLetter = []//initialize empty array to place letters that have already been guessed
    for(let i = 0; i < correctWord.length;i++){//traverse the random word and find all ocurrences of the letter in the word
      if(correctWord[i] === letter){
        indexOfLetter.push(i)
      }
    }
    return indexOfLetter
  }
  else{
    alert("Wrong guess.")
    return false
  }
}

//this function will get input(current guessed letter) from the user in the terminal
function getCurrentGuessedLetter(){
  const readInput = readline.Interface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise(resolve => {
    readInput.question("Guess a letter: ", guess => {
      readInput.close()
      resolve(guess.toLowerCase())
    })
  })
}

function updateGuessedLetters(guessedLetters, letter){
  //letter needs to be defined, create a getLetter function that links to the DOM 
  //word bank should be displayed on DOM, onclick() of letter, update it as a 
  //guessed letter 

  guessedLetters.add(letter)
}


//function that prints the board based on how many letters are in the word

//function that shows how many letters are in the word (turn word to individual letters)

//Player guesses a letter

//function that shows if the letter is in the word and how many times and what spaces it's in

//function for win

//function for losing

//function for wrong letters into a letter bank that can't be reused

//Terminal function @TODO edit function to apply to hangman



function playGame(){
  
  const guessedLetters = new Set()//data structure for unique values

  while(){
    
  }
}

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
