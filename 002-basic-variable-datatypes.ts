var x:number=10;
//x='satheesh';
console.log(x);

var firstName:string='Satheesh';
console.log(firstName);

var userName:string="satheesh123";
console.log(userName);

var isAdded:boolean=true;
var isRemoved:boolean=false;
console.log(isAdded);
console.log(isRemoved);

var sample:undefined;
//sample="Value for undefined";
//sample=10;
//sample=boolean;
sample=undefined;
console.log(undefined);

var sampleNew:null;
//samplenew=20;
//samplenew="20";
//samplenew=true;
//samplenew=undefined; will work
console.log(sampleNew);

var y1:any=25;
y1="25";

var isFound:any=true;


var students:string[] = ["Satheesh","Suryan"];
console.log(students);
console.log(students[1]);

var total:number|string =100;
total="100";
total="Satheesh";
//total=true;

//normal object
var studentObj:any={
    "fName":"Satheesh",
    "age":37
};
console.log("My name is "+studentObj.fName);

//nested object
var nestedStudentObj:any={
    "fName":"Satheesh",
    "age":37,
    "address":{
        "city":"Ernakulam",
        "state":"Kerala"
    }
};

console.log("My name is "+nestedStudentObj.fName+", I am from "+nestedStudentObj.address.state);

//array in object
var arrayStudentObj:any={
    "fName":"Satheesh",
    "age":37,
    "address":{
        "city":"Ernakulam",
        "state":"Kerala"
    },
    "technicalSkills":["Java","SpringBoot"]
};
console.log("My name is "+arrayStudentObj.fName+", I am from "+arrayStudentObj.address.state+", I am a "+arrayStudentObj.technicalSkills[1]+" programmer");
