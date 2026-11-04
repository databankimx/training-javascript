# Values, bindings, and coercion - exercise solution

Here is one reasonable way through this. The important part is deciding what counts as a valid number before doing arithmetic with it.

```javascript
const input = "12.5";
const value = Number(input);

if (input.trim() !== "" && Number.isFinite(value)) {
  console.log(value);
} else {
  console.log("Please enter a finite number");
}
```

```text
12.5
```

`Number(input)` performs the conversion. The empty-string check matters because JavaScript converts an empty string to `0`, which may not be what a form validator means. `Number.isFinite` rejects `NaN` and `Infinity` without performing another surprising conversion.

---

Try the same code with `"apple"`, `"Infinity"`, and `""`. The result should make your input policy visible instead of leaving the next person to reverse-engineer it from a mysterious total.

---
