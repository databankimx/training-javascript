# `for...of` and array values

When the important thing is each value in an array, `for...of` is usually clearer than managing an index yourself. If you do not need the position, there is no prize for carrying one around.

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

The loop variable contains the current color. No index arithmetic is needed, which removes one opportunity for an off-by-one mistake. Use a regular `for` loop when the index itself matters, and use `for...of` when the value is the point of the exercise.

If you know C#, `for...of` is the closest JavaScript equivalent to `foreach (var color in colors)`. If you know Python, it is the familiar `for color in colors:` shape. The syntax is different, but the idea is the same: give me each value in the collection, in order, and let me work with it.

---

## Try it Yourself

Loop through a list of names and greet each one. Then use a `for` loop to print the same values with their indexes and compare the two approaches.

---

## More background

See [MDN: for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of).

---
