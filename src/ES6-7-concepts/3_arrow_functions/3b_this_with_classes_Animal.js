/*--------------------------------------*/ console.log('------ This in Regular function VS in Arrow functions ------');
class Animal {
    constructor() {
        this.name = 'Togui';
        setTimeout(() => { // arrow function context is Animal instance 
            console.log('Arrow function - this =', this);
            console.log('- We call this.updateName("Silvana")');
            this.updateName('Silvana');
         }, 1000);
    }

    updateName(newName) {
        this.name = newName;
        console.log('- and now, this.name was updated - this =', this);
    }
}
const a = new Animal();