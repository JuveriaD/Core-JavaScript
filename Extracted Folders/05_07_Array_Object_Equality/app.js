let nums = [ 1, 2, 3 ];
let mystery = [ 1, 2, 3 ];
let moreNums = nums;

//They 'look' the same, but refer to different arrays
nums === mystery; // false

//These two arrays reference the exact same array, so we get true:
nums === moreNums; //true

const user = {
	username      : 'CherryGarcia8',
	email         : 'garcia@gmail.com',
	notifications : [ 'message', 'alert' ]
};

//THIS WILL NOT WORK!
if (user.notifications === []) {
	console.log('NO NEW NOTIFICATIONS!');
}
// THIS VERSION DOES WORK!
if (!user.notifications.length) {
	console.log('NO NEW NOTIFICATIONS!');
}


// =====
// Example of scope identifier
// =====
const myName = 'Jim';
console.log(myName);
if (myName){
	// myName ='Joe'
	// console.log(myName);
	//Assignment to constant error

	let myName = 'Jeff';
	console.log(myName);//Jeff
}