/*--------------------------------------*/ console.log('------ This in arrow functions "not working" examples------');
console.log('   --- EXAMPLE 1 ---');
const cat = {
  lives: 7,
  dies: () => {
    console.log('- inside arrow function, this =', this);
    this.lives--;
  }
}

console.log('- We invoke cat.dies(); which should decrease it lives counter but it does not do it cause of arrow function');
cat.dies(); //doesn't decrease lives!!!
console.log('- cat.lives =', cat.lives)
console.log('- outside, after all executions, this =', this);
console.log('>>> this global object was updated !!!!');
delete this.lives;

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
console.log('   --- EXAMPLE 2 ---');
const camera = {
    price: 600,
    weight: 2,
    myDescription: () => {
      console.log('- inside arrow function, this =', this);
      return `This cannon camera is of ${this.price}`;
    }
  }

camera.myDescription(); //logs undefined 
//cause it points to global object
console.log('- It logs undefined cause arrow function is pointing to global object');
