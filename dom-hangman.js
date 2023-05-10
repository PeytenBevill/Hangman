const randomWords = require('random-words')

const correctWord = randomWords({exactly: 1, maxLength: 10})[0]

let correctLetters = Array.from(correctWord, () => '_');

let letterBank = [];

let maxAttempts = 6;
let attemptsLeft = maxAttempts;

const updateHiddenWord = () => {
  const hiddenWordElement = document.getElementById('hidden-word');
  hiddenWordElement.innerHTML = correctLetters.join(' ');
}

function displayWord(guessedLetter) {
  for (let i = 0; i < correctWord.length; i++) {
    if (correctWord[i] === guessedLetter) {
      correctLetters[i] = guessedLetter;
    }
  }
  updateHiddenWord()
}

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

for (let i = 0; i < letters.length; i++) {
  const letterButton = document.getElementById(letters[i]);

  letterButton.addEventListener('click', function() {
    // code to handle click on letter button
    const letter = button.id
    checkArray(letter)
  });
  
}

function checkArray(letter) {
  if (letterBank.includes(letter)) {

    console.log("You already guessed this letter.");
    return
  }
  

  if (correctWord.includes(letter)) {
    displayWord(letter);
    console.log('Correct!');
  } else {
    console.log('Incorrect!');
    attemptsLeft--;
  }
}

const checkForWin = () => {
  return !correctLetters.includes('_');
}

const guessAmount = () => {
  return attemptsLeft === 0;
}

const hangman = () => {
  displayWord()
  if (checkForWin()) {
    return alert("You Won!");
  } else if (guessAmount()) {
    return alert("You Lost! The correct word was" + correctWord);
  } else {
    hangman();
  }
}