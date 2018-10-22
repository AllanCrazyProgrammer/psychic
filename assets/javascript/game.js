
var randLetter;
var myLetter;

function randomLetter(){
    var possibleLetter = "qwertyuiopasdfghjklñzxcvbnm";
    randLetter = possibleLetter.charAt(Math.floor(Math.random()*possibleLetter.length));
    return randLetter;
}

document.onkeyup = function(){
    myLetter = event.key;
    return myLetter;
}


randomLetter();

console.log(randLetter);

