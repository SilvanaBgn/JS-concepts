/*--------------------------------------*/ console.log('------ SHADOWING ------');
// Variable Shadowing occurs when a variable of an inner scope is defined with the same name as a variable in the outer scope. 
var a = 5;
console.log('- var a (global) =', a);

function myFunc() {
  var a = 50;
console.log('- var a (local) =', a);
}
myFunc();