/*------------- ASYNCHRONISM - Tasks -------------*/
var numberOfTasks = 0,
  stopPlease,
  timeoutButton = document.getElementById('timeoutButton'),
  timeoutButtonStop = document.getElementById('timeoutButtonStop'),
  number = document.getElementById('number');

timeoutButton.addEventListener(
  'click',
  () => {
    timeoutButton.disabled = true;
    timeoutButtonStop.disabled = false;
    numberOfTasks = 0;
    stopPlease = false;
    console.log('Timer started.');
    start();
  },
  false
);
timeoutButtonStop.addEventListener('click', () => {
  stopPlease = true;
  timeoutButton.disabled = false;
  timeoutButtonStop.disabled = true;
  console.log('Timer finished, with counter =', numberOfTasks);
});

//we create an infinite loop
function start() {
  number.innerHTML = numberOfTasks++;
  const timerId = setTimeout(start, 0);
  if (stopPlease) {
    clearTimeout(timerId);
  }
}

//CONCLUSION: view is available! Cause frames are respected with tasks
