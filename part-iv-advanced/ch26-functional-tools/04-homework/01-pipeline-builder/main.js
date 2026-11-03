const pipe = (...functions) => value =>
  functions.reduce((current, fn) => fn(current), value);

const trim = text => text.trim();
const upper = text => text.toUpperCase();
const addInfo = text => "INFO: " + text;
const formatMessage = pipe(trim, upper, addInfo);

console.log(formatMessage(" ready "));
console.log(formatMessage(" saved "));
