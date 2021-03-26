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


const sendHttpRequest = (typeMethod, url, dataObject) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(typeMethod, url);

    xhr.responseType = 'json';

    if (dataObject) {
      xhr.setRequestHeader('Content-Type', 'application/json'); 
    }

    xhr.onload = () => {
      if (xhr.status >= 400) { // failed response 
        reject(xhr.response); // cause of DATA received (the XHR request was successfuly!)
      } else {
        resolve(xhr.response);
      }
    }
    xhr.onerror = () => { // error on the xhr request sending (i.e, internet connection troubles). Not about response data
      reject('XHR error: Something went wrong with the XHR request');
    }

    xhr.send(JSON.stringify(dataObject));
  });
  return promise;
}

/*--------------------------------------------------------*/
const getData = () => {
  sendHttpRequest('GET', 'https://reqres.in/api/users')
  .then(responseData => {
    console.log('GET result:', responseData);
  })
  .catch((err) => {
    console.log('An error has happened in GET:', err);
  });
}

const sendData = () => {
  const objectPOST = {
    email: 'eve.holt@reqres.in',
    // password: 'pistol' --> It'll produce a failed response
  };
  sendHttpRequest('POST', 'https://reqres.in/api/register', objectPOST)
  .then(responseData => {
    console.log('POST result:', responseData);
  })
  .catch((err) => {
    console.log('An error has happened in POST:', err);
  });
}


/*--------------------------------------------------------*/
getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);
