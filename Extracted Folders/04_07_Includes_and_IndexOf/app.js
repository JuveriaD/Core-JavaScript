let ingredients = [
	'water',
	'corn starch',
	'flour',
	'cheese',
	'brown sugar',
	'shrimp',
	'eel',
	'butter'
];

//includes returns true or false
if (ingredients.includes('flour')) {
	console.log('I AM GLUTEN FREE, I CANNOT EAT THAT!');
}

//indexOf returns an index (or -1 if not found)
if (ingredients.indexOf('shrimp') !== -1) {
	console.log('Sorry, I hate shrimp.');
}


// ====
// Example 2
// ====
let ingredients = [
	'water',
	'juice',
	'flour',
	'cheese',
	'butter'
];
console.log(ingredients.includes('fish'))
// False

//indexOf (returns index number ,position number)
console.log(ingredients.indexOf('cheese')) 
// 3