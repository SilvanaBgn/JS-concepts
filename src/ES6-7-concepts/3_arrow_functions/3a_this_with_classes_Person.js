/*--------------------------------------*/ console.log('------ This in Regular function VS in Arrow functions ------');
class Person {
    constructor() {
        this.name = 'Maria';
        setTimeout(function() { // function context is constructor method 
            console.log('   >>> THIS in a Regular function - this =', this);
            console.log('this.name =',this.name);
            this.name = 'Silvana';
            console.log('this.name =',this.name);
            console.log('- We cannot update this.name with regular function into setTimeout, cause the context is the setTimeout')
        }, 1000);
        setTimeout(() => { // arrow function context is Person class, not constructor method 
            console.log('   >>> Arrow function - this =', this);
            console.log('this.name =',this.name);
            this.name = 'Silvana';
            console.log('this.name =',this.name);
            console.log('- We CAN update this.name with arrow function into setTimeout, cause the context is Person instance')
         }, 1000);
    }
}
const p = new Person();