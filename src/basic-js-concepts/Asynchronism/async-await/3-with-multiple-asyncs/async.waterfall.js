/*-------------------------------- ASYNC WATERFALL -------------------------------- */
// It runs multiple tasks IN SERIE, which ones depend on the OUTPUT of the previous task


var async = require('async');
// You must run `npm i async` to install async node package

function one(cb){
  console.log('One Started...');
  setTimeout(function(){
    console.log(1);
    cb(null,'One Succeed');
  }, 5000);
}
function two(cb){
  console.log('Two Started...');
  setTimeout(function(){
    console.log(2);
    cb(null,'Two Succeed');
  }, 3000);
}
function pi(cb){
  console.log('Pi Started...');
  setTimeout(function(){
    console.log(3.1416);
    cb(null,'Pi Succeed');
  }, 1000);
}

/*async.series([one, two, pi], (err, results) => {
  if (err) {
    console.log('Error');
  } else {
    console.log('Results after async.series are:', results); // prints 'One Succeed', 'Two Succeed', 'Pi Succeed'
  }
});*/


///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
// If one of them has an Error:

function twoError(cb){
  console.log('Two Started...');
  setTimeout(function(){
    console.log(2);
    cb('Error');
  }, 3000);
}

async.series([one, twoError, pi], (err, results) => {
  if (err) {
    console.log('Error');
  } else {
    console.log('Results after async.series are:', results); // prints 'One Succeed', 'Two Succeed', 'Pi Succeed'
  }
});

/* OBSERVATION: Despite of having setTimeout inversed (function1=5000ms and function3=1000) 
they are printed in order 1, 2, 3.1416 */
