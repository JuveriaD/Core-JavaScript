const palette = {
	red    : '#eb4d4b',
	yellow : '#f9ca24',
	blue   : '#30336b'
};
console.log(palette);


//Objects & Arrays are reference types
const palette2 = palette;
console.log(palette2);

//If we change one value...
console.log(palette2.green = '#ebf876');

//Both variables reflect that change...
console.log('palette =',palette.green); //"#ebf876"
console.log('palette2 =',palette2.green); //"#ebf876"
