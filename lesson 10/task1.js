/* Завдання 1

Створіть клас "Книга" (Book) з властивостями, такими як "назва", "автор" і "рік видання". Додайте метод до класу Book, який буде виводити повний опис книги наприклад printInfo. Створіть кілька об'єктів цього класу та викличте printInfo для кожного екземпляру.
В окремому файлі створіть клас "Електронна книга" (EBook), який буде успадковувати властивості та методи класу Book. Додайте до класу EBook нову властивість, наприклад, "формат файлу". Сторіть метод printInfo для EBook таким чином щоб друкувалась вся доступна інформація про екземляр EBook (все те саме що і для Book але ще формат файлу). Створіть інстанс (екземпляр) класу EBook та викличте метод printInfo
Геттери та сеттери: Додайте геттери та сеттери для всіх властивостей класу Book та EBook. В сеттерах необхідно додати валідацію для переданих значень. Використовуйте їх для зміни та отримання значень властивостей.
Створіть статичний метод в класі Book, який буде приймати масив об'єктів(екземрлярів) книг та повертати найдавнішу книгу за роком видання. Викличте його в коді передавши масив книг (серед них мають бути екземляри обох класів Book та EBook)
Створіть статичний метод для EBook який буде приймати як аргументи екземпляр класу Book і формат файлу як рядок ****та повертати екземпляр класу EBook */

import  {Book}  from './Book.js';
import  {EBook}  from './EBook.js';

console.log('Book')

const Book1 = new Book('Harry Potter', 'J.k. Rowling', 1997);
const Book2 = new Book('Game of Thrones', 'George R.R. Martin', 1996);

Book1.printInfo();
Book2.printInfo();

console.log('\nEBook')

const EBook1 = new EBook('The Hobbit', 'J.R.R. Tolkien', 1937, 'txt');
const EBook2 = new EBook('1984', 'George Orwell', 1949, 'pdf');

EBook1.printInfo();
EBook2.printInfo();

console.log('\nFind Oldest Book')

const allBooks = [Book1, Book2, EBook1, EBook2];
const oldestBook = Book.findOldestBook(allBooks);
oldestBook.printInfo()

console.log('\nГеттери та сеттери')

const EBook3 = new EBook('', 'None', 2030, 'enum')

EBook3.printInfo();