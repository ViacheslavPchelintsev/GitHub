/* В цьому завданні вам потрібно використовувати then() та catch() для обробки результатів виконання промісу

Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
Copy code
<https://jsonplaceholder.typicode.com/todos/1>
Функція повинна повертати як результат Promise що повертає об’єкт todo
Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
Copy code
<https://jsonplaceholder.typicode.com/users/1>
Функція повинна повертати як результат Promise що повертає об’єкт user
Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з викликами функцій з п.п. 1-2. Присвойте значення отримані від цих виразів до змінних */

const Promise1 = new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
})
    .then(todo => {
        console.log('Todo:', todo)
        console.log(`------------------------------------`);
        return todo;
    })
    .catch(error => {
        console.error('Error todo:', error);
    });

const Promise2 = new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
})
    .then(user => {
        console.log('User:', user);
        console.log(`------------------------------------`);
        return user;
    })
    .catch(error => {
        console.error('Error user:', error);
    });

    const promiseAll = Promise.all([Promise1, Promise2]);
    promiseAll.then(([todo, user]) => {
        console.log('Promise.all results:');
        console.log('Todo:', todo);
        console.log('User:', user);
        console.log(`------------------------------------`);
    }).catch(error => {
        console.error('Error Promise.all:', error);
    });

    const promiseRace = Promise.race([Promise1, Promise2]).then(result => {
        console.log('Promise.race result:');
        console.log('First:', result);
        console.log(`------------------------------------`);
    }).catch(error => {
        console.error('Error Promise.race:', error);
    });

