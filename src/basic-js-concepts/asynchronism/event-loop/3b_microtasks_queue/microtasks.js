/*------------- ASYNCHRONISM - Tasks -------------*/
var numberOfMicrotasks = 0,
  stopPlease,
  promisesButton = document.getElementById('promisesButton'),
  promisesButtonStop = document.getElementById('promisesButtonStop'),
  number = document.getElementById('number');

promisesButton.addEventListener(
  'click',
  () => {
    promisesButton.disabled = true;
    promisesButtonStop.disabled = false;
    numberOfMicrotasks = 0;
    stopPlease = false;
    console.log('Timer started.');
    Promise.resolve().then(addThen);
  },
  false
);
promisesButtonStop.addEventListener('click', () => {
  stopPlease = true;
  promisesButton.disabled = false;
  promisesButtonStop.disabled = true;
  console.log('Timer finished, with counter =', numberOfMicrotasks);
});

//we create an infinite loop
function addThen() {
  number.innerHTML = numberOfMicrotasks++;
  if (stopPlease) {
    Promise.reject();
  }
  Promise.resolve().then(addThen);
}

//CONCLUSION: view is NOT available! The browser gets block. Cause microtasks needs all of them to get resolved, to let the frame go.
