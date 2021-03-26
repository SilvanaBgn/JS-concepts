const {taskOne, taskTwo} = require('./1-tasks.js');
// const {taskOne, taskTwo} = require('./2-tasks-error.js');
// const {taskOne, taskTwo} = require('./3-tasks-error-handlering.js');

async function main() {
  console.time('Measuring time')
  const valueOne = await taskOne();
  const valueTwo = await taskTwo();
  console.timeEnd('Measuring time')

  console.log('Task one returned:', valueOne);
  console.log('Task two returned:', valueTwo);
}

main();
