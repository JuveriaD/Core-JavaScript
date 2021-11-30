// EXAMPLE 1
let password = 'chicken Gal';

if (password.length >= 8 && password.indexOf(' ') === -1) {
	console.log('VALID PASSWORD');
} else {
	console.log('INVALID PASSWORD');
}

// EXAMPLE 2
// Number must be between 1 and  10
let num = 1;

if (num >= 1 && num <= 10) {
	console.log('Number is between 1 and 10');
} else {
	console.log('Please guess a number between 1 and 10');
}

// Example 3
let doesDrive = true;
let age = 14;
if (doesDrive && age > 18) {
	console.log(`You can drive`);
} else {
	console.log(`You cannot drive`);
}
// output : You cannot drive

// Example 4
var a = 10;
var b = 20;
if (a == 10 && b == 20) {
	document.write('This will run if both conditions are true');
}
// output : This will run if both conditions are true
