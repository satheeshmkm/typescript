var book = /** @class */ (function () {
    function book() {
    }
    book.prototype.setTitle = function (title) {
        this.title = title;
    };
    book.prototype.setAuthor = function (author) {
        this.author = author;
    };
    book.prototype.setPrice = function (price) {
        this.price = price;
    };
    book.prototype.getTitle = function () {
        console.log(this.title);
    };
    book.prototype.getAuthor = function () {
        console.log(this.author);
    };
    book.prototype.getPrice = function () {
        console.log(this.price);
    };
    return book;
}());
var bookObj = new book;
bookObj.setTitle("TypeScript");
bookObj.setAuthor("Satheesh");
bookObj.getTitle();
bookObj.getAuthor();
