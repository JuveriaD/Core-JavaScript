// ====
// EXAMPLE
// ====
function square(num) {
	console.log (num * num);
	
}
square(2,3)


// ====
// EXAMPLE
// ====
function sum(x, y) {
	console.log(x + y);
}
sum(10,20)


// ====
// EXAMPLE
// ====
function divide(a, b) {
	console.log(a / b);
}
divide(10,5)//10 DIVIDED BY 5 = 2


// ====
// EXAMPLE
// ====
function div(a, b) {
	// order matters
	console.log(b / a);
}
div(10,5)//5 DIVIDED BY 10 = 0.5 



// ====
// EXAMPLE
// ====
function addi(q,p){
document.write("Q:" + q + " P:" + p + " C:" + arguments[2])
}
addi(12,2,4)