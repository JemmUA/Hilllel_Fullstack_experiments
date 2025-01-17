"use strict";

//Function Declaration
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2)); // Виведе: 3

//Function Expression
var multiply = function(a, b) {
    return a * b;
};
console.log(multiply(3, 4)); // Виведе: 12

//Arguments
function printArguments() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
printArguments('Hello', 'World', '!'); // Виведе: "Hello", "World", "!"

// Callback functions
function doHomework(subject, callback) {
    console.log(`Починаємо робити домашнє завдання з ${subject}.`);
    callback();
}

doHomework('математики', function() {
    console.log('Не пройшло і пів року - домашнє завдання завершено!');
});

//Асинхронний приклад з setTimeout
function washDishes(timeForDoingDishes, callback) {
    console.log('Починаємо мити посуд :))');
    setTimeout(() => {
        // Припустимо, що миття посуду триває 3 секунди
        callback();
    }, timeForDoingDishes);
}

washDishes(1000, function() {
    console.log('Посуд вимито!');
});