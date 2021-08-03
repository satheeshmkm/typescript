var Books = /** @class */ (function () {
    /**
     * constructor() {
         this.setBookDetails("Robotics", 500);
     }
     setBookDetails(title: string, price: number) {
         this.title = title;
         this.price = price;
     }
 
      */
    function Books(title, price) {
        this.title = title;
        this.price = price;
    }
    Books.prototype.getBookDetails = function () {
        console.log("Book Title is " + this.title + ", Book price is " + this.price);
    };
    return Books;
}());
/*var booksObj1 = new Books;
booksObj1.getBookDetails();
*/
var booksObj2 = new Books("Robotics", 500);
booksObj2.getBookDetails();
