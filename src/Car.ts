export class Car
{
  model: string;
  color: string;
  engine: string;
  doors: number;

  constructor(model: string, color: string, engine: string, doors: number)
  {
    this.model = model;
    this.color = color;
    this.engine = engine;
    this.doors = doors;
  }

  showDetails(): void
  {
    console.log(`Modelo: ${this.model}\nCor: ${this.color}\nMotor: ${this.engine}\nPortas: ${this.doors}`);
  }
}