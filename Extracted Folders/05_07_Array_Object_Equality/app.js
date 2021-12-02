let nums = [ 1, 2, 3 ];
let mystery = [ 1, 2, 3 ];
let moreNums = nums;
console.log('nums =',nums);
console.log('mystery =', mystery);
console.log('moreNums =',moreNums);

//They 'look' the same, but refer to different arrays
console.log('nums === mystery is ',nums === mystery); // false

//These two arrays reference the exact same array, so we get true:
console.log('nums === moreNums is',nums === moreNums); //true

const user = {
	username      : 'CherryGarcia8',
	email         : 'garcia@gmail.com',
	notifications : [ 'message', 'alert' ]
};
console.log(user);

// THIS VERSION DOES WORK!
// to check if notifications is empty
if (!user.notifications.length) {
	console.log('NO NEW NOTIFICATIONS!');
}

// THIS VERSION DOES WORK the same as shown above!
if (user.notifications.length === 0) {
	console.log('NO NEW NOTIFICATIONS!');
}

//THIS WILL NOT WORK!
if (user.notifications === []) {
	console.log('NO NEW NOTIFICATIONS!');
}


