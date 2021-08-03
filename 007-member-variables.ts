class BasicClassTwo{
    message:string;
    sendMessage(){
        this.message ="This is TypeScript class";
        console.log(this.message);
    }

}

var classObj2= new BasicClassTwo;
classObj2.sendMessage();

/*
 Notes:
 Member varables can be accessed by all functions in the class.
 public member variables can be accessed directly through the object after instantiation of the class.
 */