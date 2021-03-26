/*--------------------------------------*/ console.log('------ This in arrow functions ------');
// the arrow function doesn’t define its own execution context, so it takes the one from its outer function. Even for callbacks.

const myObject = {
  myMethod(items) {
    console.log('this of outer function:',this); // logs myObject
    items.forEach(() => console.log('this of arrow function:',this)); // logs myObject
  }
};

myObject.myMethod([1, 2, 3]); 


/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/*--------------------------------------*/ console.log('------ This in setTimeout ------');
let nepal = {
  //add property
  mountains: ['Everest', 'Fitz Roy', 'Fish Tail'],
  // add method
  printThisMountains: function(){
    setTimeout(function() {
      console.log('- WITH REGULAR FUNCTION: setTimeout WILL NOT LOG this.mountains, cause this has no context');
      console.log('   >>> this.mountains', this.mountains) // logs undefined

      console.log('- We print this:', this) // logs setTimeout context
    },1000);

    // --------

    setTimeout(() => {
      console.log('WITH ARROW FUNCTION: setTimeout WILL LOG this.mountains, that belongs to nepal outer function');
      console.log('   >>>>> this.mountains:', this.mountains.join(" - ")) // logs mountains
      
      console.log('- We print this:', this) // logs nepal context
    },2000)
  }
}

nepal.printThisMountains();

// CONCLUSION : regular function takes this from it's outer function

// REGULAR FUNCTIONS define this, as the context where the function BELONGS. Example: the object that contains the regular function, or the global scope, or the setTimeout context.
// ARROW FUNCTIONS define this, as the context WHERE the arrow function is BEING CALLED. Example: the object.attribute is an arrow function, but when it's called, the context is the place where that sentence was executed, i.e., global scope.
//Or a forEach or a setTimeout: the context is the place where that function (forEach, setTimeout) was called.
