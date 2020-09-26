/*------------- ASYNCHRONISM -------------*/ console.log('Asynchronism');
/*---------------------------*/
/*------------- EXAMPLE 1: A simple example -------------*/

/*
// We create a setTimeout to execute in 1 second
setTimeout(() => {
  console.log('second');
}, 1000);

//and then, there is this big loop
let cnt = 0;
for (let i = 0; i < 10e9; i += 1) {
  cnt += 1;
}
console.log('first')

//We descover that "second" is not showed until the for ends and "first is printed" (takes more than 1 second)
//It's because, since cnt was being increased by for-loop, your setTimeout had to wait until it’s done.
console.log('Last example took more than 1 second');
//CONCLUSION: It means 1000 milliseconds you set in setTimeout does NOT mean that the callback function will be invoked at the exact time in 1000 milliseconds.
*/

/*---------------------------*/
/*------------- EXAMPLE 2: A more complex example -------------*/ console.log('What happens with order btw synch and asynch?');
//Asynchronous
function asyncForEach(array, cb) {
  array.forEach((i) => {
    setTimeout(cb, 0, i);
  });
}
asyncForEach([1, 2, 3, 4], function (i) {
  console.log(`2.${i}-processing ASYNCH`);
});

//Synchronous
[1, 2, 3, 4].forEach((i) => {
  console.log('1-processing SYNCH');
});

console.log('SYNCH process is after ASYNCH process, but it happens first!');
//CONCLUSION: it visible, that although SYNCH process is after ASYNCH process, it happens first.
//This is because JS runtime solves stack first (synch processes), and then solves asynch tasks in task queue (that were put there by Web APIs threads)
