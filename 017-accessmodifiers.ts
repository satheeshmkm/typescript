class Human{
    firstName:string;
    lastName:string;
    protected displayName(firstName:string,lastName:string){
        console.log(this.firstName+this.lastName);

    }
}

var humanObj = new Human;
humanObj.firstName="Satheesh";
humanObj.lastName="CK";
console.log(humanObj.firstName);
console.log(humanObj.lastName);

/*
We have 3 access modifiers in Typesript
1) public
2) protected
3) private

public is the default access modifier. Public variables can be accessed directly after instantiation of object. 
public variables and methods can be acceed through inheritance also. 

protected variables and methods  can not be accessed directly after instantiation of  object. 
protected variables and methods can be acceed through inheritance. 

private variables and methods  can not be accessed directly after instantiation of  object. 
private variables and methods can not be accessed through inheritance. 
*/