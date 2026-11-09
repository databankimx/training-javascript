# Asynchronous iteration

Some values arrive later because they depend on a timer, a file, a network response, or a stream. An async generator lets us keep the same one-value-at-a-time idea while allowing each `yield` to wait.

```javascript
const wait = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

async function* messages() {
  await wait(10);
  yield "first";
  await wait(10);
  yield "second";
  await wait(10);
  yield "third";
}

for await (const message of messages()) {
  console.log("received: " + message);
}
```

```text
received: first
received: second
received: third
```

The `async` keyword allows the generator to wait. `for await...of` waits for each next result before running the loop body. This is different from launching three unrelated requests and hoping their completion order happens to match the order we wrote them.

> An async iterable supplies promises for its next values. `for await...of` consumes those values in sequence, waiting when necessary without blocking the entire JavaScript runtime.

## Try it Yourself

Give the second message a longer delay. The loop still prints messages in the order the generator yields them. Then add a fourth message and predict how many pauses occur before the loop finishes.

---
