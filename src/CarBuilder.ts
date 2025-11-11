import { Car } from "./Car";

interface ICarBuilder
{
  setModel(model: string): this;
  setColor(color: string): this;
  setEngine(engine: string): this;
  setDoors(doors: number): this;
  build(): Car;
}

export class CarBuilder implements ICarBuilder
{
  private model!: string;
  private color!: string;
  private engine!: string;
  private doors!: number;

  setModel(model: string): this
  {
    this.model = model;
    return this;
  }

  setColor(color: string): this
  {
    this.color = color;
    return this;
  }

  setEngine(engine: string): this
  {
    this.engine = engine;
    return this;
  }

  setDoors(doors: number): this
  {
    this.doors = doors;
    return this;
  }

  build(): Car
  {
    return new Car(this.model, this.color, this.engine, this.doors);
  }
}