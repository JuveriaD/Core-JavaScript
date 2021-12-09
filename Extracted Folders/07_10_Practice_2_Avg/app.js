// Write a function to find the average value in an array of numbers
// average([0,50]) //25
//avg([75,76,80,95,100]) //85.2
function average(arr){
    let total=0;
//loop over each num
for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    //add them together
    total += num;
}
//divide by length of arr
let result = total/arr.length;
return result;
}