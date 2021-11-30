//We can nest conditionals!
let password = 'hello  kitty';

if (password.length >= 6) {
	if (password.indexOf(' ') === -1) {
		console.log('Valid Password!');
	} else {
		console.log('Password is long enough, but cannot contain spaces');
	}
} else {
	console.log('Password must be longer!');
}

// ======
// EXAMPLE - 2
// =======
let foods = 'vegetable';
if (foods != undefined) {
	if (foods === 'vegetable') {
		console.log('Tomato', 'Potato', 'Onion');
	} 
} else {
	console.log('No Foods');
}
