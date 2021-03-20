/*-------------------------------- ASYNC PARALLEL -------------------------------- */
// It runs multiple tasks independent of each other, without waiting until the previous task has completed

var async = require('async');
// You must run `npm i async` to install async node package

function uno(cb){
  console.log('One Started...');
  setTimeout(function(){
    console.log(1);
    cb(null,'One Succeed');
  }, 5000);
}
function dos(cb){
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

async.parallel([uno, dos, pi], (err, resultados) => {
  if (err) {
    console.log('Error');
  } else {
    console.log('Results after async.parallel are:', resultados); // prints 'One Succeed', 'Two Succeed', 'Pi Succeed'
  }
});


// CONCLUSION: functions are effectively executed in parallel, cause results are printed in inversed order (3, 2, 1)
