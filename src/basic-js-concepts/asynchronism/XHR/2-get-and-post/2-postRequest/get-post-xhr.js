/*-------------------------*/ console.log('XHR request') /*------------------------- */
/* XMLHttpRequest (XHR) objects are used to interact with servers. You can retrieve 
data from a URL without having to do a full page refresh.
Despite its name, XMLHttpRequest can be used to retrieve any type of data, not just XML.
*/
// EXAMPLE FOLLOWED: https://www.youtube.com/watch?v=4K33w-0-p2c


/*--------------------------------------------------------*/
// BUTTONS
const getBtn = document.getElementById('getButton');
const postBtn = document.getElementById('postButton');

/// typeMethod: 'GET', 'POST'
/// url: to make the request
/// dataObject: in case of POST requests
const sendHttpRequest = (typeMethod, url, dataObject) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(typeMethod, url);

    xhr.responseType = 'json'; //understands that response is a JSON and converts it to an object

    if (dataObject) {
      xhr.setRequestHeader('Content-Type', 'application/json'); // this header we're setting is for the xhr.send(), so it does know that dataObject is a json
    }

    xhr.onload = () => {
      resolve(xhr.response);
    }

    xhr.send(JSON.stringify(dataObject));
  });
  return promise;
}

/*--------------------------------------------------------*/
const getData = () => { // GET method
  sendHttpRequest('GET', 'https://reqres.in/api/users')
  .then(responseData => {
    console.log('GET result:', responseData);
  })
  .catch((err) => {
    console.log('An error has happened:', err);
  });
}

const sendData = () => { // POST method
  const objectPOST = {
    email: 'eve.holt@reqres.in',
    password: 'pistol'
  };
  sendHttpRequest('POST', 'https://reqres.in/api/register', objectPOST)
  .then(responseData => {
    console.log('POST result:', responseData);
  })
}

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);
