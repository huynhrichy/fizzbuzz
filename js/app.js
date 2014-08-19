$(document).ready(function() {
	$('form input[name="integer"').keydown(function(event) {
		if (event.which == 13) {
			event.preventDefault();
			processInput();
		}
	});

	$('form input[value="FizzBuzz!"').click(function() {
		processInput();
	});
});

function isPositiveInteger(number) {
	return number === +number && number === (number|0) && number >= 0/* && number % 1 != 0*/;
	//return number === +number && number === (number|0) && number >= 0 && number != Math.floor(number);
	//return number === +number && number === (number|0) && number >= 0 && number.indexOf('.') === -1;
	//return number === +number && number === (number|0) && number >= 0 && Number.isInteger(number);
}

function processInput() {
	$('#result').text('');
	var integer = parseInt($('form input[name="integer"').val());

	if (isPositiveInteger(integer)) {
		if (integer === 0) {
			$('#result').text(integer);
		} else {
			$('#result').text(fizzBuzz(integer));
		}
	} else {
		alert('Enter a valid positive integer.');
		$('form input[name="integer"').val('');
	}
}

function fizzBuzz(integer) {
	var result = "";

	for (var i = 1; i <= integer; i++) {
		if (i % 3 == 0 && i % 5 == 0) {
			result += 'FizzBuzz ';
		} else if (i % 3 == 0) {
			result += 'Fizz ';
		} else if (i % 5 == 0) {
			result += 'Buzz ';
		} else {
			result += i + ' ';
		}
	}

	return result;
}