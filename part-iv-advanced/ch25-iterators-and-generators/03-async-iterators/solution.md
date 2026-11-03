# Solution

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

The consumer waits for each yielded value, so changing an internal delay affects when the next line appears without changing the loop structure.

---
