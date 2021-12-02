const palette = {
	red    : '#eb4d4b',
	yellow : '#f9ca24',
	blue   : '#30336b'
};
console.log(palette);

//DOT NOTATION
console.log(palette.red); //'#eb4d4b'

//SQUARE BRACKET NOTATION
console.log(palette['yellow']); //'#f9ca24'

//With square brackets, we can also use dynamic key names:

let mysteryColor = 'blue';
console.log(mysteryColor);

console.log(palette[mysteryColor]); //'#30336b'



// =====
// Example of scope identifier
// =====

// global scope variable myName
const myName = 'Jim';
console.log(myName);
if (myName){
	// myName ='Joe'
	// console.log(myName);
	//Assignment to constant error
	
	// local scope variable myName
	let myName = 'Jeff';
	console.log(myName);//Jeff
}