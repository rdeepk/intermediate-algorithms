/*
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
The lowest number will not always come first.

sumAll([1, 4]) should return 10.

https://www.freecodecamp.com/challenges/sum-all-numbers-in-a-range
*/

function sumAll( arr ) {
  arr = arr.sort( function( a, b ) {
    return a - b;
  });
  var sum = 0;
  for ( i = arr[0]; i <= arr[arr.length-1]; i++ ) {
	sum += i;
  }
 return sum;
}

sumAll([1, 4]);