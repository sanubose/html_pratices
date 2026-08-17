console.log(false || false); // false
console.log(false || true);  // true
console.log(true || false);  // true
console.log(true || true);   // true
//With Truthy/Falsy Values
console.log(!1);     // false
console.log(!0);     // true
console.log(!"");    // true
console.log(!"Hi");  // false
////============================================================================================================================================================
//Double NOT (!!)

//!! kisi value ko boolean mein convert kar deta hai:

console.log(!!1);     // true
console.log(!!0);     // false
console.log(!!"Hi");  // true
console.log(!!"");    // false


//==================================================AAND=============================================================
console.log(false && false); // false
console.log(false && true);  // false
console.log(true && false);  // false
console.log(true && true);   // true