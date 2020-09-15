console.log("PRIMITIVE TYPES: String, Numbers, Booleans, Undefined, Null, Symbol");
/* Primitive types are passed, copied and compared always by Value.*/

/*------------- COPIED BY VALUE -------------*/
// We declare name, and secondName with name value
let name = "Maria",
  secondName = name;
name = "Julian";
console.log("name:", name, " - secondName:", secondName);

/* RESULT: name: Julian  - secondName: Maria */
// CONCLUSION: we did change name value, and secondName was not modified.'

/*------------- PASSED BY VALUE -------------*/
function ChangeParam(paramInside) {
  paramInside = "chau";
}
// We define string paramOutside with "hola", and into ChangeParam() we update it to "chau".
let paramOutside = "hola";
ChangeParam(paramOutside);
console.log("paramOutside:", paramOutside);

// CONCLUSION: after ChangeParam(), paramOutside is still "hola". SO paramOutside was passed to the function by value

/*------------ COMPARED BY VALUE -------------*/
// We declare name1 and name2 as different instances, but with same value.
let name1 = "Maria",
  name2 = "Maria";

if (name1 == name2) {
  console.log("name1 == name2"); /* <== */
} else {
  console.log("name1 != name2");
}
if (name1 === name2) {
  console.log("name1 === name2"); /* <== */
} else {
  console.log("name1 !== name2");
}
// CONCLUSION: 2 strings are compared by value. They must just have the same value to be true, doesnt matter if they are different instances.
