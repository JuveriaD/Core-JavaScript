alert('I AM A DIFFERENT SCRIPT!');

// ----- JavaScript Popup Boxes -----

// JavaScript has three kind of popup boxes:
// Alert box, Confirm box, and Prompt box.
alert('Visit this site with caution');
// return boolean true/false

//  => A confirm box is often used if you want the user to verify or accept something.
const deleteConfirmation = confirm('are u sure you want to delete this items?');
// Prompt Box
const user = prompt('please enter your name?');
console.log(`user: ${user}`, typeof (user));

var a = prompt('Enter your name', 'NAME');
document.write(a);
