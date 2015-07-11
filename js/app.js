$(document).ready( function() {
	
	function userInputPrompt() {
		initialStringInput = prompt("Please type in a number");
	}

	function userInputParse(userInputPrompt) {
		userInput = parseInt(initialStringInput);
	}

	//Display Numbers Handler
	$("#number-display").html(numberGenerator);

	function numberGenerator() {
		for (n = 1; n <= 100; n++) {

			if (n % 3 == 0 && n % 5 == 0) {
			$("#number-display").append("FizzBuzz" + "<br />");
			} else if (n % 5 == 0 && n % 3 != 0) {
				$("#number-display").append("Buzz" + "<br />");
			} else if (n % 3 == 0 && n % 5 != 0) {
				$("#number-display").append("Fizz" + "<br />");
			} else {
			$("#number-display").append(n + "<br />");
			}
		}
	}
});