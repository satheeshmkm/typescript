var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var OverWriteParent = /** @class */ (function () {
    function OverWriteParent() {
    }
    OverWriteParent.prototype.greetEveryOne = function () {
        console.log("Hello EveryOne");
    };
    return OverWriteParent;
}());
var owParentObj = new OverWriteParent;
owParentObj.greetEveryOne();
var OverWriteChild = /** @class */ (function (_super) {
    __extends(OverWriteChild, _super);
    function OverWriteChild() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OverWriteChild.prototype.greetEveryOne = function () {
        console.log("Hi EveryOne");
    };
    return OverWriteChild;
}(OverWriteParent));
var owChild = new OverWriteChild;
owChild.greetEveryOne();
