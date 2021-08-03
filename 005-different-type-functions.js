//Naming function without params
function multiply() {
    console.log("This is multiply function");
}
multiply();
//Naming function with params
function multiplyParam(a, b) {
    console.log(a * b);
}
multiplyParam(10, 20);
//anonymous function
var multi = function () {
    console.log("This is an anonymous function");
};
multi();
//anonymous function with parameters
var anonymousParaMultiply = function (a, b) {
    console.log("Result=" + a * b);
};
anonymousParaMultiply(5, 10);
//lambda expression / arrow method without params
var lambMulti = function () {
    console.log("lambda expression");
};
lambMulti();
//lambda expression / arrow method with params
var lambMultiPara = function (a, b) {
    console.log("lambda expression Result= " + a * b);
};
lambMultiPara(10, 20);
var sample = function (a) {
    return a;
};
console.log(sample(6));
var sample2 = function (a) { return a; };
console.log(sample2(10));
