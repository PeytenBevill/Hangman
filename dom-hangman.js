function setupGame() {
    // Get a reference to the game container element
    const gameContainer = document.getElementById("game-container");
  
    // Create a div element to hold the word to guess
    const wordContainer = document.createElement("div");
    wordContainer.classList.add("word-container");
    gameContainer.appendChild(wordContainer);
  
    // Create a div element to hold the guessed letters
    const guessedLettersContainer = document.createElement("div");
    guessedLettersContainer.classList.add("guessed-letters-container");
    gameContainer.appendChild(guessedLettersContainer);
  
    // Create a div element to hold the remaining guesses
    const remainingGuessesContainer = document.createElement("div");
    remainingGuessesContainer.classList.add("remaining-guesses-container");
    gameContainer.appendChild(remainingGuessesContainer);
  
    // Create a div element to hold messages to the user
    const messageContainer = document.createElement("div");
    messageContainer.classList.add("message-container");
    gameContainer.appendChild(messageContainer);
  
    // Update the DOM elements with the initial game state
    updateWordToGuess();
    updateGuessedLetters();
    updateRemainingGuesses();
    updateMessage();
  }