/*------------- Number type, safe limits -------------*/
console.log("Number.MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);
console.log("Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);

var x = Number.MAX_SAFE_INTEGER + 1;
var y = Number.MAX_SAFE_INTEGER + 2;
console.log(x === y); // true! When it should be false!!

// CONCLUSION: it is safe until those limits
