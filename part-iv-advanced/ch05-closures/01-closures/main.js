function makeCounter(start = 0) {
  let value = start;
  return () => ++value;
}
const a = makeCounter(10);
const b = makeCounter();
console.log(a(), a(), b());
