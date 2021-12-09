// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false

/* function isValidPassword(password, username) {
	if (password.length< 8) {
		return false;
	}
	if (password.indexOf(' ') !== -1) {
		return false;
	}
	if (password.indexOf(username) !== -1) {
		return false;
	}
	return true;
	
} */
//console.log(isValidPassword("password123","my name"));//true
//console.log(isValidPassword("password 123","jhfswgsfgvfdvxcv"));//false

// function isValidPassword(password,username){
// if(password.length < 8 || password.indexOf(' ') !== -1){
// return false;
// }
// if(password.indexOf(username) !== -1){
// 	return false;
// }
// return true;

// }

function isValidPassword(password, username) {
	username = prompt('Enter username');
	password = prompt('Enter password!');
	let res = 'Invalid Password OR UserName';
	if(username == null && password == null){
		document.write(res)
	}
	if(username.indexOf(password) !== -1){
		document.write(res, " <br>")
	}
	if ( password.length < 8 || password.indexOf(' ') !== -1) {
		document.write(res);
	}
	else {
		document.write('<br>' +'UserName :' + username + '<br>' + 
		'Password :' + password);
	}
}
isValidPassword();
