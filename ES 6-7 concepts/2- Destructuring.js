// --------------DESTRUCTURING--------------------
// -----------------------------------------------

let thingsToDo = {
  morning: 'Exercise',
  afternoon: 'Work',
  evening: 'Code',
  night: ['Sleep', 'Dream']
};

// Destructuring OBJECT (ES6)
let {morning, afternoon} = thingsToDo;

// ------------------
let unitStudent = (student) => {
  let {name, university} = student;
  console.log(`${name} from ${university}`);
}

let unitStudent = ({name, university}) => {
  console.log(`${name} from ${university}`);
}

// Destructuring ARRAY (ES6)
let [, montain] = ['Everest', 'Fitz Roy', 'Annapurna']
// Destructuring ARRAY
 console.log(montain); // va a imprimir Fitz Roy



// --------------RESTRUCTURING--------------------
// -----------------------------------------------
var name = 'Everest',
    height = 8848;

var adventureClimbing  = { name, height };