let people = [ 'Mrs. Robsinson', 'Angie', 'Jolene', 'Maggie May', 'Roxanne' ];
document.write(people,'<br><br>')

people.sort();
document.write(people,'<br><br>')
// ["Angie", "Jolene", "Maggie May", "Mrs. Robsinson", "Roxanne"]

let nums = [ 34, 10, 100000, 67, 99 ];
document.write(nums,'<br><br>')

nums.sort();
document.write(nums,'<br>')
//[10, 100000, 34, 67, 99]

//Sorts by converting values to strings and comparing their UTF-16 character codes.

//We will learn how to change this behavior later on!
