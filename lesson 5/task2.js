/* Якщо середня оцінка менше 60, вивести "Незадовільно".
Якщо середня оцінка від 60 до 70 (включно), вивести "Задовільно".
Якщо середня оцінка від 71 до 80 (включно), вивести "Добре".
Якщо середня оцінка від 81 до 90 (включно), вивести "Дуже добре".
Якщо середня оцінка від 91 до 100 (включно), вивести "Відмінно". */

const averageGrade = 3;

switch (true) {
    case averageGrade < 60:
        console.log("Незадовільно");
        break;
    case averageGrade >= 60 && averageGrade <= 70:
        console.log("Задовільно");
        break;
    case averageGrade >=71 && averageGrade <= 80:
        console.log("Добре");
        break;
    case averageGrade >= 82 && averageGrade <= 90:
        console.log ("Дуже добре");
        break;
    case averageGrade >=91 && averageGrade <= 100:
        console.log("Відмінно");
        break;
}