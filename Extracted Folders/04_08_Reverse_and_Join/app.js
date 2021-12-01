// =====
// Example 1:
// =====

let letters = [ 'T', 'C', 'E', 'P', 'S', 'E', 'R' ];
console.log(letters);

//Remember that reverse() mutates the original array.
//It reverses IN PLACE rather than making a copy
let song = letters.reverse().join('.');
//"R.E.S.P.E.C.T"
console.log(song);



// =====
// Example 2:
// =====

// reverse 
let alphabets =['D','E','S','R','E','V','E','R'];
console.log(alphabets.reverse()); 
//['R','E','V','E','R','S','E','D']

// join (always returns a string)
console.log(alphabets.join(' '));
 //"R E V E R S E D"

console.log(alphabets.join('-'));
 //"R-E-V-E-R-S-E-D"

console.log(alphabets.join(' | '));
 //"R | E | V | E | R | S | E | D"