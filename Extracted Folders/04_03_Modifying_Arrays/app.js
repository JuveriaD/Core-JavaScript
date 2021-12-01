let shoppingList = [ 'Cheddar Cheese', '2% Milk' ];
document.write(shoppingList,'<br>');
console.log(shoppingList)

//To change 2% Milk to Whole Milk
shoppingList[1] = 'Whole Milk';
console.log(shoppingList)
document.write(shoppingList,'<br>');

//To add Ice Cream to the end
//Only works if array is 2 items long...
shoppingList[2] = 'Ice Cream';
document.write(shoppingList,'<br>');
console.log(shoppingList)

//To make sure you add to the end, no matter the length of the array:
shoppingList[shoppingList.length] = 'Tomatoes';
document.write(shoppingList,'<br>');
console.log(shoppingList)

shoppingList[shoppingList.length] = 'Potatoes';
document.write(shoppingList);
console.log(shoppingList)