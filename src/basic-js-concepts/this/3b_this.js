/*--------------------------------------*/ console.log('------ this in a GLOBAL FUNCTION in strict mode ------');
'use strict';
function myStrictFunction() {
  return this;
}
console.log('- this in myStrictFunction() = ', myStrictFunction())
