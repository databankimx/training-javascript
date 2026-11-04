# Overriding inherited methods

Inheritance is useful only when the inherited behavior still makes sense. If a parent class has a method that does not fit a child, the child can define a method with the same name. The child method overrides the inherited one for child instances.

A gas-powered car and an electric car do not share the same way to “fill the tank”:

```javascript
class Car {
  fillGasTank() {
    return "Gas tank: full";
  }
}

class ElectricCar extends Car {
  fillGasTank() {
    return "Electric cars do not use a gas tank";
  }

  charge() {
    return "Battery: charging";
  }
}
```

```javascript
console.log(new Car().fillGasTank());
console.log(new ElectricCar().fillGasTank());
console.log(new ElectricCar().charge());
```

```text
Gas tank: full
Electric cars do not use a gas tank
Battery: charging
```

> Overriding means a subclass provides a method with the same name as an inherited method.
>
> JavaScript chooses the child method for a child instance.
>
> A child can still call the parent implementation with `super.methodName()` when it wants to extend rather than replace the behavior.

Overriding is a design decision, not a license to make every subclass behave unpredictably. If a child must override almost everything, the parent may be too specific or the inheritance relationship may be the wrong model.

---

## Try it Yourself

Add a `describePowerSource()` method to `Car`, then override it in `ElectricCar`. Try calling the parent implementation from the child with `super.describePowerSource()` before adding child-specific text.

---

## More background

See [MDN: Method definitions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions).

---
