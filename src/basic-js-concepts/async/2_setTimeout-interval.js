/*------------- setTimeout VS setInterval -------------*/ console.log('setTimeout vs. setInterval');
// setTimeout: calls a function after a time interval in milliseconds (it executes just once)
let timeoutID = setTimeout(alert("Oh Yeaaah! I'm the setTimeout"), 1000); // Will alert once, after a second.
clearTimeout(timeoutID); // Will clear the timer.

//setInterval: calls a function n times, every x milliseconds
let intervalID = setInterval(alert("Oh Yeaaah! I'm the setInterval"), 1000); // Will alert every second.
clearInterval(intervalID); // Will clear the timer, or stop it

//ADVIDE: It’s always good to clear your timer function after you’re done using it.
