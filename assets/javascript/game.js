alert("Press enter to start the game.")

var answers = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var guessesleft = 10;
var userchoice = [];

document.onkeyup = function(event) {

	var userguess = event.key;

	var computerguess = answers[Math.floor(Math.random() * answers.length)];	
		
	console.log(computerguess);
	
		if (userguess == answers) {
			userchoice.push(userguess);
		}
		if (userchoice.indexOf(userguess) < 0 && answers.indexOf(userguess) >= 0) {
			userchoice[userchoice.length] = userguess;
			guessesleft--;
		}
		if (userguess == computerguess) {
			wins++;
			alert("You guessed correctly!");
		}
		if (guessesleft == 0) {
			losses++;
			alert("Please try again.");
		}
		if (userguess == computerguess || guessesleft == 0) {
			guessesleft = 10;
			userchoice = []
		}

		var html =
		"<h1>The Psychic Game</h1>" +
		"<p>Guess what letter I'm thinking of</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessesleft + "</p>"+
        "<p>Your guesses so far: " + userchoice + "</p>"

        document.querySelector("#game").innerHTML = html
    };
   

	


