/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].

https://www.freecodecamp.com/challenges/sorted-union
*/


function uniteUnique( arr ) {
	var args = [].slice.call( arguments );;
	 args.reduce( function( prevElem, currentVal ) {
			currentVal.filter( function( val ){
			if( arr.indexOf( val ) == -1 ) {
				arr.push( val );
			}
		});
	});
  return arr;
}

uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
