/*------------- String -------------*/ console.log("STRING ->");
console.log("hola string común");
//------ Template Strings ------
const string = "template string";
console.log(`hola, soy un ${string}
y también tengo enter muajaja`);

/*------------- Numbers -------------*/ console.log("NUMBER ->");
var numberInt = 0,
  numberDecimal = 0.3,
  numberExp = 2e3,
  numberMinusExp = 2e-3;
console.log(numberInt, numberDecimal, numberExp, numberMinusExp);

/*------------- Undefined vs Null -------------*/ console.log("UNDEFINED vs NULL ->");
var holaUndefined;
console.log("holaUndefined:", holaUndefined); //undefined

var objectNull = { name: "name" };
objectNull = null;
console.log("objectNull:", objectNull); // null

console.log("Typeof holaUndefined:", typeof holaUndefined); // type is undefined
console.log("Typeof objectNull:", typeof objectNull); // type is object !!

/*------------- Symbols -------------*/ console.log("SYMBOL ->");
//Unique value and will not be repeated anytime. But you never get to access that value in your program
const s1 = Symbol(); //sdfkjsdfhksjfdkj
console.log(s1, typeof s1);

//The value pass by param is not associated with the value of the symbol, it's just a description
const s2 = Symbol("Description"), //Symbol(description)
  s3 = Symbol("Description");
console.log("s2:", s2, ", s3:", s3, "-> comparison s2 === s3:", s2 === s3); //false --> different values

//used as identifier for object properties
const name = Symbol("Property Name"),
  person = {
    [name]: "Maria",
    age: 20,
    city: "Tucumán",
  };
console.log("getOwnPropertyNames", Object.getOwnPropertyNames(person)); //we actually don't get name, cause name it's a Symbol
console.log("getOwnPropertySymbols", Object.getOwnPropertySymbols(person));

//two const with same Symbol value
const value1 = Symbol.for("keyName"), // Symbol.for(key)
  value2 = Symbol.for("keyName");
console.log("value1:", value1, ", value2:", value2, "-> comparison value1 === value2:", value1 === value2); //true --> equal values
console.log("Symbol.keyFor:", Symbol.keyFor(value2));

/*------------- BigInt -------------*/
const x = BigInt("2");
console.log("BIGINT -> Typeof x:", typeof x, "- value:", x);

//cannot do 2n + 2 --> Cannot mix BigInt and other types
