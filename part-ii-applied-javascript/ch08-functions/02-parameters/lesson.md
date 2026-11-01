# Parameters and arguments

Functions can receive more than one value. The names in the declaration are parameters. The actual values supplied by a call are arguments.

```javascript
function describeTasks(name, count) {
  console.log(`${name} has ${count} tasks`);
}

describeTasks("Ada", 3);
```

> A parameter is the local name declared by a function.
>
> An argument is the value supplied by the caller.

```text
Ada has 3 tasks
```

The call passes `"Ada"` into `name` and `3` into `count`. The parameter order matters because JavaScript matches arguments by position.

---

## Try it Yourself

Add a third parameter for a completed-task count. Call the function with different values and predict the sentence before running it.

---

## More background

See [MDN: Function parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters).

---
