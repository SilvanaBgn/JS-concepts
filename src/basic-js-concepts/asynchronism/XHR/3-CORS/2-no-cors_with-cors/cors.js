const getBtnNoCORS = document.getElementById('getButtonNoCors');
const getBtnWithCORS = document.getElementById('getButtonWithCors');

const sendHttpRequest = (typeMethod, url) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(typeMethod, url);

    xhr.responseType = 'json'; //understands that response is a JSON and converts it to an object

    xhr.onload = () => {
      resolve(xhr.response);
    }
    xhr.send();
  });
  return promise;
}

const getData = (url) => {
  sendHttpRequest('GET', url)
  .then(responseData => {
    console.log('GET result:', responseData);
  })
  .catch((err) => {
    console.log('An error has happened:', err);
  });
}

// -----------------------------------------------
// -----------------------------------------------
getBtnNoCORS.addEventListener('click', () => {
  console.log('Executing request to url with NO CORS:')
  getData('https://cors-demo.glitch.me/');
});
getBtnWithCORS.addEventListener('click', () => {
  console.log('Executing request to url WITH CORS:')
  // server api with cors allowed
  getData('https://cors-demo.glitch.me/allow-cors');
});

