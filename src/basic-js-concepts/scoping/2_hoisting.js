/* Hoisting is a JS mechanism where variables and function declarations are moved to 
the top of their scope before code executes. This is because of the way JS builds code.*/

/*--------------------------------------*/ console.log('------ HOISTING WITH var ------');
x = 5+6; // Assign x
console.log('- var x =',x);
var x; // Declare x

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/*--------------------------------------*/ console.log('------ HOISTING WITH let/const ------');
// It'll throw an Error. The let variable is in a "temporal dead zone", cause it's hoisted, 
// but it can only be used when it's actually declared
try {
  carName = "Volvo";
  console.log(carname);
  let carName;
} catch(err) {
  console.log('- let carName -> It throws an Error:',err)
}