function myGreeter(pName) {
  this.name = pName;
  return `Hello ${this.name}`;
}

// console.log('myGreeter.__proto__:', myGreeter.prototype===Object.prototype);


const greet = new myGreeter('Bob');
console.log('greet.prototype:', greet.prototype,' ::: ', 'greet.__proto__:', greet.__proto__);
console.log('greet has no prototype cause it is an instance, but it has __proto__. Where does proto points out?');

// __proto__ is the pointer to the prototype of the "father"... but, who is the father?
console.log('ANSWER: greet.__proto__ === myGreeter.prototype :', greet.__proto__ === myGreeter.prototype);
