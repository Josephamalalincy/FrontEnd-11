//create secret number
var secretNumber=4;

//ask for game
var stringGuess = prompt("guess a number");
var guess = Number(stringGuess);

//check if guess is right
if(guess === secretNumber) {
	alert("you got it right");
}
//check if guess is higher
else if(guess > secretNumber) {
	alert("too high. guess again");
}
else {
	alert("too Low. guess again");
}