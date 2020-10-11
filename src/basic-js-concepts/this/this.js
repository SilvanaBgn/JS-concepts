/*--------------------------------------*/ console.log('------ this ALONE ------');
console.log('- this =', this, '--> it is the global object...'); // Window object

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
/*--------------------------------------*/ console.log('------ this in OBJECT METHOD ------');
// If scope is in the method of an object, context will be the object the method is part 
// Here, function fullName() belongs to person object:
var person = {
  firstName: "John",
  lastName : "Doe",
  id     : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log('- EXAMPLE 1: person.fullName() =', person.fullName()); //John Doe

///////////////////////////////////////////////////////////
class User {
    logName() {
        return this;
    }
}
console.log('- EXAMPLE 2: (new User).logName() =', (new User).logName()); // User {}

///////////////////////////////////////////////////////////
/*
// It's different when we use the new keyword
function logFunction() {
    console.log(this);
}
new logFunction(); // logFunction {}*/

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
/*--------------------------------------*/ console.log('------ this in a GLOBAL FUNCTION ------');
function myGlobalFunction() {
  return this;
}
console.log('- this in myGlobalFunction() = ', myGlobalFunction());

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
/*--------------------------------------*/ console.log('------ this in an EVENT HANDLER ------');
