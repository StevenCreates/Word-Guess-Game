// Putting onload function to make sure nothings ran until css/html are loaded

window.onload = function () {

// Adding ID's to apply to html

playerGuessed = document.getElementById('user-guess');
randoAnimals = document.getElementById('animal')


// Declaring Animal Guesses
    var Animals = [
        "Penguin",
        "Sabertooth",
        "Zebra",
        "Octopus",
        "Elephant"
    ];


// Creating Random Animal Generator
randoAnimals = Animals[Math.floor(Math.random() * Animals.length)];
console.log(randoAnimals);


// Change image background and style based off of randoAnimals
function animalClass (){
    if (randoAnimals === "Penguin"){
        document.getElementById('animal').className = "penguin";
    }
}
function animalClass (){
    if (randoAnimals === "Sabertooth"){
        document.getElementById('animal').className = "sabertooth";
    } 
}
function animalClass (){
    if (randoAnimals === "Zebra"){
        document.getElementById('animal').className = "zebra";
    }
}
function animalClass (){
    if (randoAnimals === "Octopus"){
        document.getElementById('animal').className = "octopus";
    }
}
function animalClass (){
    if (randoAnimals === "Elephant"){
        document.getElementById('animal').className = "elephant";
    }
}
animalClass()

// Declaring letters
pressedLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];

// Creating clicking function to capture users guesses

    document.onkeyup = function(event) {
        var playerGuessed = event.key;
        playerGuessed.toLowerCase();
        console.log(playerGuessed);
    }

// Putting User Guess into correct or guessed



// Alert win or lose

// Keeping Track of Wins or Losses

    



// Closing onload } to help me remember where the bottom is
}
