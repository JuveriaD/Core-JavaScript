// ====
// Syntax 
// ====
// for (variable in object) {
//    statement
// }


// ======
// Example
// ======
const jeopardyWinnings ={
    regularPlay : 2522700,
    watsonChallenge :300000,
    tournamentOfChampions: 500000,
    battleOfTheDecades :100000
};
console.log(jeopardyWinnings);
for (let prop in jeopardyWinnings){
    console.log(prop,jeopardyWinnings[prop])
}



// ======
// Example
// ======
let total =0;
for (let prop in jeopardyWinnings){
    total+=jeopardyWinnings[prop];
}
console.log(total);
console.log(`Ken Jennings Total Earnings: ${total}`)


// ======
// Example
// ======
// With Array - works if declared outside in variable
let arr1 =[56,35,45,12,09];
for (let num in arr1){
    console.log(arr1[num]);
}


// ======
// Example
// ======
// for..in not recommended to use with with arrays
// Does'nt really works it gives indices
for (let num in [56,35,45,12,09]){
    console.log(num);
}