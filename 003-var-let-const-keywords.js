// var keyword :possible to reinitialise and redeclare
var x = 10;
console.log(x);
x = 15;
console.log(x);
var x = 20;
console.log(x);
//let keyword:possible to reinitialise but can't redeclare
var y = 25;
console.log(y);
y = 30;
console.log(y);
// let y=40; Cannot redeclare block-scoped variable 'y'.
//const keyword:can't redeclare and reinitialize
var z = 40;
console.log(z);
//z=45;  Cannot assign to 'z' because it is a constant
//const z=50;  Cannot redeclare block-scoped variable 'z'.
