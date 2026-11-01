# Arrow functions

Arrow functions are a newer syntax for writing functions. They are especially common when a small function is passed to another function.

```javascript
function doubleWithKeyword(value) {
  return value * 2;
}

const double = value => value * 2;

console.log(doubleWithKeyword(6));
console.log(double(6));
```

> `value => value * 2` is an arrow function with one parameter and an implicit return.
>
> Other languages often call this kind of short function a lambda, and may call the arrow itself a lambda operator. In JavaScript, the usual term is arrow function.
>
> When an arrow function has one expression and no braces, that expression is returned automatically.
>
> With braces, an arrow function needs an explicit `return`, just like a traditional function body.

```text
12
12
```

Both functions do the same work. The traditional form is often easier for a beginner to read, while the arrow form is compact and common in modern JavaScript.

---

## Try it Yourself

Rewrite a two-parameter addition function as an arrow function. Then add braces and an explicit `return`, and compare the two forms.

---

## More background

See [MDN: Arrow function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

---
