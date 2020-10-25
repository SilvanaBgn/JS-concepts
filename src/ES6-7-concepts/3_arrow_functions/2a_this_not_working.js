/*--------------------------------------*/ console.log('------ This in arrow functions "not working" examples------');
console.log('   --- EXAMPLE 1 ---');
const cat = {
  lives: 7,
  dies: () => {
    this.lives--;
    console.log('- cat.lives =', cat.lives)
    console.log('- inside arrow function, this =', this);
  }
}

console.log('- We invoke cat.dies(); which should decrease it lives counter but it does not do it cause of arrow function');
cat.dies(); //doesn't decrease lives!!!


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