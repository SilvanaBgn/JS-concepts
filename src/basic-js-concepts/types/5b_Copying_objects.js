/*--------------------------------------*/ console.log('------ Object.assign() ------');
//Object.assign is a function which modifies and returns the target object
const person = { name: 'Maria', birthday: '9 de Julio' };

const clonePerson = Object.assign({}, person); // {} + person attrs
console.log('     >>>>> {} + person attrs', clonePerson);

const clonePerson2 = Object.assign(person, { age: '25' }); // person + attr "age:25"
console.log('     >>>>> person + attr "age:25", then person and clonePerson are the same: person:', person, ' - clonePerson2', clonePerson2);
console.log('     >>>>> person===clonePerson2 ?', person === clonePerson2, '==> clonePerson2 is the same object');
//CONCLUSION: Object.assign assigns properties to a reference object and returns that same object

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/*--------------------------------------*/ console.log('------ SPREAD OPERATOR {...x} ------');
//Spread is an operator which copies properties of one object into a new object
const cat = { name: 'Tina' };
const catSpreaded = { ...cat, birthday: '10 de Marzo' };
console.log(catSpreaded);
console.log('     >>>>> cat===catSpreaded ?', cat === catSpreaded, '==> catSpread is a new object');

//CONCLUSION: {...x} creates and returns a new object with properties of params spreaded
