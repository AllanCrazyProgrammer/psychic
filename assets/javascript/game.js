var myGuess;
var guessesSoFar = [];
var winsCounter = 0;
var lossCounter = 0;
var livesCounter = 10;
var possibleLetter = "qwertyuiopasdfghjklñzxcvbnm";
var randLetter = possibleLetter.charAt(Math.floor(Math.random() * possibleLetter.length));

document.onkeyup = function () {
    myGuess = (event.key);
    guessesSoFar.push(event.key);

    if (myGuess === randLetter) {
        randLetter = possibleLetter.charAt(Math.floor(Math.random() * possibleLetter.length));
        winsCounter++;
        livesCounter = 10;
        guessesSoFar = [];
        console.log(randLetter);

    } else {
        livesCounter--;

    }
    if (livesCounter === 0) {
        alert("game over");
        lossCounter++;
        livesCounter = 10;
        winsCounter = 0;
        guessesSoFar = [];

    }

    document.getElementById("guesses").innerHTML = ("Guesses so far: " + guessesSoFar);
    document.getElementById("wins").innerHTML = ("Wins: " + winsCounter);
    document.getElementById("lives").innerHTML = ("Guesses left: " + livesCounter);
    document.getElementById("loses").innerHTML = ("Loses: " + lossCounter);
}
