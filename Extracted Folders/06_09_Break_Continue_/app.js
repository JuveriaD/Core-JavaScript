document.write('FOR LOOP <br>')
// FOR LOOP with break; & Continue;
// ====
// EXAMPLE 1
// ====
for (let i = 0; i <= 10; i++) {
	if(i==8){
		break; //stop loop
	}
	document.write(i,'<br>')
}

// ====
// EXAMPLE 2
// ====
document.write('<br>')


for (let i = 0; i <= 10; i++) {
	if(i==8){
		continue; //skip loop
	}
	document.write(i,'<br>')
}

// *********************

document.write('<br> WHILE LOOP')
// WHILE LOOP with break; & Continue;
// ====
// EXAMPLE 1
// ====
const target = Math.floor(Math.random() * 10);
let guess;
//ANOTHER APPROACH TO THE PREVIOUS GUESSING 'GAME'
while (true) {
	if (target === guess) break; //Break stops the loop in its tracks
	console.log(`Target: ${target} Guess: ${guess}`);
	guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log(`CONGRATS YOU WIN!!`);

// ====
// EXAMPLE 2
// ====
document.write('<br>')

var i=0;
while(true){
	if(i===3) break;
	document.write(i,"<br>");
	i++;
}

// *********************


// DO..WHILE LOOP with break; & Continue;
// ====
// EXAMPLE 1
// ====

document.write('<br><br>DO..WHILE LOOP<br>')

var i=0;
do{
	if(i==7){
		break;
	}
	document.write(i,"<br>");
	i++;
	
}while(i<10);