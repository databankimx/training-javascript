# Function scope

As programs grow, names need boundaries. Variables declared inside a function belong to that function. A function can also read values declared outside it, which is useful, but should be done deliberately because hidden dependencies make code harder to reuse and test.

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
>
> Assignment to a local binding does not change an outer binding with the same name.

```text
Ada is reviewing JavaScript
Training app
```

Keeping temporary names local prevents unrelated code from accidentally changing them. Prefer passing a value as a parameter when that makes a function easier to understand and test. A function that quietly depends on several outer variables may work today and become a small detective story tomorrow.

---

## Local assignment versus shared objects

JavaScript passes an object value to a function. The parameter is a local binding, but the object it refers to can still be changed:

```javascript
function addTag(tags, tag) {
  tags.push(tag);
}

const tags = ["javascript"];
addTag(tags, "beginner");
console.log(tags.join(", "));
```

```text
javascript, beginner
```

The function did not replace the caller's `tags` binding. It used the same array object and changed that object in place. If the original must stay untouched, pass a copy or return a new array:

```javascript
function withTag(tags, tag) {
  return [...tags, tag];
}

const original = ["javascript"];
const updated = withTag(original, "beginner");
console.log(original.join(", "));
console.log(updated.join(", "));
```

```text
javascript
javascript, beginner
```

This is the JavaScript version of the mutable-list surprise that appears in many languages. Decide whether a function is allowed to mutate its input, and make that choice visible in its name, documentation, or return value.

---

## Try it Yourself

Create a local variable inside a function and try to read it outside. Then write one function that mutates an array and a second function that returns a changed copy. Print both original arrays and explain the difference.

---

## More background

See [MDN: Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope), [MDN: Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures), and [MDN: Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions).

---

