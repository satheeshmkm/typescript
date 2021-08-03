class Books {
    title: string;
    price: number;
   /**
    * constructor() {
        this.setBookDetails("Robotics", 500);
    }
    setBookDetails(title: string, price: number) {
        this.title = title;
        this.price = price;
    }

     */ 
    constructor(title:string,price:number) {
        this.title=title;
        this.price=price;
    }

    
    getBookDetails() {
        console.log("Book Title is " + this.title + ", Book price is " + this.price);
    }

}

/*var booksObj1 = new Books;
booksObj1.getBookDetails();
*/

var booksObj2 = new Books("Robotics",500);
booksObj2.getBookDetails();
