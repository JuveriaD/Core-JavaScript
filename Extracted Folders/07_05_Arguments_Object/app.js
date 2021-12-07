// ===
// EXAMPLE
// ====
function display(name1, name2) {
	// document.write(name1);
	// document.write(name2);

	// using arguments Object to maintain order of indices
	document.write(arguments[1] + ' ' + arguments[0] + ' ' + arguments[2] + '<br>');
}

// --------    0  ----   1   --- 2(undefined)
display('GeekyShows', 'YouTube');

// ===
// EXAMPLE
// ====
function disp() {
	document.write('Number of Arguments passed with Object : ');
	document.write(arguments.length);
}
disp(2, 4, 2, 'dsafvsdnv');



// ===
// EXAMPLE
// ====
function arg2() {
	for (let i = 0; i < arguments.length; i++) {
		const element = arguments[i];
		document.write('<br> printing Arguments : ' + element );
	}
    document.write("<br>")
}
arg2(82,true, 2.5, 'Arg2');



// ===
// EXAMPLE
// ====
function arg3(num1,num2,num3) {
    // will print the function()
	document.write(arguments.callee);
}
arg3("23","JavaScript");