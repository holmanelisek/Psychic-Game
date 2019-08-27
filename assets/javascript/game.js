
$(document).ready(function() {

var psychicLetter = "";
var userLetter = "";
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = "";
var letterOptions = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var letterSet = false;



document.addEventListener("keydown",function whenKeyPressed(event){
    var x = event.which || event.keyCode;
    userLetter = String.fromCharCode(x);
    if(letterSet==false){
        psychicLetter += letterOptions[Math.floor(Math.random() * letterOptions.length)];
        letterSet =true;
    }
    if(userLetter==psychicLetter){
        wins++;
        $("#win").html("Wins: " + wins);
        guessesLeft = 9;
        $("#left").html("Guesses Left: " + guessesLeft);
        guessesSoFar = "";
        $("#sofar").html("Your Guesses So Far: "+guessesSoFar);
        letterSet == false;
    } else {
        guessesLeft-1;
        if (guessesLeft==0){
            losses++;
            $("#loss").html("Losses: " + wins); 
            guessesLeft=9;
            $("#left").html("Guesses Left: " + guessesLeft);
            guessesSoFar="";
            $("#sofar").html("Your Guesses So Far: "+ guessesSoFar);
            letterSet=false;
        }else{  
            guessesSoFar = guessesSoFar.concat(userLetter);
            $("#sofar").html("Your Guesses So Far: "+ guessesSoFar);
        }
    }
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