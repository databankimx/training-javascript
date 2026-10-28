class Counter {
  #value = 0;
  increment() {
    this.#value++;
  }
  get value() {
    return this.#value;
  }
}
const first = new Counter();
const second = new Counter();
first.increment();
console.log(first.value, second.value);
console.log(Object.getPrototypeOf(first) === Counter.prototype);
