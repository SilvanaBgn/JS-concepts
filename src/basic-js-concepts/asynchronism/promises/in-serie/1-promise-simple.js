/*-------------------------------- PROMISES  -------------------------------- */
/*
Promises are created with two params resolve and reject, which let us indicate to the promise if it was resolve or rejected
   -- new Promise ((resolve, reject) => {})
It's a promise of a result, and then we indicate what will happen with that result, using .then and .catch
  -- promise.then((data)=>{}).catch((error)=>{})
*/

// A simple example which creates a promise with a random number. It resolver/rejects regarding on the number > 5
const promise = new Promise((resolve, reject) => {
	const number = Math.floor(Math.random() * 10);

  setTimeout(() => {
      if (number >= 5) {
          resolve(number)
      } else {
          reject(new Error('Smaller than 5'))
      }
    },
		1000
	);
});

promise.then(number => console.log('Success! Number:', number))
       .catch(error => console.error('Error:', error));