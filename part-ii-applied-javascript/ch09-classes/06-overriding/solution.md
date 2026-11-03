## Solution

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

console.log(new Car().fillGasTank());
console.log(new ElectricCar().fillGasTank());
console.log(new ElectricCar().charge());
```

```text
Gas tank: full
Electric cars do not use a gas tank
Battery: charging
```

The child class keeps the method name but supplies behavior that fits an electric car. The separate `charge()` method adds behavior that only the child needs.
---
