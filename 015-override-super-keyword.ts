class Book {
    title: string;
    price: number;
    country: string;
    getTitle() {
        return this.title;
    }
    getPrice() {
        return this.price;
    }
    getCountry() {
        return this.country;
    }

    setBookDetails(title: string, price: number, country: string) {
        this.title = title;
        this.price = price;
        this.country = country;
    }
    printBookDetails() {
        console.log("Title : " + this.title);
        console.log("Country : " + this.country);
        this.printPrice();

    }

    printPrice() {
        console.log("Price : " + this.price);
    }
}

class CountrySpecificBook extends Book {
    printBookDetails() {
        console.log("Title : " +this.title);
        console.log("Country : " + this.country);
        if ("INDIA" == this.country) {
            this.printPrice();
        } else if ("US" == this.country) {
            this.printPrice();
        } else {
            super.printPrice();
        }
    }
    printPrice() {
        var unitOfprice: String;
        if ("INDIA" == this.country) {
            unitOfprice = "INR";
        } else if ("US" == this.country) {
            unitOfprice = "$";
        }
        console.log("Price : " + this.price + unitOfprice);
    }

}

var bookObjInd = new CountrySpecificBook;
bookObjInd.setBookDetails("Indian Book", 200, "INDIA");
console.log(bookObjInd.printBookDetails());

var bookObjUs = new CountrySpecificBook;
bookObjUs.setBookDetails("American Book", 15, "US");
console.log(bookObjUs.printBookDetails())

var bookObjFr = new Book;
bookObjFr.setBookDetails("French Book",10,"France");
console.log(bookObjFr.printBookDetails())