# `if`, `else if`, and `else`

There are several related forms of conditional control flow. We will build them one at a time, because putting every variation into one giant example is a fine way to make a beginner wonder whether the computer is being deliberately difficult.

## `if` and `else`: two alternatives

Use `else` when exactly one of two outcomes should happen.

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

Because `signedIn` is false, JavaScript skips the first block and runs the `else` block. One of the two messages always runs.

> `else` belongs to the nearest preceding `if` statement. It runs only when that `if` condition is falsy.

---

## One `else if`: add another range

Use `else if` when the first condition is not enough and you need another mutually exclusive possibility.

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

The score is not at least 90, so the first branch is skipped. It is at least 60, so the second branch runs. There is no final `else`, so a score below 60 produces no output. That is useful when the program has no fallback action to take.

---

## Multiple `else if` branches

Add more `else if` branches when the alternatives need several ranges or categories. JavaScript checks them from top to bottom and stops at the first truthy condition.

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

The score is not at least 90, but it is at least 80, so `B` prints and the remaining branches are ignored. The order matters. If the `score >= 70` branch came first, every score of 70 or higher would stop there, including scores that should receive an A or B.

---

## The final `else` is optional

The final `else` is optional. Leave it out when doing nothing is a valid result.

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

This chain handles large and medium orders, but it has no final `else`. An order below 50 produces no output. By contrast, the grade example includes a final `else` because it needs a label for every score. Neither choice is automatically better. The question is whether the program needs a fallback.

---

## Independent `if` statements

Use separate `if` statements when the conditions describe independent facts. More than one check can run, and each check can update its own result.

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

The two checks answer different questions. At age 42, `senior` remains false, while `adult` becomes true. These checks should not be written as one `if` / `else if` chain. An `else if` chain would stop after the first true branch and prevent later independent checks from updating their results.

---

## Try it Yourself

Run each example after changing its inputs. Try a signed-in and signed-out user. Try scores above 90, between 60 and 89, and below 60. Test every grade boundary, including the exact boundary values. Set the order total above 100, between 50 and 99, and below 50. Explain what happens when the chain has no final `else`. Finally, try ages below 18, between 18 and 64, and 65 or above. Explain why separate checks can set both flags to true for a senior adult.

---

## More background

See [MDN: if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else).

---
