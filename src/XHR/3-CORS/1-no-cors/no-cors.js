const getBtn = document.getElementById('getButton');

function reqListener () {
  console.log(this.responseText);
}

function getData() {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("load", reqListener, false);
  xhr.open("GET", "http://www.example.org/example.txt");
  xhr.send();
  document.getElementById('result').className='p_visible';
}

getBtn.addEventListener('click', getData);
