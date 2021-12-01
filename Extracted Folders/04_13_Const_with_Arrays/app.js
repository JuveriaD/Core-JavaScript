// Const variable's cannot change by reassigning it!! but with Arrays we can change it with Methods of array

// =====
// Example 1
// =====
 const myPet=["Cat",'Dog'];
// myPet = ["Hen"];
// console.log(myPet);
// get an error of assignment to const variable

// Using Methods to mutate array
myPet.push('Sparrow')
console.log(myPet);

myPet[0]='Rabbit';
console.log(myPet);

myPet.unshift('Peacock')
console.log(myPet);