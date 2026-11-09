const guests = {
  names: ["Ada", "Grace", "Alan"],
  *[Symbol.iterator]() {
    for (const name of this.names) {
      yield name;
    }
  }
};

for (const guest of guests) {
  console.log(guest);
}

console.log("count: " + [...guests].length);
