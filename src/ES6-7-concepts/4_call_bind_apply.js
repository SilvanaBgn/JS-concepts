/*--------------------------------------*/ console.log('------ CALL, APPLY, BIND ------');
const myObject = {
      num: 100
    },
    add = function (a, b, c) {
      return this.num + a + b + c;
    }
let result; //must be 106

/*--------------------------------------*/ console.log('------ Call ------');
// Call executes a function with myObject and then the params
result = add.call(myObject, 1, 2, 3) // establishing the scope as "myObject"
console.log('- Executes a function with myObject and then the params: add.call(myObject, 1, 2, 3) =', result) // logs 106

/*--------------------------------------*/ console.log('------ Apply ------');
// Apply executes a function with myObject and an array of params
const array = [1, 2, 3]
result = add.apply(myObject, array) // establishing the scope as "myObject"
console.log('- Executes a function with myObject and an array of params: add.apply(myObject, array) =', result) // logs 106

/*--------------------------------------*/ console.log('------ Bind ------');
// Bind, first it bindes myObject to the function and then executes it in the future.
result = add.bind(myObject) // establishing the scope as "myObject"
console.log('- First, it bindes myObject to the function, and then executes it in the future: add.bind(myObject); result(1, 2, 3) =',result(1, 2, 3)) //logs 106
