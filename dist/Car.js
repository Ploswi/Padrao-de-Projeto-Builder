"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    constructor(model, color, engine, doors) {
        this.model = model;
        this.color = color;
        this.engine = engine;
        this.doors = doors;
    }
    showDetails() {
        console.log(`Modelo: ${this.model}\nCor: ${this.color}\nMotor: ${this.engine}\nPortas: ${this.doors}`);
    }
}
exports.Car = Car;
