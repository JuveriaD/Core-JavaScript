let topSongs = [
	'First Time Ever I Saw Your Face',
	'God Only Knows',
	'A Day In The Life',
	'Life On Mars'
];
document.write(topSongs,'<br>')
console.log(topSongs);

// To add to the end of an array:
topSongs.push('Fortunate Son');
document.write(topSongs,'<br>')
console.log(topSongs);

topSongs.push('Landslide');
document.write(topSongs,'<br>')
console.log(topSongs);

topSongs.push(12324166);
document.write(topSongs,'<br>')
console.log(topSongs);


// To remove the last item
topSongs.pop(); //12324166
document.write(topSongs)
console.log(topSongs);
