// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object
function getCard() {
	let cardValue = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ];
	let cardSuit = [ 'clubs', 'spades', 'hearts', 'diamonds' ];
	let myval = cardValue.length;
	let cardval = Math.floor(Math.random() * myval);
	console.log(cardval);
}
getCard();
