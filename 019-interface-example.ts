interface Human{
   // firstName:string="Satheesh"; //TS1246: An interface property cannot have an initializer.
   firstName:string; 
   lastName:string;
    displayFullName();
    displaySirName():string; // Method with return type as string
}

class Person implements Human{
    firstName="Satheesh";
    lastName="CK";
    fatherName="Krishnankutty";
    displayFullName(){
        console.log("Full Name: "+this.firstName + " " +this.lastName);
    }
    displaySirName(){
        return this.lastName;
    }
    displayFatherName(){
        console.log(this.fatherName);
    }
}

var personObj = new Person;
personObj.displayFullName();
console.log(personObj.displaySirName());
personObj.displayFatherName();

var personObj2:Human = new Person;
personObj2.displayFullName();
console.log(personObj2.displaySirName());
//personObj2.displayFatherName(); //TS2339: Property 'displayFatherName' does not exist on type 'Human'.

/*
Interface is blueprint for a class.
We can not create object of interface.
In interface , we can not assign value to the variable.
In interface , we can not write any functionality in function.

In interface we can define variable with their data type and functions with their return type.
The clases that implement this interface should have variables with same data type , methods with same return type. 
Apart from interface variables and methods, implementing class can have extra variables and methods.
*/