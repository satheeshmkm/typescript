class book {
    title: string;
    author: string;
    price:number;
    setTitle(title: string) {
        this.title = title;
    }
    setAuthor(author: string) {
        this.author = author;
    }
    setPrice(price:number){
        this.price=price;
    }

    getTitle() {
        console.log(this.title);

    }
    getAuthor() {
        console.log(this.author);
    }
    getPrice(){
        console.log(this.price);
    }
}

var bookObj = new book;
bookObj.setTitle("TypeScript");
bookObj.setAuthor("Satheesh");

bookObj.getTitle();
bookObj.getAuthor();