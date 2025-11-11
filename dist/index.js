"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CarBuilder_1 = require("./CarBuilder");
const builder = new CarBuilder_1.CarBuilder();
const car = builder
    .setModel("Sedan Turbo")
    .setColor("Azul")
    .setEngine("2.0 Turbo")
    .setDoors(4)
    .build();
car.showDetails();
