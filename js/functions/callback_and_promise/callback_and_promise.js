console.log("Callback and Promise");

const weatherLink = 'http://api.openweathermap.org/data/2.5/weather?q=KHARKIV&units=metric&APPID=5d066958a60d315387d9492393935c19';

function waitAndRun(ms, callback) {
    console.log('Таймер стартував');
    setTimeout(() => {
        console.log('Таймер завершився');
        callback();
    }, ms);
}

waitAndRun(2000, () => {
    console.log('Callback виконано');
});

// Callback hell
setTimeout(() => {
    console.log('Перший таймер завершився');
    setTimeout(() => {
        console.log('Другий таймер завершився');
        setTimeout(() => {
            console.log('Третій таймер завершився');
        }, 1000);
    }, 1000);
}, 1000);



// Promise
const loadData = new Promise((resolve, reject) => {
    console.log('Завантаження даних почалося');
    setTimeout(() => {
        // Симулюємо успішне завершення асинхронної операції
        resolve('Дані успішно завантажені');
    }, 2000);
});

loadData.then((message) => {
    console.log(message); // Виведе "Дані успішно завантажені" після 2 секунд
}).catch((error) => {
    console.error(error); // Виведе помилку, якщо операція буде відхилена
}).finally(() => {
    console.log('Операція завершена'); // Виконається після завершення Promise, незалежно від результату
});

// XHR
const xhr = new XMLHttpRequest(); // Створення нового екземпляра XHR
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true); // Налаштування запиту

xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        // Перевірка статусу відповіді
        console.log('Відповідь отримано:', xhr.responseText); // Обробка відповіді від сервера
    } else {
        console.error('Запит не вдався:', xhr.statusText); // Обробка помилки запиту
    }
};

xhr.onerror = function() {
    console.error('Помилка запиту'); // Обробка помилки мережі
};

xhr.send(); // Відправлення запиту

// Fetch
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        if (!response.ok) {
            throw new Error('Запит не вдався: ' + response.statusText);
        }
        return response.json(); // Парсинг тіла відповіді як JSON
    })
    .then(data => console.log(data)) // Обробка отриманих даних
    .catch(error => console.error('Помилка:', error)); // Обробка помилок запиту


document.getElementById("something").innerHTML = "Some data";

// await in async
async function getData() {
    const data = await fetch(weatherLink).then(response => response.json());
    console.log("Data:", data);
    document.getElementById("data").innerHTML = data;
}
getData();


// Приклад JSON рядка
const jsonString = '{"name":"John", "age":30, "city":"New York"}';

// Конвертація JSON рядка в JavaScript об'єкт
const jsObject = JSON.parse(jsonString);

console.log(jsObject.name); // Виводить "John"
console.log(jsObject.age);  // Виводить 30
console.log(jsObject.city); // Виводить "New York"

// Конвертація JavaScript об'єкта назад в JSON рядок
const newJsonString = JSON.stringify(jsObject);

console.log(newJsonString); // Виводить '{"name":"John","age":30,"city":"New York"}'