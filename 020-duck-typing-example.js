var FirstPerson = /** @class */ (function () {
    function FirstPerson() {
        this.firstName = "Satheesh";
        this.lastName = "CK";
    }
    FirstPerson.prototype.displayFullName = function () {
        console.log("Full Name: " + this.firstName + " " + this.lastName);
    };
    return FirstPerson;
}());
var fpObj = new FirstPerson;
fpObj.displayFullName();
var humanObj = {
    firstName: "Suryan",
    lastName: "Nellikkal",
    displayFullName: function () {
        console.log("Full Name: " + this.firstName + " " + this.lastName);
    }
};
fpObj = humanObj;
fpObj.displayFullName();
