
var randLetter;
var myGuess;
var guessesSoFar = [];
var winsCounter = 0;



function randomLetter() {

    var possibleLetter = "qwertyuiopasdfghjklñzxcvbnm";
    randLetter = possibleLetter.charAt(Math.floor(Math.random() * possibleLetter.length));
    return randLetter;
}

document.onkeyup = function () {
    myGuess = (event.key);
    guessesSoFar.push(event.key);
    document.getElementById("guesses").innerHTML = ("Guesses so far: " + guessesSoFar);
    if (myGuess === randLetter){
        winsCounter++;
        document.getElementById("wins").innerHTML = ("Wins: " + winsCounter);
        randomLetter();
        console.log(randLetter);
    }
}








randomLetter();



console.log(randLetter);

