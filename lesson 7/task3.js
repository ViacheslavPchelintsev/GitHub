/* Створіть функцію divide, яка приймає два параметри: numerator і denominator та повертає як результат виконання число отримане від ділення.
У функції треба поділити numerator на denominator і повернути результат.
Додайте валідацію в функції. У разі,
якщо denominator дорівнює 0
або хоча б один з аргументів не є числом, викиньте помилку з інформативним повідомленням,
Викличте функцію divide з різними значеннями numerator і denominator, включаючи випадок, коли denominator дорівнює 0 або один з аргументів не є числом.
Огорніть кожен окремий виклик функції divide в try…catch.Використовуючи блок finally, виведіть повідомлення "Робота завершена" в консоль, навіть якщо помилка виникла або не виникла. */

function divide (numerator , denominator) {
    try {
        let result = numerator / denominator;
        console.log(numerator / denominator);
        if (result === Infinity || isNaN(result))
        {throw error}
return numerator / denominator;
 }
    catch (error) 
     {
 console.log (denominator === 0 ? "Error: Denominator by zero" : "Error: Denominator by not a number");
    }
    finally {
console.log("Робота завершена");
    }
}

divide (10,5);
divide (10,"lol");
divide (10,0)