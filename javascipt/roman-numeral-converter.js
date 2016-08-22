/*
Convert the given number into a roman numeral.

convertToRoman(44) should return "XLIV".

https://www.freecodecamp.com/challenges/roman-numeral-converter
*/

function convertToRoman(number) {
	
  var keys = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var romans = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  var result = '';
	
  for ( var i = 0; i < keys.length; i++ ) {
	while( keys[ i ] <= number ) {
		result += romans[ i ];
		number -= keys[ i ];
	}
}

  return result;
}

convertToRoman(36);