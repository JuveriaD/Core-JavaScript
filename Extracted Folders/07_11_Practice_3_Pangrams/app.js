// A pangram is a sentence that contains every letter of the alphabet, like:
//"The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.  Make sure you ignore string casing!

// isPangram('The five boxing wizards jump quickly') //true
// isPangram('The five boxing wizards jump quick') //false

function isPangram(phrase) {
	let charArray = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z'
	];

	let lowerphrase = phrase.toLowerCase();
   let Alphabet = charArray.length;
	for (var i = 0; i < Alphabet; i++) {
		if (lowerphrase.indexOf(charArray[i])=== -1) {
			return false;
		}
	}
    return true;


		// let lowerphrase = phrase.toLowerCase();
		// for (var i = 0, Alphabet = charArray.length; i < Alphabet; i++) {
			
		//     if (!lowerphrase.includes(charArray[i])) {
		// 		return false;
		// 	}
		// }
		// return true;


	// 	let lowerphrase = phrase.toLowerCase();
	// 	for (var i = 0; i < charArray.length; i++) {
	// 		if (lowerphrase.indexOf(charArray[i])=== -1) {
	// 			return false;
	// 		}
	// 	}
	//     return true;



	// ALL OF ABOVE COMMENTED CODE WORKS
}
