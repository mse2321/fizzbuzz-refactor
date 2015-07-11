$(document).ready( function() {
	
	//User Input Prompt and parsing for Integer
	var userInput = parseInt(prompt("Please type in a number to count up to, not zero."), 10);

	//Display Numbers Handler
	$("#number-display").html(numberGenerator);

	function numberGenerator() {
		for (n = 1; n <= userInput; n++) {

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