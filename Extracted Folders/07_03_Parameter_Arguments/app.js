// ====
// Syntax
// ====
// DEFINING
// function function_name (parameter1, parameter2,...){
//     block_of_statements;
// }
// CALLING
// function_name(arg1,arg2);

// =====
// Example:
// =====
function Greetings(myName,mydate,anyNum) {
	document.write(myName,' ',mydate,' - ',anyNum,"<br>" );
}
Greetings("GeekyShows", '12/05/2021',56);


// =====
// Example:
// =====
function display(name1,name2)//Parameters 
{
    document.write(name1 + " JavaScript " + name2,"<br>")
}
display("Let's learn", 30)//Arguments


// =====
// Example:
// =====
// Function with missing arguments
function add(a,b,c) {
    document.write("A:" + a ,"<br>"+" B:" + b ,"<br>"+" C:" + c);
}
add(2,5)//third Arguments missing