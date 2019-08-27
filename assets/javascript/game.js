
$(document).ready(function() {

var psychicLetter = "";
var userLetter = "";
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = 0;
var letterOptions = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var letterSet = false;



document.addEventListener("keydown",function whenKeyPressed(event){
    var x = event.which || event.keyCode;
    userguess = String.fromCharCode(x);
    userLetter = userguess.tolowercase();
    
});






//variables: psychicLetter, userLetter, wins, losses, guessesLeft, guessesSoFar
//list of all the letters ever
//randomly select one of the letters
//on click
    //if userLetter=psychicLetter, you win! wins+1, guessesLeft reset to 9, guessesSoFar clears, pick new letter (initialize function)
    //else 
        //guessesLeft-1
        //if more than 0 guesses left 
            //add guess to gSF
        //else 
            //losses+1, initialize (clear gSF, pick new letter, gL=9)


});