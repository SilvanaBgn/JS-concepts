const {taskOne, taskTwo} = require('./tasks.js');

async function main() {
  console.time('Measuring time');
  // const valueOne = await taskOne();
  // const valueTwo = await taskTwo();
  const [valueOne, valueTwo] = await Promise.all([taskOne(), taskTwo()]);
  console.timeEnd('Measuring time')

  console.log('Task one returned:', valueOne);
  console.log('Task two returned:', valueTwo);
}

main();

//It's not measuring times well :( It should measure the bigger one!