# Throwing validation errors

A function should reject invalid input close to where the problem appears. Throwing an `Error` lets the caller decide whether to show a message, retry, or stop.

```javascript
function welcome(person) {
  if (!person.name) {
    throw new Error("Name is required");
  }
  return `Welcome, ${person.name}`;
}

for (const person of [{ name: "Ada" }, {}]) {
  try {
    console.log(welcome(person));
  } catch (error) {
    console.log(error.message);
  }
}
```

> Validation checks whether a value meets the rules needed by an operation.
>
> A thrown error transfers control to the nearest matching `catch` block.

```text
Welcome, Ada
Name is required
```

The function accepts the first object and rejects the second. The caller handles both cases in one loop, keeping the validation rule inside the function that needs it.

---

## Try it Yourself

Require a non-empty string and reject a name made only of spaces. Add a second validation rule and give it a different message.

---

## More background

See [MDN: Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error).

---
