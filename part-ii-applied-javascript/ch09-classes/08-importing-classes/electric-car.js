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
