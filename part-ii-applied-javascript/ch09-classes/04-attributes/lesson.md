# Class and instance attributes

Classes are useful because they keep related data and behavior together. The data stored on one object is its state. In this lesson, we will give each car its own descriptive fields and an odometer, then put the rules for reading and changing that odometer on the class.

A property assigned through `this` belongs to the instance being constructed:

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
```

> An instance property is state stored on one particular object.
>
> `this` refers to the instance whose method or constructor is running.
>
> The constructor gives every new instance its starting state.

The `Car` class does not store one odometer for every car. Each call to `new Car()` creates a separate `odometer` property initialized to zero.

---

## Controlling changes

JavaScript allows direct property assignment, so this would bypass any rule:

```javascript
car.odometer = -1000;
```

That is legal JavaScript, but it is not sensible car data. A method can enforce the rule in one place:

```javascript
setOdometer(miles) {
  if (miles >= this.odometer) {
    this.odometer = miles;
    return "Odometer updated";
  }

  return "Cannot roll back";
}
```

```javascript
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

The method is not security. Another developer can still assign `car.odometer` directly. It is a clear, reusable place for the normal business rule, which is usually what we need.

---

## Try it Yourself

Add an `incrementOdometer(miles = 1)` method. Reject zero or negative increments, create two cars, and prove that changing one car's odometer does not change the other.

---

## More background

See [MDN: Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) and [MDN: this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this).

---
