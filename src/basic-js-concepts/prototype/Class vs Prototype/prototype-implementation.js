let PersonP = function(pName, pId) {
    this.name = pName;
    this.id = pId;
  }
PersonP.prototype.getDetails = function() { // this function will exist in PersonC's prototype
  return `${this.name} :: ${this.id}`;
}

let bob = new PersonP("Bob", 123);
console.log(bob.getDetails());

//--------------------------------------
//--------------------------------------

let EmployeeP = function(pName, pId, pSalary) {
  PersonP.call(this, pName, pId);
    this.salary = pSalary;
}
// weth next statement, we are linking the prototype of EmployeeP
Object.setPrototypeOf(EmployeeP, PersonP.prototype); // extends!!

EmployeeP.prototype.employeeInfo = function() {
  return `${this.name} :: ${this.id} :: $${this.salary}`;
}

let sam = new EmployeeP("Sam", 456, 50000);
console.log(sam.employeeInfo());
