# Importing classes from modules

Classes can be exported and imported just like functions. Splitting a model across files keeps each file manageable and makes the dependency visible at the top of the consumer file.

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
```

```javascript
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

Importing only `ElectricCar` is enough for the consumer to use inherited `Car) behavior and the composed `Battery) behavior. The names do not all have to be imported into `main.js); the module assembles the model internally.

---

## Try it Yourself

Export a second class from the module and import it in `main.js). Try a namespace import as a comparison, then return to an explicit named import.

---

## More background

See [MDN: export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) and [MDN: import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import).

---
