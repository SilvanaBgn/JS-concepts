/*-------------------------*/ console.log('XHR request') /*------------------------- */
/* XMLHttpRequest (XHR) objects are used to interact with servers. You can retrieve
data from a URL without having to do a full page refresh.
Despite its name, XMLHttpRequest can be used to retrieve any type of data, 
not just XML.
*/
// EXAMPLE FOLLOWED: https://www.youtube.com/watch?v=4K33w-0-p2c

// BUTTONS
const getBtn = document.getElementById('getButton');
// const postBtn = document.getElementById('postButton');

/// typeMethod: 'GET', 'POST'
/// url: to make the request
const sendHttpRequest = (typeMethod, url) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(typeMethod, url);

    // replaces the JSON.parse()
    xhr.responseType = 'json'; //understands that response is a JSON and converts it to an object

    xhr.onload = () => {
      resolve(xhr.response);
    }
    xhr.send();
  });
  return promise;
}

const getData = () => {
  sendHttpRequest('GET', 'https://reqres.in/api/users')
  .then(responseData => {
    console.log('GET result:', responseData);
  })
  .catch((err) => {
    console.log('An error has happened:', err);
  });
}

// const sendData = () => {}

getBtn.addEventListener('click', getData);
// postBtn.addEventListener('click', sendData);
