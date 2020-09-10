console.log('OTHER DATA TYPES: ');
/* Rest of Types (except for primitive values) are passed, copied and compared always by Reference*/

/*------------- COPIED BY REFERENCE -------------*/
// >> EXAMPLE WITH OBJECTS: we declare car, and secondCar with car value. Then we update car.color to "white"
let car = {
      color: 'red'
    },
    secondCar = car;
car.color = 'white';
console.log('car:', car, '  -  secondCar:', secondCar); /* RESULT: car === secondCar */
// CONCLUSION: secondCar color was modified by reference


// ----
// >> EXAMPLE WITH ARRAYS: We declare mountains[], and secondMountains[] with first's value
let mountains = ['Everest', 'Fitz Roy'],
    secondMountains = mountains;
mountains.splice(1,0,'Annapurna'); // We add "Annapurna" to secondMountains[]
console.log('mountains:', mountains, ' - secondMountains:', secondMountains);  /* RESULT: mountains === secondMountains */
// CONCLUSION: mountains was modified by reference




/*------------- PASSED BY REFERENCE -------------*/
function ChangeParam(paramCar){
  paramCar.color = 'white';
}
// We define paramCarOutside with red, and then we execute ChangeParam(), where we set white color
let paramCarOutside = {
      color: 'red'
    };
ChangeParam(paramCarOutside);

console.log('paramCarOutside:', paramCarOutside);
// CONCLUSION: after ChangeParam(), paramCarOutside should be still white. So, paramCarOutside was passed to the function by reference




/*------------ COMPARED BY REFERENCE ------------*/
// We declare array1 and array2 as different instances, but with same value.
let array1 = ['Maria'],
    array2 = ['Maria'];

if(array1 == array2){ 
  console.log('array1 == array2');
} else {
  console.log('array1 != array2');  /* <== */
}
if(array1 === array2){
  console.log('array1 === array2');
} else {
  console.log('array1 !== array2'); /* <== */
}

//----
// We declare array3 and array4 as the same instance:
array3 = ['Maria'],
array4 = array3;

if(array3 == array4){
  console.log('array3 == array4');  /* <== */
} else {
  console.log('array3 != array4');
}
if(array3 === array4){
  console.log('array3 === array4'); /* <== */
} else {
  console.log('array3 !== array4');
}
// CONCLUSION: arrays are compared by reference. They must be the same instance to be true
