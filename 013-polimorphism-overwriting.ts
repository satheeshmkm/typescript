class OverWriteParent{
    greetEveryOne(){
        console.log("Hello EveryOne");
    }
}

var owParentObj = new OverWriteParent;
owParentObj.greetEveryOne();

class OverWriteChild extends OverWriteParent{
    greetEveryOne(){
        console.log("Hi EveryOne");
    }
}

var owChild = new OverWriteChild;
owChild.greetEveryOne();

/*
One method performing differntly in polymorphism.
Polymorphism concepts are
1) overriding
2) overloading

overloading is not supported in typescript.
*/