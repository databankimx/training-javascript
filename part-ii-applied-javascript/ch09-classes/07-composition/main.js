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

const car = new ElectricCar("Nissan", "Leaf", 2024);
console.log(car.describe());
console.log(car.reportBattery());
console.log(car.reportRange());
