function abc(x:any):any{
    return x;
}

var y:string = abc(6);

function axyz<R>(b:R):R{
    return b;
}

//var c:string = axyz(6);
var c:string = axyz("6");