# `for...of` and array values

When the important thing is each value in an array, `for...of` is usually clearer than managing an index yourself.

```javascript
const colors = ["red", "green", "blue"];

for (const color of colors) {
  console.log(color);
}
```

> `for...of` assigns each value from an iterable to the loop variable, one pass at a time.
>
> An array is iterable, so `for...of` visits its values in order.

```text
red
green
blue
```

The loop variable contains the current color. No index arithmetic is needed, which removes one opportunity for an off-by-one mistake.

---

## Try it Yourself

Loop through a list of names and greet each one. Then use a `for` loop to print the same values with their indexes and compare the two approaches.

---

## More background

See [MDN: for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of).

---
