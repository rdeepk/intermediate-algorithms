/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap"
*/

function spinalCase( str ) {
	return str.replace( /[_\s]/g, "-" )
					.replace( /([a-z])([A-Z])/g, "$1-$2" )
					.toLowerCase();
}

spinalCase( "This Is Spinal Tap" );