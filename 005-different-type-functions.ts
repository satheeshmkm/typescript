//Naming function without params
function multiply(){
    console.log("This is multiply function");
}

multiply();

//Naming function with params
function multiplyParam(a:number, b:number){
    console.log(a*b);
}

multiplyParam(10,20);

//anonymous function
var multi =function (){
console.log("This is an anonymous function");
}

multi();

//anonymous function with parameters
var anonymousParaMultiply =function (a:number,b:number){
console.log("Result="+ a*b)
}
anonymousParaMultiply(5,10);

//lambda expression / arrow method without params
var lambMulti =()=>{
    console.log("lambda expression");
}

lambMulti();

//lambda expression / arrow method with params
var lambMultiPara =(a:number,b:number)=>{
    console.log("lambda expression Result= "+ a*b);
}

lambMultiPara(10,20);

var sample =(a:number)=>{
    return a;
}

console.log(sample(6));

var sample2 = a=>a;
console.log(sample2(10));