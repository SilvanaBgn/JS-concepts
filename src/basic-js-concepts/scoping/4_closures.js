/* A Closure is created when an inner function tries to access the scope chain of its outer
function meaning the variables outside of the immediate lexical scope. Closures contain 
their own scope chain, the scope chain of their parents and the global scope.*/

// In other words, a closure gives you access to an outer function’s scope from an inner function.

/*--------------------------------------*/ console.log('------ CLOSURE example 1 ------');
function greet() {
    name = 'Silvana';
    return function () {
        console.log('Hi ' + name);
    }
}

// the returned function from greet() gets saved in greetLetter
const greetLetter = greet(); // has assigned the closure to this const

// calling greetLetter calls the returned function from the greet() function
console.log('- greet() returns a greetLetter function. When we do greetLetter():');
greetLetter(); // logs 'Hi Silvana'

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
/*--------------------------------------*/ console.log('------ CLOSURE example 2 ------');
function createAdder(x) {
  return function(y) {
    return x + y;
  }
}

// var sum5plus3 = createAdder(5)(3);
const sum5 = createAdder(5);
const sum10 = createAdder(10);

//console.log(sum5mas3)
console.log('- createAdder(5) returns a sum5. When we do: sum5(2) =', sum5(2)); // logs 7
console.log('- createAdder(5) returns a sum10. When we do: sum10(2) =', sum10(2)); // logs 12

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
