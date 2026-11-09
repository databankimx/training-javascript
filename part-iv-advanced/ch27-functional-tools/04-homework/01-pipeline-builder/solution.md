# Solution

```javascript
const pipe = (...functions) => value =>
  functions.reduce((current, fn) => fn(current), value);

const trim = text => text.trim();
const upper = text => text.toUpperCase();
const addInfo = text => "INFO: " + text;
const formatMessage = pipe(trim, upper, addInfo);

console.log(formatMessage(" ready "));
console.log(formatMessage(" saved "));
```

```text
INFO: READY
INFO: SAVED
```

`reduce` passes the current value into the next function, so the order in `pipe(trim, upper, addInfo)` is the order the data experiences. Moving `addInfo` earlier would change what the uppercase step sees.

---
