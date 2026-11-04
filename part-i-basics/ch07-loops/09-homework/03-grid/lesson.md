# Homework: print a grid

Use nested loops to print three rows of four asterisks. Build each row, then print it after the inner loop finishes.

```javascript
const rows = 3;
const columns = 4;

for (let row = 0; row < rows; row += 1) {
  let line = "";
  for (let column = 0; column < columns; column += 1) {
    line += /* one symbol and a space */;
  }
  console.log(line.trim());
}
```

```text
* * * *
* * * *
* * * *
```

---

## Try it Yourself

Change the row and column counts. Then print a numbered multiplication grid instead of asterisks.

### Bonus: build a staircase

Try a Mario-style staircase with five rows. The bottom row should contain five stars, the row above it four, and so on until the top row contains one. Use spaces before the stars so the staircase is right-aligned:

```text
    *
   **
  ***
 ****
*****
```

If you want another variation, print the same staircase in the opposite direction. Think carefully about which loop controls the leading spaces and which loop controls the stars. The point is not to memorize a pattern. It is to describe each row clearly enough that the nested loops can build it.

Use **Show example (spoiler)** after you have tested your nested loops.

---

## More background

See [MDN: Nested loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration).

---
