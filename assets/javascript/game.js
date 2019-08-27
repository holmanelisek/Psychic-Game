
$(document).ready(function() {

//establish variables
var psychicLetter = "";
var userLetter = "";
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = "";
var letterOptions = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var letterSet = false;


//when a key is pressed
document.addEventListener("keydown",function whenKeyPressed(event){
    //convert the event/character code to a string and store as variable userLetter
    var x = event.which || event.keyCode;
    userLetter = String.fromCharCode(x);
    //if you haven't already selected the psychicLetter, do, via math.random and the letter options array. Confirm that letterSet
    if(letterSet==false){
        psychicLetter += letterOptions[Math.floor(Math.random() * letterOptions.length)];
        letterSet =true;
    }
    //if the user and psychic letters match, you win! +1 win and the game resets
    if(userLetter==psychicLetter){
        wins++;
        $("#win").html("Wins: " + wins);
        guessesLeft = 9;
        $("#left").html("Guesses Left: " + guessesLeft);
        guessesSoFar = "";
        $("#sofar").html("Your Guesses So Far: "+guessesSoFar);
        letterSet == false;
    } 
    //otherwise(if the guess was wrong), you're down a guess!
    else {
        guessesLeft-1;
        //if you don't have any more guesses left, you lose! +1 loss and the game resets
        if (guessesLeft==0){
            losses++;
            $("#loss").html("Losses: " + wins); 
            guessesLeft=9;
            $("#left").html("Guesses Left: " + guessesLeft);
            guessesSoFar="";
            $("#sofar").html("Your Guesses So Far: "+ guessesSoFar);
            letterSet=false;
        }
        //otherwise, you can try again. Display guesses you've made so far
        else{  
            guessesSoFar = guessesSoFar.concat(userLetter);
            $("#sofar").html("Your Guesses So Far: "+ guessesSoFar);
        }
    }
});
});