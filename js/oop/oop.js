"use strict";
let carCounter = 0;
class Car {
  serial = 0;
  constructor(model, color, tyresType) {
    this.model = model;
    this.color = color;
    this.tyresType = tyresType;
    carCounter += 1;
  }

  go (){
    console.log(`${this.model} is going`);
  }
  //
  // set tyresType(tyresType){
  //   this.tyresType = tyresType;
  // }
  //
  // get tyresType(){
  //   return this.tyresType;
  // }

static showCarCounter() {
    console.log(`Car\'s amount is ${carCounter}`)
  }
  static honk(beep) {
    console.log(beep);
}
}

const alfaCar = new Car("Audi", "green", "rain");

console.log(alfaCar.go());


class HyperCar extends Car { // class Ім'я тіло {}
  constructor (model, color, wing, tyresType) { // конструктор
    super(model, color, tyresType); // в першу чергу викликаємо конструктор батьківського класу командою super
    this.model =model;
    this.color = color;
    this.wing = wing;
    this.tyresType = tyresType;
  }

  wingType (){
    console.log(`${this.model} with ${this.wing} wing`);
  }
}

const hyperTachka = new HyperCar("Toyota", "white", "rear", "medium");
const hyperTochilo = new HyperCar("McLaren", "red", "front", "hard");

console.log(hyperTachka);
console.log(alfaCar);
console.log(hyperTachka.go());
Car.honk("Faaafaaa");
HyperCar.honk("Faaafaaa");
hyperTachka.wingType();
hyperTochilo.wingType();
Car.showCarCounter()
HyperCar.showCarCounter()