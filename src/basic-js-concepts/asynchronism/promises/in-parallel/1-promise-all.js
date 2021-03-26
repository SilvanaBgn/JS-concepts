/*-------------------------*/ console.log('PROMISE ALL') /*------------------------- */
/* Promise has an static method Promise.all which recieves a list of promises. These promises are executed in parallel
If any of them is rejected, then the whole list is rejected.
If all are resolve, then we recieve a list with all the responses
TO RECEIVE AN ANSWER, ALL OF THEM NEED TO FINISH*/

function showMessage(message, time) {
	return new Promise((resolve, reject) => {
        console.log(message);
        setTimeout(() => resolve(message), time);
	});
}

Promise.all([showMessage(`I'm Promise1`, 3000), showMessage(`I'm Promise2`, 1000)])
    .then(message => console.log('I finished! -->', message)) // I finished! [ "I'm Promise1", "I'm Promise2" ]
    .catch(error => console.error('Error:', error));
