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

  setOdometer(miles) {
    if (miles >= this.odometer) {
      this.odometer = miles;
      return "Odometer updated";
    }

    return "Cannot roll back";
  }
}

const car = new Car("Dodge", "Challenger", 2024);
console.log(car.describe());
console.log(car.readOdometer());
console.log(car.setOdometer(15000));
console.log(car.readOdometer());
console.log(car.setOdometer(12000));
```

```text
2024 Dodge Challenger
Miles: 0
Odometer updated
Miles: 15000
Cannot roll back
```

The odometer starts on each instance, while the methods remain shared through the class prototype. The setter method prevents the ordinary code path from rolling the mileage backward.
---
