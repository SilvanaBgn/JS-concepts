/*----------------------------- PROMISE CHAINING ----------------------------- */
// We use many .then to chain any promises

function showMessage(number = 0) {
    console.log('Number =', number);
	return new Promise((resolve, reject) => {
        setTimeout(() => resolve(number+1), 3000);
	});
}

showMessage().then(showMessage)
             .then(result => console.log('Amount of promises resolved:',result))
             .catch(error => console.error('Error:', error));