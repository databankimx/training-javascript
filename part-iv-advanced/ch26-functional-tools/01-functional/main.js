const compose = (first, second) => value => first(second(value));
const trim = text => text.trim();
const upper = text => text.toUpperCase();

const cleanGreeting = compose(upper, trim);
console.log(cleanGreeting("  hello  "));

const pipe = (...functions) => value =>
  functions.reduce((current, fn) => fn(current), value);

const pipedGreeting = pipe(trim, upper);
console.log(pipedGreeting("  hello  "));
