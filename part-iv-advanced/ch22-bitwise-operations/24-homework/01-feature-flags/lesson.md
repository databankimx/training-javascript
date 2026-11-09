# Homework: feature-flag mask

Build a small feature-flag system using named masks. Start with three features: DARK, COMPACT, and BETA.

```javascript
const DARK = 1;
const COMPACT = 2;
const BETA = 4;

let settings = DARK | COMPACT;
console.log(Boolean(settings & DARK));
```

This is only the starting point. Complete the rest of the exercise below.

```text
true
```

Your program should:

- combine DARK and COMPACT into one settings value,
- report whether each feature is enabled,
- grant BETA,
- remove COMPACT, and
- print the final decimal and binary values.

Do not use an object of Boolean properties for the main exercise. The point is to practice masks, even though an object may be the clearer design in ordinary application code.

## Try it Yourself

Write the program from scratch, run it, and explain each operation. Then add a fourth feature and test it.

The finished shape should report the enabled features, but the implementation is yours. Do not open Solution until you have a working attempt.

---
