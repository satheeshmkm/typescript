abstract class AbstClass{
    wishEveryOne(){
        console.log("Hi Everyone");
    }
}

//var abstClassObj = new AbstClass; //error TS2511: Cannot create an instance of an abstract class
// sampleClassObj.wishEveryOne();

class AbsChildClass extends AbstClass{

}

var absChildObj = new AbsChildClass;
absChildObj.wishEveryOne();

/**
 abstract class is the class for which we can not make instances. 
 To use variables and methods, we need to inherit the class
 */