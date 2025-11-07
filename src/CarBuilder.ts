import { Car } from "./Car";

interface ICarBuilder {
  setModel(model: string): this;
  setColor(color: string): this;
  setEngine(engine: string): this;
  setDoors(doors: number): this;
  build(): Car;
}

export class CarBuilder implements ICarBuilder {
  private car: Car;

  constructor() {
    this.car = new Car();
  }

  setModel(model: string): this {
    this.car.model = model;
    return this;
  }

  setColor(color: string): this {
    this.car.color = color;
    return this;
  }

  setEngine(engine: string): this {
    this.car.engine = engine;
    return this;
  }

  setDoors(doors: number): this {
    this.car.doors = doors;
    return this;
  }

  build(): Car {
    return this.car;
  }
}
