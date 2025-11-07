import { CarBuilder } from "./CarBuilder";

const builder = new CarBuilder();
const car = builder
  .setModel("Sedan Turbo")
  .setColor("Azul")
  .setEngine("2.0 Turbo")
  .setDoors(4)
  .build();

car.showDetails();
