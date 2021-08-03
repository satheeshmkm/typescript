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
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.getPrice = function () {
        return this.price;
    };
    Book.prototype.getCountry = function () {
        return this.country;
    };
    Book.prototype.setBookDetails = function (title, price, country) {
        this.title = title;
        this.price = price;
        this.country = country;
    };
    Book.prototype.printBookDetails = function () {
        console.log("Title : " + this.title);
        console.log("Country : " + this.country);
        this.printPrice();
    };
    Book.prototype.printPrice = function () {
        console.log("Price : " + this.price);
    };
    return Book;
}());
var CountrySpecificBook = /** @class */ (function (_super) {
    __extends(CountrySpecificBook, _super);
    function CountrySpecificBook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CountrySpecificBook.prototype.printBookDetails = function () {
        console.log("Title : " + this.title);
        console.log("Country : " + this.country);
        if ("INDIA" == this.country) {
            this.printPrice();
        }
        else if ("US" == this.country) {
            this.printPrice();
        }
        else {
            _super.prototype.printPrice.call(this);
        }
    };
    CountrySpecificBook.prototype.printPrice = function () {
        var unitOfprice;
        if ("INDIA" == this.country) {
            unitOfprice = "INR";
        }
        else if ("US" == this.country) {
            unitOfprice = "$";
        }
        console.log("Price : " + this.price + unitOfprice);
    };
    return CountrySpecificBook;
}(Book));
var bookObjInd = new CountrySpecificBook;
bookObjInd.setBookDetails("Indian Book", 200, "INDIA");
console.log(bookObjInd.printBookDetails());
var bookObjUs = new CountrySpecificBook;
bookObjUs.setBookDetails("American Book", 15, "US");
console.log(bookObjUs.printBookDetails());
var bookObjFr = new Book;
bookObjFr.setBookDetails("French Book", 10, "France");
console.log(bookObjFr.printBookDetails());
