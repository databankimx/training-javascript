## Solution

### `if` and `else`

```javascript
const signedIn = false;

if (signedIn) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}
```

```text
Access denied
```

The two branches provide a complete choice. Because `signedIn` is false, the first block is skipped and the `else` block supplies the other outcome.

### One `else if`

```javascript
const score = 84;

if (score >= 90) {
  console.log("Excellent");
} else if (score >= 60) {
  console.log("Pass");
}
```

```text
Pass
```

The missing final `else` is intentional. Scores below 60 have no action in this example, so the program simply reaches the end of the chain.

### Multiple `else if` branches

```javascript
const score = 82;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else {
  console.log("Needs more practice");
}
```

```text
B
```

The first matching branch wins, so the order of the thresholds matters. Starting with the highest boundary keeps a score from being captured by a broader, lower range too early.

### Optional final `else`

```javascript
const orderTotal = 120;

if (orderTotal >= 100) {
  console.log("Discount applied");
} else if (orderTotal >= 50) {
  console.log("Free shipping");
}
```

```text
Discount applied
```

This chain handles two ranges and intentionally has no final fallback. Smaller orders produce no output because there is no work to do for them in this particular example. That is a policy choice, not a JavaScript requirement.

### Independent checks

```javascript
const age = 42;
let senior = false;
let adult = false;

if (age >= 65) {
  senior = true;
}

if (age >= 18) {
  adult = true;
}

console.log(senior);
console.log(adult);
```

```text
false
true
```

These are separate facts, so separate `if` statements can update both flags. For a senior adult, both flags would become true. An `else if` chain would be the wrong tool because it would treat the facts as competing alternatives.

---
