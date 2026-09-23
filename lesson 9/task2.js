/* Завдання 2
Створіть об'єкт book з такими властивостями:
title: рядок, представляє назву книги.
author: рядок, представляє автора книги.
year: рядок, представляє ім'я власника автомобіля
Деструктуризуйте назву та автора книги з об'єкта book.
Виведіть деструктуризовані змінні в консоль */

const book = {
    title: 'Harry Potter',
    author: 'Rowling',
    year: 1997
}

const {title, author, year} = book;

console.log(title);
console.log(author);