class ParentClass{
    sayHello(){
        console.log("Hello Everyone");
    }
}



class ChildClass extends ParentClass{
    sayBye(){
        console.log("Bye Everyone");
    }
}

var parentClassObj = new ParentClass;
parentClassObj.sayHello();
//parentClassObj.sayBye();
var childClassObj = new ChildClass;
childClassObj.sayHello();
childClassObj.sayBye();

/*
 Inheritance: Extending existing funcationality from parent calss to any other class without rewriting the code.
 */

