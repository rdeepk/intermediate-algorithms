/*
Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.
Input strings are guaranteed to be English words in all lowercase.

translatePigLatin("california") should return "aliforniacay".

https://www.freecodecamp.com/challenges/pig-latin
*/


function translatePigLatin(str) {
	var position = str.indexOf(str.match(/[aeiou]/gi)[0]);
	if(position === 0) {
	return str+= 'way';
	} else {
	return str.substr(position) + str.substr(0, position) + 'ay';
	}
}

translatePigLatin("consonant");