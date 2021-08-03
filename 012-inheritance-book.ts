class BookParent {
    title: string;
    price: number;
    setTitle(title: string) {
        this.title = title;
    }
    setPrice(price: number) {
        this.price = price;
    }
    getTitle() {
        return this.title;
    }
    getPrice() {
        return this.price;
    }
}

class Book extends BookParent {
    publisher: string;
    setPublisher(publisher: string) {
        this.publisher = publisher;
    }
    getPublisher() {
        return this.publisher
    }
}

var bookObj = new Book;
bookObj.setTitle("Java");
bookObj.setPrice(100);
bookObj.setPublisher("Durgasoft")

console.log(bookObj.getTitle() + " with Price "
    + bookObj.getPrice() + " is published by " + bookObj.getPublisher());
// console.log(bookObj.getTitle); this will print [Function (anonymous)] 