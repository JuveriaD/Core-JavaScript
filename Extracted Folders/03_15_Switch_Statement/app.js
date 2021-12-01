// It is case-sensitive

// syntax :
// switch(expression){

// 	case expression 1:
// 		block of statement 1;
// 		break;
// 	case expression 2:
// 		block of statement 2;
// 		break;
// 	case expression 3:
// 		block of statement 3;
// 		break;
// 	.
// 	.
// 	.
// 	default:
// 		default block of instructions;
// }

// EXAMPLE 1
let day = 7;

// USING TRADITIONAL CONDITIONAL....
// if (day === 1) {
// 	console.log('MONDAY');
// }
// else if (day === 2) {
// 	console.log('TUESDAY');
// }
// else if (day === 3) {
// 	console.log('WEDNESDAY');
// }
// else if (day === 4) {
// 	console.log('THURSDAY');
// }
// else if (day === 5) {
// 	console.log('FRIDAY');
// }
// else if (day === 6) {
// 	console.log('SATURDAY');
// }
// else if (day === 7) {
// 	console.log('SUNDAY');
// }
// else {
// 	console.log('INVALID DAY');
// }

// USING A SWITCH INSTEAD...
switch (day) {
	case 1:
		console.log('MONDAY');
		break;
	case 2:
		console.log('TUESDAY');
		break;
	case 3:
		console.log('WEDNESDAY');
		break;
	case 4:
		console.log('THURSDAY');
		break;
	case 5:
		console.log('FRIDAY');
		break;
	case 6:
		console.log('SATURDAY');
		break;
	case 7:
		console.log('SUNDAY');
		break;
	default:
		console.log('INVALID DAY');
}

// EXAMPLE 2
let emoji = 'heart';

// Switch with overlapping cases...
switch (emoji) {
	case 'sad face':
	case 'happy face':
		console.log('yellow');
		break;
	case 'eggplant':
		console.log('purple');
		break;
	case 'heart':
	case 'lips':
		console.log('red');
		break;
}

// EXAMPLE 3
let myAge = 18;
switch (myAge) {
	case 18:
		console.log("You are teenager!");
		break;
	case 25:
		console.log("You are Adult!");
		break;
	case 58:
		console.log("You are too old!");
		break;
	default:
		console.log("What is your age?");
}
