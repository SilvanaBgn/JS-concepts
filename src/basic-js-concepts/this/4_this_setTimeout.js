/*--------------------------------------*/ console.log('------ This in setTimeout ------');
let nepal = {
  //add property
  mountains: ['Everest', 'Fitz Roy', 'Fish Tail'],
  // add method
  printWithDash: function(){
    console.log('- inside printWithDash, this =', this); //1
    setTimeout(function() {
      console.log('- inside setTimeout, this =', this); //2
    },2000)
  }
}

nepal.printWithDash();

//CONCLUSION:
// In 1), this points to nepal context
// but in 2), this points to its context, that is setTimeOut function

// We will revise this in arrow functions, with ES6/7 concepts 

