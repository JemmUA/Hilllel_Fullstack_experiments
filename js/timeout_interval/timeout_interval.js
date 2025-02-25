// setTimeout (callback, delay, parameter1, parameter2, ...);
// clearTimeout(timeoutId);

const timeout = 3000;
function sayHello() {
    console.log("Hello, World!");
}
const timeoutId = setTimeout(sayHello, timeout);
clearTimeout(timeoutId);

// setInterval(callback, delay, parameter1, parameter2, ...parameters);

let counter = 0;

const countInterval = setInterval(count, 1000);

function count() {
    console.log("Count:", counter++);
    if (counter > 10) {
        clearInterval(countInterval);
        console.log("Stop");
    }
}