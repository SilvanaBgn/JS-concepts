//Symbols are used as identifiers for object properties
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
// the key is used to identified that unknown value
console.log("value1:", value1, ", value2:", value2, "-> comparison value1 === value2:", value1 === value2); //true --> equal values
console.log("Symbol.keyFor:", Symbol.keyFor(value2));
