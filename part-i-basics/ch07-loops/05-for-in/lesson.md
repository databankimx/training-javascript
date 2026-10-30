# `for...in` and object properties

`for...in` visits the enumerable property names of an object. That makes it useful when the names themselves are what we need to inspect.

```javascript
const person = { name: "Ada", role: "analyst" };

for (const propertyName in person) {
  console.log(propertyName, person[propertyName]);
}
```

> `for...in` assigns each property name to the loop variable.
>
> Bracket notation, `person[propertyName]`, reads the value whose name is stored in `propertyName`.
>
> Use `for...of` for array values. `for...in` is about property names, and using it on arrays can produce surprising results.

```text
name Ada
role analyst
```

The loop first receives `name`, then `role`. Bracket notation uses each name to retrieve its matching value.

---

## Try it Yourself

Add two properties to the object. Print each property name and value. Then try `for...in` on an array and compare it with `for...of`.

---

## More background

See [MDN: for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in).

---
