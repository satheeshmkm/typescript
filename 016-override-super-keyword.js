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
var Book = /** @class */ (function () {
    function Book() {
    }
    Book.prototype.setBookDetails = function (title, price, country) {
        this.title = title;
        this.price = price;
        this.country = country;
    };
    Book.prototype.printBookDetails = function () {
        console.log("Title : " + this.title + ", price " + this.price);
    };
    return Book;
}());
var CountrySpecificBook = /** @class */ (function (_super) {
    __extends(CountrySpecificBook, _super);
    function CountrySpecificBook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CountrySpecificBook.prototype.printBookDetails = function () {
        if (this.country == "usa") {
            console.log("Title : " + this.title + ", price " + this.price + " dollars");
        }
        else if (this.country == "india") {
            console.log("Title : " + this.title + ", price " + this.price + " rupees");
        }
        else {
            _super.prototype.printBookDetails.call(this);
        }
    };
    return CountrySpecificBook;
}(Book));
var bookObjInd = new CountrySpecificBook;
bookObjInd.setBookDetails("Indian Book", 200, "india");
bookObjInd.printBookDetails();
var bookObjUs = new CountrySpecificBook;
bookObjUs.setBookDetails("American Book", 15, "usa");
bookObjUs.printBookDetails();
var bookObjFr = new Book;
bookObjFr.setBookDetails("French Book", 10, "France");
bookObjFr.printBookDetails();
