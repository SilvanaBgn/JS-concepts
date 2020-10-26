/*--------------------------------------*/ console.log('------ Default value (ES6) ------');
// applies the default value when it's undefined
// it's only valid for undefined, not other falsy values. 
function multiply(a, b = 1) {
  return a * b 
}

console.log('- Should return 3*1 =', multiply(3));