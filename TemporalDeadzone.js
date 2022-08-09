
// console.log(a) //this will give Uncaught reference : cannot print without initialisation.
// console.log(b) //this will be undefined.

let a = 10;
var b = 20;
console.log(window)
 // will print 20
// console.log(this.a); 

//because let and const. variables are not stored in the 'window' object ie. the global scope.
//they are being hoisted but they are not in the global scope. Their scope is different.
//var variables are stored in global execution context and in the window object by defaut.
