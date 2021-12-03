// 1 - Nested for loop 

// EXAMPLE 1
for (let i = 1; i <= 10; i++) {
	console.log('OUTER nested FOR LOOP:', i);
	for (let j = 10; j >= 0; j -= 2) {
		console.log('  INNER FOR LOOP', j);
	}
}


// EXAMPLE 2
// Sum all elements in our 2048 board
const gameBoard = [
	[ 4, 32, 8, 4 ],
	[ 64, 8, 32, 2 ],
	[ 8, 32, 16, 4 ],
	[ 2, 8, 4, 2 ]
];
console.log(gameBoard);

let totalScore = 0;
//outer loop iterates through the rows
for (let i = 0; i < gameBoard.length; i++) {
	let row = gameBoard[i];
	//inner loop iterates over each cell in a given row
	for (let j = 0; j < row.length; j++) {
		totalScore += row[j];
	}
}
console.log(`Sum of 2048 board = ${totalScore}`);


// 2 - Nested while loop
var i =0;
while(i<3){
	document.write('OUTER nested WHILE LOOP: ',i,"<br>");
	i++;
	var j =0;
	while(j<=5){
		document.write('Inner while loop ',j,'<br>');
		j++;
	}
}



// 3 - Nested do..while loop

var i=0;
document.write('<br><br>')
do{
	document.write('OUTER nested DO.. WHILE LOOP: ',i,"<br>");
	i++;
	var j=0;
	do{
		document.write('Inner while loop ',j,'<br>');
		j++;
	}while(j<3);
}while(i<=5);