/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.

https://www.freecodecamp.com/challenges/convert-html-entities
http://www.regular-expressions.info/refreplacebackref.html
*/


function convertHTML( str ) {
	var matches = {"&":"amp", "<":"lt", ">":"gt", '"':"quot", "'":"apos"};
	return str.replace( /[&<>"']/g, function( $1 ) {
     return "&" + matches[$1] + ";";
	});
}

convertHTML("Dolce & Gabbana");