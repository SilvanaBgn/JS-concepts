/*------------- String -------------*/
//------ Template Strings ------

/*------------- Numbers -------------*/
var numberInt = 0,
  numberDecimal = 0.3,
  numberExp = 2e3,
  numberMinusExp = 2e-3;
console.log(numberInt, numberDecimal, numberExp, numberMinusExp);

/*------------- Undefined vs Null -------------*/
var holaUndefined;
console.log("holaUndefined:", holaUndefined); //undefined

var objectNull = { name: "name" };
objectNull = null;
console.log("objectNull:", objectNull); // null

console.log("Typeof holaUndefined:", typeof holaUndefined); // type is undefined
console.log("Typeof objectNull:", typeof objectNull); // type is object !!

/*------------- Symbols -------------*/

/*------------- BigInt -------------*/
const x = BigInt("2");
console.log(x, typeof x);
