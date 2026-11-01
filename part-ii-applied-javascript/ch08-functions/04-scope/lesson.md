# Function scope

Variables declared inside a function belong to that function. A function can also read values declared outside it, which is useful, but should be done deliberately.

```javascript
const applicationName = "Training app";

function report(topic) {
  const label = `${topic} is reviewing JavaScript`;
  console.log(label);
  console.log(applicationName);
}

report("Ada");
```

> Scope describes where a variable can be accessed.
>
> `label` is local to `report`; code outside the function cannot use that name.
>
> `applicationName` is outside the function, so `report` can read it.

```text
Ada is reviewing JavaScript
Training app
```

Keeping temporary names local prevents unrelated code from accidentally changing them. Prefer passing a value as a parameter when that makes a function easier to understand and test.

---

## Try it Yourself

Try to print `label` after the function call and observe the error. Then pass `applicationName` as a parameter instead of reading it from the outer scope.

---

## More background

See [MDN: Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope).

---
