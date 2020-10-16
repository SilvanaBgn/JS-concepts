/*--------------------------------------*/ console.log('------ IIFE, CLOSURE AND MODULE PATTERN example ------');
/* We create a function with a privateCounter, which returns functions (closures) that let us
modify privateCounter */
const Counter = (function() {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() { // closure
      changeBy(1);
    },
    decrement: function() { // closure
      changeBy(-1);
    },
    value: function() { // closure
      return privateCounter;
    }
  }
})();

console.log('Counter is:', Counter.value()); //logs 0
Counter.increment(); console.log(' > increment')
Counter.increment(); console.log(' > increment')
console.log('Counter is:', Counter.value()); //logs 2
Counter.decrement(); console.log(' > decrement')
console.log('Counter is:', Counter.value()); //logs 1
