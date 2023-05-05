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
const correctWord = randomWords(1)


// console.log("this is the random word", correctWord)

//we may not need to turn this into a separate string array
let correctLetters = correctWord.map(str => str.split('')).flat()// turns word into an array of letters

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

// printBoard("Inside of printBoard", correctLetters)

//this function will display the 
let letterBank = [];

function checkArray(correctLetters, guessedLetter, incorrectGuesses) {
 
  if (correctLetters.includes(guessedLetter)|| incorrectGuesses.includes(guessedLetter)) {
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


function displayWord(correctWord, guessedLetter) {
  let displayWord = "";
  for (let i = 0; i < correctWord.length; i++) {
    if (guessedLetter.has(correctWord[i]))
      displayWord = displayWord + correctWord[i] + " ";
    else displayWord = displayWord + "_ ";
  }
  return displayWord; // added this return statement
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
  describe('#checkArray', () => {
      describe('when a letter has already been correctly guessed', () => {
        it('should return true when using the `inlcude` method on the `correctLetters`', () => {
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

        expect(result).toBe('_','a','_','a','_','a');
      });
    });

  });

}