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

The two branches provide a complete choice.

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

The missing final `else` is intentional. Scores below 60 have no action in this example.

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

The first matching branch wins, so the order of the thresholds matters.

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

This chain handles two ranges and intentionally has no final fallback. Smaller orders produce no output.

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

These are separate facts, so separate `if` statements can update both flags. For a senior adult, both flags would become true.

---
