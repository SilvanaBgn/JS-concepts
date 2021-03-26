/*-------------------------*/ console.log('XHR states') /*------------------------- */
/* request states: 0 unset, 1 open, 2 headers received, 3 loading, 4 done */

let xhr = new XMLHttpRequest();

console.log('readyState:', xhr.readyState);  // 0
xhr.open('GET', 'https://reqres.in/api/users');
console.log('readyState:', xhr.readyState);  // 1

// event listener for change of readyState
xhr.onreadystatechange = () => {
  console.log('XHR readyState:', xhr.readyState)
  if (xhr.readyState == 4) { // the operation was completed
    if (xhr.status == 200){ // ok
      console.log('GET result:', JSON.parse(xhr.responseText));
    } else if (xhr.status == 404){
      console.log('File or resource was not found');
    } else {
      console.log(xhr.status)
    }
  }
}

xhr.send(); //2
