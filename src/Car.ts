export class Car
{
  public model!: string;
  public color!: string;
  public engine!: string;
  public doors!: number;

  public showDetails(): void
  {
    console.log(`Modelo: ${this.model}\nCor: ${this.color}\nMotor: ${this.engine}\nPortas: ${this.doors}`);
  }
}
