/*--------------------------------------*/ console.log('------ Rest param (ES6) ------');
// When you don't know the number of params, you can use rest parameter to receive them
function myFun(a,  b, ...manyMoreArgs) {
  console.log("a:", a)
  console.log("b:", b)
  console.log("manyMoreArgs:", manyMoreArgs)
}

console.log('- Our function is myFun(a,  b, ...manyMoreArgs), and we recieve: ');
myFun("one", "two", "three", "four", "five", "six");