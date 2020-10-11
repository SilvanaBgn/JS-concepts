/*--------------------------------------*/ console.log('------ VAR ------');
// a var depends on the scope it's declared
function printName(){
  var name = 'Silvana';
  console.log('- Inside the function, name is:',name);
}
printName();

try {
  console.log(name);
} catch(err) {
  console.log('- Outside the function, name is: Erroooor')
}


/////////////////////////////////////////////////
/////////////////////////////////////////////////
/*--------------------------------------*/ console.log('------ LET y CONST: inside if statement ------');
// let and const
// they were introduced with ECMAScript6. They have effect into blcok statements (if, for)

if (true) { // this 'if' conditional block doesn't create a scope
    var address = '9 de Julio 1234'; //global scope
    let likes = 'Coding'; //local scope
    const skills = 'JavaScript and PHP'; //local scope
}
console.log('- var address:', address); // logs 'Hammad'
try {
  console.log(likes); // Uncaught ReferenceError: skills is not defined
} catch(err) {
  console.log('- let likes: Erroooor')
}
try {
  console.log(skills); // Uncaught ReferenceError: skills is not defined
} catch(err) {
  console.log('- const skills: Erroooor')
}
