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
