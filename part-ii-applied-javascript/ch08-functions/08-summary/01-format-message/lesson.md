# Homework: format a message

Write a function that returns a sentence about a person's task count. Use a default of zero when the caller omits the count.

```javascript
function taskMessage(name, count = /* default */) {
  return `${name} has ${count} tasks`;
}

console.log(taskMessage("Ada", 3));
console.log(taskMessage("Grace"));
```

```text
Ada has 3 tasks
Grace has 0 tasks
```

---

## Try it Yourself

Complete the default value. Add a third call with an explicit zero and explain why it matches the omitted argument in this example.

Use **Show example (spoiler)** after you have tested your function.

---

## More background

See [MDN: Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters).

---
