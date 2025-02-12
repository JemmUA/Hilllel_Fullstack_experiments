import {Car} from './Car.js';
console.log("Hello World!");

const myCar = new Car("Audi", "green");
console.log(`${myCar.color[0].toUpperCase()}${myCar.color.substring(1)} ${myCar.model} is ready for driving`);
