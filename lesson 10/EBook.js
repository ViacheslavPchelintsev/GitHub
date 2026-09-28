/* console.log("Class EBook"); */

import { Book } from './Book.js';

export class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this.fileFormat = fileFormat;
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(value) {
        const formats = ['pdf', 'doc', 'docx', 'txt', 'fb2'];
        if (typeof value !== "string" || !formats.includes(value.toLowerCase())) {
            throw new Error(`Invalid format. Valid formats ${formats}`)
        }
        this._fileFormat = value.toLowerCase();
    }

    printInfo() {
        console.log(`INFO: Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, File Format: ${this.fileFormat}`)
    }
}

/* const EBook1 = new EBook('Harry Potter', 'J.k. Rowling', 1997, 'PDF');
const EBook2 = new EBook('Game of Thrones', 'George R.R. Martin', 1996, 'Doc');

EBook1.printInfo();
EBook2.printInfo(); */