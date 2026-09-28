/* console.log("Class Book"); */

export class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        if (value === null || value === undefined) {
            console.log("Title is null");
            return;
        }
        if (typeof value !== "string" || value.trim().length === 0) {
            console.log("Title is empty");
            return;
        }
        this._title = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        if (value === null || value === undefined) {
            console.log("Author is null");
            return;
        }
        if (typeof value !== "string" || value.trim().length === 0) {
            console.log("Author is empty");
            return;
        }
        this._author = value;
    }


    get year() {
        return this._year;
    }

    set year(value) {
        if (!Number.isInteger(value) || value < 0 || value > new Date().getFullYear()) {
            console.log("Incorrect year");
            return;
        }
        this._year = value;
    }


    printInfo() {
        console.log(`INFO: Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
    }

    static findOldestBook(books) {
        if (!Array.isArray(books) || books.length === 0)
            return console.log("No books available")

        let oldestBook = books[0];

        for (let i = 1; i < books.length; i++) {
            if (books[i].year < oldestBook.year) {
                oldestBook = books[i];
            } 
        }
          return oldestBook;
    }
}

/* const Book1 = new Book('Harry Potter', 'J.k. Rowling', 1997);
const Book2 = new Book('Game of Thrones', 'George R.R. Martin', 1996);

Book1.printInfo();
Book2.printInfo();

const allBooks = [Book1, Book2];
const oldestBook = Book.findOldestBook(allBooks);
oldestBook.printInfo() */