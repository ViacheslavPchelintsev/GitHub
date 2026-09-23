/* Завдання 5
Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
Зробіть деструктуризацію в циклі */

const users = [
  {
    name: "Олександр",
    surname: "Шевченко",
    email: "olexander@example.com",
    hobbies: ["футбол", "програмування"]
  },
  {
    name: "Марія",
    age: 24,
    hobbies: ["малювання", "йога"]
  },
  {
    email: "dmytro@example.com",
    age: 31,
    car: "BMW"
  }
];

for (const {name, surname, age, email, hobbies, car} of users){
    const userName = name ?? 'No name';
    const userSurname = surname ?? 'No surname';
    const userAge = age ?? 'No age';
    const userEmail = email ?? 'No email';
    const userHobbies = hobbies ?? 'No hobbies';
    const userCar = car ?? 'No car';
    console.log (`Ім'я: ${userName}, Прізвище: ${userSurname}, Вік: ${userAge}, Email: ${userEmail}, Хобби: ${userHobbies}, Машина: ${userCar}`)
}
