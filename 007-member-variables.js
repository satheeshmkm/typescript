var BasicClassTwo = /** @class */ (function () {
    function BasicClassTwo() {
    }
    BasicClassTwo.prototype.sendMessage = function () {
        this.message = "This is TypeScript class";
        console.log(this.message);
    };
    return BasicClassTwo;
}());
var classObj2 = new BasicClassTwo;
classObj2.sendMessage();
