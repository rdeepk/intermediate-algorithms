/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].

https://www.freecodecamp.com/challenges/diff-two-arrays
*/

function diffArray(arr1, arr2) {
 var newArr = [];
	return arr1.filter( element => arr2.indexOf(element) === -1)
	.concat(arr2.filter(element => arr1.indexOf(element) === -1));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);