"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarBuilder = void 0;
const Car_1 = require("./Car");
class CarBuilder {
    setModel(model) {
        this.model = model;
        return this;
    }
    setColor(color) {
        this.color = color;
        return this;
    }
    setEngine(engine) {
        this.engine = engine;
        return this;
    }
    setDoors(doors) {
        this.doors = doors;
        return this;
    }
    build() {
        return new Car_1.Car(this.model, this.color, this.engine, this.doors);
    }
}
exports.CarBuilder = CarBuilder;
