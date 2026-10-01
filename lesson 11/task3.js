/* Виконайте завдання 2 але використовуючи конструкцію async/await для функції що виконує запити */

async function Todo() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const todo = await response.json();
    return todo;
}

async function User() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await response.json();
    return user;
}

async function PromiseAll() {
    try {
        const [todo, user] = await Promise.all([Todo(), User()]);
        console.log('Todo:', todo);
        console.log('User:', user);
    } catch (error) {
        console.error('Error Promise.all:', error);
    }
}

async function PromiseRace() {
    try {
        const result = await Promise.race([Todo(), User()]);
        console.log('First:', result);
    } catch (error) {
        console.error('Error Promise.race:', error);
    }
}

PromiseAll();
PromiseRace();