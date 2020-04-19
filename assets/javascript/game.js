// var for choices
let computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// setting's at zero
let wins = 0;
let losses = 0;
let guessesLeft = 9;
let letterUser = [];
let eachofLetters = null;



let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

function countGuessesLeft() {
	document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
}

function farUserGuesses() {
	document.querySelector("#letter").innerHTML = "Your Guesses so far: " + letterUser.join(' ');
}

countGuessesLeft();

let restart = function () {
	guessesLeft = 9;
	letterUser = [];
	let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

// function after key press
document.onkeyup = function (event) {
	guessesLeft--;

	let userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	letterUser.push(userGuess);
	countGuessesLeft();
	farUserGuesses();

	if (userGuess === computerGuess) {
		wins++;
		document.querySelector("#wins").innerHTML = "Wins: " + wins;
		restart();
	}
	else if (guessesLeft === 0) {
		losses++;
		document.querySelector("#lose").innerHTML = "Loses: " + losses;
		restart();
	}
};
