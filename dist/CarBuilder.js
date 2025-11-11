"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarBuilder = void 0;
const Car_1 = require("./Car");
class CarBuilder {
    constructor() {
        this.car = new Car_1.Car();
    }
    setModel(model) {
        this.car.model = model;
        return this;
    }
    setColor(color) {
        this.car.color = color;
        return this;
    }
    setEngine(engine) {
        this.car.engine = engine;
        return this;
    }
    setDoors(doors) {
        this.car.doors = doors;
        return this;
    }
    build() {
        return this.car;
    }
}
exports.CarBuilder = CarBuilder;
