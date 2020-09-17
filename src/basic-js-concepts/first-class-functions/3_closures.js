// closures: functions can be returned from other functions
function sum(operandoA) {
  console.log("operandoA", operandoA);
  return function (operandoB) {
    console.log("operandoB", operandoB);
    return `Sum of ${operandoA} + ${operandoB} is ${operandoA + operandoB}`;
  };
}

console.log(sum(10)(6)); //10+6 = 16
