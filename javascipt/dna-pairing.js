/* 

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]

https://www.freecodecamp.com/challenges/dna-pairing

*/


function pairElement( str ) {
	var basePairs = {T:"A", A:"T", G:"C", C:"G"};
	matched = str.match( /[atcg]/gi );
	var pairs = [];
	matched.forEach( function( elem, ind ) {
		pairs.push([ elem, basePairs[ elem ] ]);
	});
  return pairs;
}

pairElement("CTCTA");


