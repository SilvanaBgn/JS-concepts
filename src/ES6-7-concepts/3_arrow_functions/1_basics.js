/*--------------------------------------*/ console.log('------ ARROW FUNCTIONS BASICS ------');
// 1: REGULAR FUNCTION
// 2: ARROW FUNCTION

/*--------------------------------------*/ console.log('--- EXAMPLE 1: regular fc vs. arrow function ---');
const sum1 = function(a, b) {
  return a+b;
}
console.log('- regular function - sum(2,3) =', sum1(2,3));

const sum2 = (a, b) => {return a+b}
console.log('- arrow function - sum(2,3) =', sum2(2,3));


///////////////////////////////////////////////
///////////////////////////////////////////////
/*--------------------------------------*/ console.log('--- EXAMPLE 2: no parentesis, no return, no brackets ---');
const whoIAm1 = function(name) {
  return `I'm ${name}`;
}
console.log('- regular function - whoIAm("Susy") =', whoIAm1('Susy'));

const whoIAm2 = name => `I'm ${name}`  // without parentesis neither return or curly brackets
console.log('- arrow function - whoIAm("Susy") =', whoIAm2('Susy'));
