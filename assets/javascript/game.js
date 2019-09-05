// Putting onload function to make sure nothings ran until css/html are loaded

window.onload = function () {

// Declaring Random 8bit vidoe game character Guesses
var wordsList = 
["mario", "pacman", "donkeykong", "yoshi", "link", "pikachu", "sonic", "megaman", "mew", "kirby"];

// Declaring variables for game
var randomWord = "";
var lettersInChosenWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongGuesses = [];
var letterGuessed = "";
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

// Creating Game

function startGame() {
  numGuesses = 9;
  randomWord = wordsList[Math.floor(Math.random() * wordsList.length)];
  lettersInChosenWord = randomWord.split("");
  numBlanks = lettersInChosenWord.length;
  console.log(randomWord);
  blanksAndSuccesses = [];
  wrongGuesses = [];

// This is based on number of letters in solution.
  for (var i = 0; i < numBlanks; i++) {
    blanksAndSuccesses.push("_");
  }
  console.log(blanksAndSuccesses);


// This updates guesses
  document.getElementById("guesses-left").innerHTML = numGuesses;
  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
}

// Doing comparison matches
function checkLetters(letter) {
  var letterInWord = false;
  for (var i = 0; i < numBlanks; i++) {
    if (randomWord[i] === letter) {
      letterInWord = true;
    }
  }

  if (letterInWord) {
    for (var j = 0; j < numBlanks; j++) {
      if (randomWord[j] === letter) {
        blanksAndSuccesses[j] = letter;
      }
    }
    console.log(blanksAndSuccesses);
  }
// doing wrong letter guess logic
  else {
    wrongGuesses.push(letter);
    numGuesses--;

  }

}

// Code thats needed finish the round
function roundComplete() {

  console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);

  document.getElementById("guesses-left").innerHTML = numGuesses;

  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");

  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

  if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
    winCounter++;
    alert("You win! Correct answer " + randomWord);
    document.getElementById("win-counter").innerHTML = winCounter;
    startGame();
  }

  else if (numGuesses === 0) {
    lossCounter++;
    alert("You lose answer was " + randomWord);
    document.getElementById("loss-counter").innerHTML = lossCounter;
    startGame();
  }

}

startGame();

document.onkeyup = function(event) {

  letterGuessed = String.fromCharCode(event.which).toLowerCase();

  checkLetters(letterGuessed);
  roundComplete();
};




}