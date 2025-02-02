export class Car {
  #model;
  #color;
  constructor(model, color) {
    this.#model = model;
    this.#color = color;
  }
  get model() {
    return this.#model;
  }

  get color() {
    return this.#color;
  }

  set model(model) {
    this.#model = model;
  }

  set color(color) {
    this.#color = color;
  }

}