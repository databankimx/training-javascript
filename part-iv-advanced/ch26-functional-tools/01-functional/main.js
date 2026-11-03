const compose = (first, second) => value => first(second(value));
const trim = text => text.trim();
const upper = text => text.toUpperCase();

const cleanGreeting = compose(upper, trim);
console.log(cleanGreeting("  hello  "));
