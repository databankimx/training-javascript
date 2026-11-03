# Inheritance

Inheritance lets a more specific class reuse the state and behavior of a more general class. An `ElectricCar` is still a `Car`, so it should inherit the description and odometer behavior while adding battery-specific behavior.

> A superclass, or parent class, contains behavior shared by a family of objects.
>
> A subclass, or child class, inherits the parent's methods and can add its own state and methods.
>
> `extends` establishes the parent-child relationship.
>
> `super(...)` calls the parent constructor or method.

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
```

```javascript
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

The child constructor must call `super()` before it uses `this`. That gives the parent constructor a chance to initialize `make`, `model`, `year), and `odometer). The child then adds `batterySize).

Inheritance is one-way. A `Car` instance does not gain `describeBattery()` merely because an `ElectricCar` exists. Put shared behavior on the parent, and keep specialized behavior on the child.

---

## Try it Yourself

Add a `charge()` method to `ElectricCar`. Create a regular `Car) and an `ElectricCar`, then show which methods each object can call.

---

## More background

See [MDN: extends](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends) and [MDN: super](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super).

---
