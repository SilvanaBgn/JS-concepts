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

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/*--------------------------------------*/ console.log('------ Destructuring ARRAY (ES6) ------');
const [, mountain] = ['Everest', 'Fitz Roy', 'Annapurna']
console.log('- We did [, mountain]; Then, mountain =', mountain); // prints 'Fitz Roy'


/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/*--------------------------------------*/ console.log('------ Restructuring (ES6) ------');
const name = 'Everest',
      height = 8848,
      adventure = { name, height };

console.log('- We did adventure  = { name, height };  Then, adventure =', adventure); // prints 'Fitz Roy'
