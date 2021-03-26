const thingsToDo = {
  morning: 'Exercise',
  afternoon: 'Work',
  evening: 'Code',
  night: ['Sleep', 'Dream']
};

/*--------------------------------------*/ console.log('------ Destructuring OBJECT (ES6) ------');
const {morning, afternoon} = thingsToDo;

////////////////////////////////////////
////////////////////////////////////////
const unitStudent1 = (student) => {
  let {name, university} = student;
  console.log(`${name} from ${university}`);
}

////////////////////////////////////////
////////////////////////////////////////
const student = {
        name: 'Julia',
        university: 'UTN'
      };
      unitStudent2 = ({name, university}) => {
        console.log(`${name} from ${university}`);
      }
console.log('- We did {name, university} = student. Then, using name and university, we obtain:');
unitStudent1(student); //prints "Julia from UTN"
unitStudent2(student); //prints "Julia from UTN"

///////////////////////////////////////
///////////////////////////////////////
({a, b, ...rest1} = {a: 10, b: 20, c: 30, d: 40}); //they are consts
console.log('- We did ({a, b, ...rest1} = {a: 10, b: 20, c: 30, d: 40}); Then, rest =', rest1); // logs {c: 30, d: 40}


/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/*--------------------------------------*/ console.log('------ Destructuring ARRAY (ES6): list matching ------');
const [, mountain] = ['Everest', 'Fitz Roy', 'Annapurna']
console.log('- We did [, mountain]; Then, mountain =', mountain); // prints 'Fitz Roy'

const [x, y, ...rest2] = [10, 20, 30, 40, 50];
console.log('- We did [x, y, ...rest] = [10, 20, 30, 40, 50]; Then, rest =', rest2); // logs [30, 40, 50]]


/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/*--------------------------------------*/ console.log('------ Destructuring ARRAY (ES6): Fail-soft destructuring ------');
const [elem] = [];
console.log('- We did destructuring to an empty array const [a]=[];, a === undefined?', elem === undefined);

// Fail-soft destructuring with defaults
const [elem2 = 1] = [];
console.log('- Now, we added a default value const [b = 1]=[] to destructuring, so b === 1?', elem2 === 1)


/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/*--------------------------------------*/ console.log('------ Restructuring (ES6) ------');
const name = 'Everest',
      height = 8848,
      adventure = { name, height };

console.log('- We did adventure = { name, height };  Then, adventure =', adventure); // prints 'Fitz Roy'
