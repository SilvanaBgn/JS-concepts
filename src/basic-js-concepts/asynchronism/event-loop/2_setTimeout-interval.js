/*------------- setTimeout VS setInterval -------------*/ console.log('setTimeout vs. setInterval');
// setTimeout: calls a function after a time interval in milliseconds (it executes just once)
let timeoutID = setTimeout(() => {
  console.log("Oh Yeaaah! It has passed 3000 milliseconds, I'm the setTimeout");
  clearTimeout(timeoutID); // Will clear the timer.
}, 3000); // Will alert once, after a second.

//setInterval: calls a function n times, every x milliseconds
let counter = 0,
  intervalID = setInterval(() => {
    console.log("Oh Yeaaah! It has passed 1000 milliseconds, I'm the setInterval");
    counter++;
    if (counter === 5) {
      clearInterval(intervalID); // Will stop and clear the timer
    }
  }, 1000); // Will alert every second.

// ADVICE: It’s always good to clear your timer function after you’re done using it.

// GOOD QUESTION: Why not to use setInterval with one execution, instead of setTimeout??
// Cause purposes are just different and besides, you'd need to add an if condition and a clearInterval() to make it stop.
