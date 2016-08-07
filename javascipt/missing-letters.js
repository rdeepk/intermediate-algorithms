/*
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.

fearNotLetter("abce") should return "d".
fearNotLetter("abcdefghjklmno") should return "i".

https://www.freecodecamp.com/challenges/missing-letters
*/

function fearNotLetter( str ) {
	var unicode = str[0].charCodeAt();
	var missing;
	for( i = 0; i < str.length; i++ ) {
		if( str[i].charCodeAt() == unicode ) {
			unicode++;
		} else {
			missing = String.fromCharCode(unicode);
		}
	}
	return missing;
}

fearNotLetter("yz");
