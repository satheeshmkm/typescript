var Person = /** @class */ (function () {
    function Person() {
        this.firstName = "Satheesh";
        this.lastName = "CK";
        this.fatherName = "Krishnankutty";
    }
    Person.prototype.displayFullName = function () {
        console.log("Full Name: " + this.firstName + " " + this.lastName);
    };
    Person.prototype.displaySirName = function () {
        return this.lastName;
    };
    Person.prototype.displayFatherName = function () {
        console.log(this.fatherName);
    };
    return Person;
}());
var personObj = new Person;
personObj.displayFullName();
console.log(personObj.displaySirName());
personObj.displayFatherName();
var personObj2 = new Person;
personObj2.displayFullName();
console.log(personObj2.displaySirName());
personObj2.displayFatherName();
