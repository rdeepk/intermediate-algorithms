/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.

https://www.freecodecamp.com/challenges/sum-all-odd-fibonacci-numbers
*/


function sumFibs(num) {
	var fibonacci = [1];
	var a = 1, i = 1;
	var b;
	var sum = 1;
	while ( i <= num ) {
		b = i;
		fibonacci.push(i);
		i += a;
		a = b;
	}
	return fibonacci.reduce(function(pv, cv){
		return cv % 2 > 0 ? sum += cv: sum;
	});
}

sumFibs(75025);