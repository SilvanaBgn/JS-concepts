


/*--------------------------------------*/ console.log('------ OBJECT LITERALS (ES5): define an object literal ------');
// An object literal is a list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({}).

var sales = 'Toyota';
function carTypes(name) {
  if (name === 'Honda') {
    return name;
  } else {
    return "Sorry, we don't sell " + name + ".";
  }
}

var car = { 
  myCar: 'Saturn', 
  getCar: carTypes('Honda'), 
  special: sales 
};
console.log('- We define car = { myCar: "Saturn", getCar: carTypes("Honda"), special: sales };');
console.log('- car =', car);


//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
/*--------------------------------------*/ console.log('------ OBJECT LITERALS (ES6): Shorthand attributes  ------');
// foo: foo assignments
const b = 1,
      c = 2,
      d = 3;

const a = {b, c, d};

console.log('- We define a = {b, c, d};')
console.log('- a =', a);


//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
/*--------------------------------------*/ console.log('------ OBJECT LITERALS (ES6): Name properties with expressions  ------');
//Defining name properties with expressions
const obj = {
    // Computed (dynamic) property names
    [ 'prop_' + (() => 42)() ]: 42
};

console.log('- obj =', obj);
