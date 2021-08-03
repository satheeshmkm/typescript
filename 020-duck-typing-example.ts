interface FirstHuman{
    firstName:string; 
    lastName:string;
     displayFullName();
 }
 
 class FirstPerson implements FirstHuman{
     firstName="Satheesh";
     lastName="CK";
     displayFullName(){
         console.log("Full Name: "+this.firstName + " " +this.lastName);
     }
 }

 var fpObj = new FirstPerson;
 fpObj.displayFullName();

var humanObj={
    firstName:"Suryan",
    lastName:"Nellikkal",
    displayFullName:function(){
        console.log("Full Name: "+this.firstName + " " +this.lastName);
    }

}

fpObj=humanObj;
fpObj.displayFullName();

