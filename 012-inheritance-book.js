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
var BookParent = /** @class */ (function () {
    function BookParent() {
    }
    BookParent.prototype.setTitle = function (title) {
        this.title = title;
    };
    BookParent.prototype.setPrice = function (price) {
        this.price = price;
    };
    BookParent.prototype.getTitle = function () {
        return this.title;
    };
    BookParent.prototype.getPrice = function () {
        return this.price;
    };
    return BookParent;
}());
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Book.prototype.setPublisher = function (publisher) {
        this.publisher = publisher;
    };
    Book.prototype.getPublisher = function () {
        return this.publisher;
    };
    return Book;
}(BookParent));
var bookObj = new Book;
bookObj.setTitle("Java");
bookObj.setPrice(100);
bookObj.setPublisher("Durgasoft");
console.log(bookObj.getTitle() + " with Price "
    + bookObj.getPrice() + " is published by " + bookObj.getPublisher());
console.log(bookObj.getTitle);
