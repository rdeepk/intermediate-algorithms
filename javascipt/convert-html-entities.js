/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.

https://www.freecodecamp.com/challenges/convert-html-entities
*/


function convertHTML( str ) {
return str.replace( /[&<>"']/g, function( $0 ) {
     return "&" + {"&":"amp", "<":"lt", ">":"gt", '"':"quot", "'":"apos"}[$0] + ";";
	});
}

convertHTML("Dolce & Gabbana");