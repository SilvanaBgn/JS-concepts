let PersonC = class {
  constructor(pName, pId) {
    this.name = pName;
    this.id = pId;
  }

  getDetails() { // this function will exist in PersonC's prototype
    return `${this.name} :: ${this.id}`;
  }
}

let bob = new PersonC("Bob", 123);
console.log(bob.getDetails());

//--------------------------------------

let EmployeeC = class extends PersonC { // EmployeeC prototype links to PersonC prototype
  constructor(pName, pId, pSalary) {
    super(pName, pId);
    this.salary = pSalary;
  }

  employeeInfo() {
    return `${this.name} :: ${this.id} :: $${this.salary}`;
  }
}

let sam = new EmployeeC("Sam", 456, 50000);
console.log(sam.employeeInfo());
