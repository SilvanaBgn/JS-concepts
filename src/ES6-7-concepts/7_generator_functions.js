/*--------------------------------------*/ console.log('------ Default param (ES6) ------');
//iterators and generators were included with ES6.

console.log('- We declare function* animalsGenerator()');
function* animalsGenerator() {
 yield 'Rabbits';
 yield 'Cats';
 yield 'Dogs';
}

console.log('- We create an instance of animalsGenerator()');
const animals = animalsGenerator();

console.log('- We ask for animals.next().value:');
console.log(animals.next().value); // logs Rabbits
console.log(animals.next().value); // logs Cats
console.log(animals.next().value); // logs Dogs
console.log(animals.next().value); // logs Undefined

console.log('- We ask for animals.next().done:');
const animalsDone = animalsGenerator();
console.log(animalsDone.next().done); // logs false
console.log(animalsDone.next().done); // logs false
console.log(animalsDone.next().done); // logs false
console.log(animalsDone.next().done); // logs true
