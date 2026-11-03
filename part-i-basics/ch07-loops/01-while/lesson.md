# `while` loops

Loops repeat a block of code. That is useful when a task has a natural stopping condition, such as reading records until there are no more, retrying a request, or walking through a queue of work.

A `while` loop checks its condition before each pass, then runs the block while that condition is truthy. Because the check happens first, it is perfectly possible for a `while` loop to run zero times.

```javascript
let count = 1;

while (count <= 3) {
  console.log(count);
  count++;
}
```

> The loop condition decides whether another pass should run.
>
> The update changes the value used by the condition. `count++` adds one to `count`; `count += 1` would do the same thing and can be clearer when the increment is not exactly one.
>
> A `while` loop can use any condition that becomes truthy or falsy. It does not have to count numbers.

```text
1
2
3
```

JavaScript checks `count <= 3`, prints the current value, and adds one. When `count` becomes 4, the condition is false, so the loop ends. The update is not a decorative detail. It moves the program toward the stopping condition.

---

## A non-numeric condition

A loop can continue until it sees a particular value. This example uses a flag, which is a boolean variable that records whether the loop should continue:

```javascript
const messages = ["first message", "second message", "quit"];
let active = true;
let index = 0;

while (active) {
  const message = messages[index];

  if (message === "quit") {
    active = false;
  } else {
    console.log(message);
    index++;
  }
}

console.log(`Loop active: ${active}`);
```

```text
first message
second message
Loop active: false
```

The flag makes the stopping rule visible. The loop does not print `quit`; it uses that value as a command to stop. In an interactive program, `message` might come from a prompt or a form field instead of a fixed array.

> A flag is a boolean variable whose value records a state, such as whether a loop is still active.
>
> An infinite loop is a loop whose condition never becomes false. Always identify the update or event that ends a `while` loop.

If a loop can become infinite while you are testing it, stop the program with the runner's Stop button. Computers are very committed to following instructions, even bad ones.

---

## Removing items safely

A `for...of` loop can skip values when `splice()` shifts an array while the loop is walking it. A `while` loop can handle that job deliberately because its condition is based on the changing collection:

```javascript
const numbers = [1, 2, 3, 4, 5];

while (numbers.length > 0) {
  console.log(numbers.shift());
}

console.log(`Remaining: ${numbers.length}`);
```

```text
1
2
3
4
5
Remaining: 0
```

Each pass removes the first item, and the next condition checks the new length. Nothing is skipped. This is a clear pattern for draining a queue, although repeated `shift()` calls can be expensive for very large arrays. A head index or a queue data structure is better when performance matters.

---

## Try it Yourself

Change the counter so the loop counts down. Build a flag-based loop that stops when it encounters a sentinel value such as `"done"`. Then remove every item from an array with a `while` loop and explain why this is safer than splicing the same array inside `for...of`.

---

## More background

See [MDN: while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while) and [MDN: Increment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment).

---

