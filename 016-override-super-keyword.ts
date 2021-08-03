class Book {
    title: string;
    price: number;
    country: string;


    setBookDetails(title: string, price: number, country: string) {
        this.title = title;
        this.price = price;
        this.country = country;
    }
    printBookDetails() {
        console.log("Title : " + this.title+", price "+this.price);
    }

}

class CountrySpecificBook extends Book {
    printBookDetails() {
       if(this.country=="usa"){
        console.log("Title : " + this.title+", price "+this.price+" dollars");
       }else if(this.country=="india"){
        console.log("Title : " + this.title+", price "+this.price+" rupees");
       }else{
           super.printBookDetails();
       }
    }
    
}

var bookObjInd = new CountrySpecificBook;
bookObjInd.setBookDetails("Indian Book", 200, "india");
bookObjInd.printBookDetails();

var bookObjUs = new CountrySpecificBook;
bookObjUs.setBookDetails("American Book", 15, "usa");
bookObjUs.printBookDetails();

var bookObjFr = new Book;
bookObjFr.setBookDetails("French Book",10,"France");
bookObjFr.printBookDetails();