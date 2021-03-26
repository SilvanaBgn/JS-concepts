/*--------------------------------------*/ console.log('------ Set (ES6) ------');
/* The Set object lets you store UNIQUE values of any type, whether primitive values 
or object references. 
Set objects are collections of values. You can iterate through the elements of a set
in insertion order. A value in the Set may only occur once; it is unique in the Set's 
collection*/
const s = new Set();
s.add("hello").add("goodbye").add("hello");
s.size === 2;
s.has("hello") === true;

console.log('- element S in Set:', s);

/*--------------------------------------*/ console.log('------ Map (ES6) ------');
/* Map object is like a dictionary, contains pairs of key-value and respects the 
order of insertion. 
To iterate, it's use the for..of block*/ 
const m = new Map();
m.set("hello", 42);
m.set(s, 34);
m.get(s) == 34;
console.log('- element with key "s" in Map:  m.get(s) =', m.get(s));