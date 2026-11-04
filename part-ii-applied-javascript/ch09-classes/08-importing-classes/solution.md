## Solution

```javascript
// electric-car.js
export class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  describe() {
    return `${this.year} ${this.make} ${this.model}`;
  }
}

export class Battery {
  constructor(size = 75) {
    this.size = size;
  }

  describe() {
    return `Battery: ${this.size} kWh`;
  }
}

export class ElectricCar extends Car {
  constructor(make, model, year) {
    super(make, model, year);
    this.battery = new Battery();
  }

  reportBattery() {
    return this.battery.describe();
  }
}

// main.js
import { ElectricCar } from "./electric-car.js";

const car = new ElectricCar("Nissan", "Leaf", 2024);
console.log(car.describe());
console.log(car.reportBattery());
```

```text
2024 Nissan Leaf
Battery: 75 kWh
```

The module exports three classes, but the consumer imports only `ElectricCar). Its parent and composed battery classes remain implementation details of the module.
---
