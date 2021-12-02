// 3 pieces to a for loop:
// 1 - Variable declaration (Initialization)
// 2 - The condition (conditon)
// 3 - Update the loop variable(Increment or Decrement)

// STEP 1: 'let i = 1' - start i at 1
// STEP 2: 'i <= 10' - run the loop as long as i <= 10
// STEP 3: 'i++' - add 1 to i each time through
for (let i = 1; i <= 10; i++) {
	console.log('HELLO:', i);
}

// Counting by 3's: [i= i+3] or [i+=3]
for (let i = 1; i <= 10; i += 3) {
	console.log('HELLO:', i);
}

// Printing first 20 perfect squares:
for (let num = 1; num <= 20; num++) {
	console.log(`${num}x${num} = ${num * num}`);
}

// Counting DOWN from 200 by intervals of 25:
for (let i = 200; i >= 0; i -= 25) {
	console.log(i);
}
console.log('AFTER THE LOOP!');

// =====
// EXAMPLE
// =====
for (let i = 50; i >=0; i-=10) {
	console.log(i);
}