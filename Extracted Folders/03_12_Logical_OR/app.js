// EXAMPLE 1
let age = 20;

if (age < 6 || age >= 65) {
	console.log('YOU GET IN FOR FREE');
}
else {
	console.log('YOU MUST PAYYYY!');
}

// EXAMPLE 2
// WE CAN USE MULTIPLE OR's:
let color = 'violet';
if (color === 'purple' || color === 'lilac' || color === 'violet') {
	console.log('GREAT CHOICE!');
}

// EXAMPLE 3
const doesDrive= false;
let DriverAge = 54;
if (doesDrive || DriverAge>18) {
	console.log(`You can drive`);

} else {
	console.log(`You cannot drive`);
}


// Example 4
// (use 3 conditions with && and || operator)
let myName = `Juveria Dalvi`;
let myShortName = `DJ`;
//* If Atlest ONE Condition is True this console will work fine
if (myName === `Juveria` || myShortName === `JD`) {
	console.log(`Your Name and nickname are unique`);
}
//* If Both Condition is True this console will work fine
else if (myName === `Juveria Dalvi` && myShortName === `DJ`) {
	console.log(`Hii DJ, your name and nickname matches `);
}
//* IF && and || conditions does not matches
else {
	console.log(`Please Enter your Name:  `);
}