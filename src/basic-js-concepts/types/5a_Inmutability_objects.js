/*--------------------------------------*/ console.log('------ Using Object.freeze() in 1st level ------');
// In objects and arrays: Object.freeze() in 1st level
const person = Object.freeze({
  name: 'Miguel',
});

person.name = 'Pepito'; // trying to UPDATE
console.log('- person.name:', person.name); // is still 'Miguel'

delete person.gmail; //trying to DELETE

console.log('     >>>>> object created with Object.freeze() was not modified in 1st level:', person); // { name: 'Miguel' }
// CONCLUSION: use Object.freeze() to create a shallow immutable object. Updating/Deleting doesn't change the object.

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
/*--------------------------------------*/ console.log('------ Modifying 2nd level ------');
//But what happens if we try to modify in second level?
const person2 = Object.freeze({
  name: 'Miguel',
  address: {
    location: 'El Prat de Llobregat',
  },
});
console.log('- We add location attr:', person2.address.location); // El Prat de Llobregat
person2.address.location = 'Barcelona';
console.log('     >>>>> but now, despite Object.freeze(), we updated and it suffered changes in 2nd level:', person2); // { name: 'Miguel', mail: 'miguel@gmail.com' }

//CONCLUSION: if you want immutability in every level, you need to make immutable each of them (with recursivity for example)

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
/*--------------------------------------*/ console.log('------ Using Recursive immutability ------');
//Recursive immutability
const immutableObject = (obj) => {
  if (typeof obj === 'object') {
    return Object.values(obj).forEach(immutableObject) || Object.freeze(obj);
  } else {
    return obj;
  }
};

const person3 = immutableObject({
  name: 'Miguel',
  address: {
    location: 'El Prat de Llobregat',
  },
});
console.log('- person.address.location:', person3.address.location); // El Prat de Llobregat
person3.address.location = 'Barcelona';
console.log('     >>>>> we updated location, but it is steal "El Prat de Llobregat"!:', person3);

//Other ways:
// With proxies, intercepting the call to the methods that produce modifications and applying an Object.freeze ()
// using libraries, as Immutable by facebook
