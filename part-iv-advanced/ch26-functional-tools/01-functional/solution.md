# Solution

```javascript
const compose = (first, second) => value => first(second(value));
const trim = text => text.trim();
const upper = text => text.toUpperCase();
const punctuate = text => text + "!";

const cleanGreeting = compose(upper, trim);
console.log(punctuate(cleanGreeting("  hello  ")));
```

```text
HELLO!
```

The existing composition handles the two transformations in their required order. `punctuate` is applied after the composed function returns, so the exclamation mark is added to the already-cleaned text.

---
