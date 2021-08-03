class Test {
    firstName: string = "Satheesh";
    private lastName: string;
    readonly fatherName: string = "Krishnankutty";
    readonly initial: string = "CK";
    setLastName() {
        this.lastName = "CK";
    }
    /*setFatherName(){
        this.fatherName="Krishnankutty"; //Readonly property's value can be changed only by constructor
    }
    */
    constructor() {
        this.initial = "ABC"
    }
}

    var testObj= new Test;
    testObj.firstName="Suryan";
    console.log(testObj.firstName);
    testObj.setLastName();
   