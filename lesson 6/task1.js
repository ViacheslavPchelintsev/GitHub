/* Створіть функцію яка приймає два параметри: width і height.
Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
Реалізуйте функцію трьома способами (function declaration, function expression, arrow function) */

function rectangleArea (width, height) {
    return width * height;
}

 console.log(rectangleArea(5, 10));

    console.log('--------------------');
 
 const rectangleArea2 = function (width, height) {
    return width * height;
 }

 console.log(rectangleArea2(6, 10));

    console.log('--------------------');

const rectangleArea3 = (width, height) => width * height;

    console.log(rectangleArea3(7, 10));