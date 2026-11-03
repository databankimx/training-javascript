## Solution

```javascript
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.odometer = 0;
  }

  describe() {
    return `${this.year} ${this.make} ${this.model}`;
  }

  readOdometer() {
    return `Miles: ${this.odometer}`;
  }
}

class ElectricCar extends Car {
  constructor(make, model, year, batterySize = 75) {
    super(make, model, year);
    this.batterySize = batterySize;
  }

  describeBattery() {
    return `Battery: ${this.batterySize} kWh`;
  }
}

const car = new ElectricCar("Nissan", "Leaf", 2024);
console.log(car.describe());
console.log(car.describeBattery());
console.log(car.readOdometer());
```

```text
2024 Nissan Leaf
Battery: 75 kWh
Miles: 0
```

`extends` supplies the inherited behavior, and `super()` initializes the parent state before the child adds its battery property.
---
