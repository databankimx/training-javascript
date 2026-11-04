# Solution

```javascript
const label = (prefix, message) => prefix + ": " + message;
const makeLabel = prefix => message => label(prefix, message);

const info = makeLabel("INFO");
const warning = makeLabel("WARNING");
const error = makeLabel("ERROR");

console.log(info("ready"));
console.log(warning("check the input"));
console.log(error("could not save"));
```

```text
INFO: ready
WARNING: check the input
ERROR: could not save
```

`makeLabel` fixes the prefix and returns a function that still needs only the message. The three specialized functions share one implementation, while their allowed labels remain obvious at the call site.

---
