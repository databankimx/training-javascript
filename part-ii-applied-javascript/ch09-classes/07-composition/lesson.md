# Composition: classes as properties

Inheritance is not the only way to reuse a class. Composition builds a larger object by giving it another object as a property. An electric car has a battery, so the car can delegate battery-specific work to a `Battery) instance instead of inheriting every battery method.

> Composition means building an object from other cooperating objects.
>
> A composed object owns or uses another object through a property.
>
> Prefer composition when the relationship is “has a” rather than “is a.”

```javascript
class Battery {
  constructor(size = 75) {
    this.size = size;
  }

  describe() {
    return `Battery: ${this.size} kWh`;
  }

  range() {
    return this.size === 75 ? 260 : 315;
  }
}

class ElectricCar {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.battery = new Battery();
  }

  describe() {
    return `${this.year} ${this.make} ${this.model}`;
  }

  reportBattery() {
    return this.battery.describe();
  }

  reportRange() {
    return `Range: ${this.battery.range()} miles`;
  }
}
```

```javascript
const car = new ElectricCar("Nissan", "Leaf", 2024);
console.log(car.describe());
console.log(car.reportBattery());
console.log(car.reportRange());
```

```text
2024 Nissan Leaf
Battery: 75 kWh
Range: 260 miles
```

The car has a battery. It is not a battery, so inheritance would describe the relationship badly. The car delegates battery work through `this.battery). This keeps each class focused and makes the battery reusable in another model.

---

## Try it Yourself

Add an `upgrade()` method to `Battery` that changes a 75-kWh battery to 100 kWh. Call it through the car, then report the new range.

---

## More background

See [MDN: Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).

---
