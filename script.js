let word = "apple"; // The word to guess
let wordArray = word.split(""); // Split the word into an array of letters
let displayedWord = new Array(word.length).fill("_"); // Create an array of underscores to display
let winCount = 0; // Number of wins
let lossCount = 0; // Number of losses
let timer; // Timer object

// Function to start the timer
function startTimer() {
  timer = setInterval(function() {
    console.log("Timer tick");
  }, 1000); // Run the timer every 1000 milliseconds (1 second)
}

// Function to reset the timer
function resetTimer() {
  clearInterval(timer); // Stop the timer
  startTimer(); // Restart the timer
}

// Function to update the displayed word
function updateDisplayedWord(letter) {
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i] === letter) {
      displayedWord[i] = letter;
    }
  }
}

// Function to check if the game is won or lost
function checkGameStatus() {
  // If there are no more underscores, the user has won
  if (!displayedWord.includes("_")) {
    winCount++;
    alert("You won!");
    clearInterval(timer);
  }
  // If the timer has run out, the user has lost
  else if (timer.timeRemaining === 0) {
    lossCount++;
    alert("You lost!");
    clearInterval(timer);
  }
}

// Start the timer when the page loads
startTimer();

// Listen for key events
document.addEventListener("keydown", function(event) {
  let key = event.key; // The key that was pressed
  updateDisplayedWord(key); // Update the displayed word
  checkGameStatus(); // Check if the game is won or lost
});

// Listen for clicks on the reset button
let resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", function() {
  resetTimer(); // Reset the timer
});

// Retrieve the win and loss counts from localStorage
let winCount = parseInt(localStorage.getItem("winCount")) || 0;
let lossCount = parseInt(localStorage.getItem("lossCount")) || 0;

// Update the win and loss counts in localStorage when the user wins or loses
function updateWinLossCounts() {
  localStorage.setItem("winCount", winCount);
  localStorage.setItem("lossCount", lossCount);
}

let displayedWordElement = document.querySelector("#displayed-word");
displayedWordElement.textContent = displayedWord.join(" ");

let winCountElement = document.querySelector("#win-count");
winCountElement.textContent = winCount;
let lossCountElement = document.querySelector("#loss-count");
lossCountElement.textContent = lossCount;