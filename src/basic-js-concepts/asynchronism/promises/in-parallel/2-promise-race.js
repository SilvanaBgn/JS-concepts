/*-------------------------*/ console.log('PROMISE RACE') /*------------------------- */
/* Promise has an static method Promise.race which recieves a list of promises. These promises are executed in parallel
If any of them is rejected, then the whole list is rejected.
We ONLY obtain the result of the first that is ready. It's a race!
*/

function showMessage(message, time) {
	return new Promise((resolve, reject) => {
        console.log(message);
        setTimeout(() => resolve(message), time);
	});
}

Promise.race([showMessage(`I'm Promise1`, 7000), showMessage(`I'm Promise2`, 1000)])
    .then(message => console.log('I finished first haha!! -->', message)) //I finished first haha!! --> "I'm Promise2"
    .catch(error => console.error('Error:', error));

// Nevertheless, it wait until all promises finish......