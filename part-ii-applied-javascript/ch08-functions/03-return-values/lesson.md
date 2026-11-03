# Return values

A function can send a value back to its caller with `return`. That lets the caller decide what to do with the result. This separation is useful when the same calculation might be printed in one place, compared in another, and included in a larger calculation somewhere else.

```javascript
function add(left, right) {
  return left + right;
}

const total = add(3, 4);
console.log(`Total: ${total}`);
```

> `return` ends the current function call and supplies a value to the caller.
>
> A returned value can be assigned, printed, compared, or passed to another function.
>
> A function with no `return` produces `undefined` when its caller tries to use the result.

```text
Total: 7
```

`add` does not print anything itself. It returns 7, and the caller stores that result in `total` before printing it. A function that returns a value is often easier to test because it produces an answer without committing to a particular display method.

---

## Returning a structured value

A function can return an array or object when the result has several related pieces. Returning one structured value is often clearer than asking the caller to reconstruct it from several print statements:

```javascript
function buildPerson(firstName, lastName, age) {
  return {
    firstName,
    lastName,
    age
  };
}

const person = buildPerson("Ada", "Lovelace", 36);
console.log(person.firstName);
console.log(person.age);
```

```text
Ada
36
```

The object property shorthand uses `firstName` as both the property name and the value to store. The function does not need to know whether the caller will display the person, save it, or pass it to another function.

---

## Returning early

`return` also stops the function immediately. That can keep invalid input from reaching the rest of the calculation:

```javascript
function percentage(part, whole) {
  if (whole === 0) {
    return null;
  }

  return part / whole * 100;
}

console.log(percentage(2, 4));
console.log(percentage(2, 0));
```

```text
50
null
```

Returning `null` here makes the “not available” result explicit. The caller can decide whether to display a message, use a fallback, or report an error. It is usually kinder than allowing a meaningless result to wander through the rest of the program.

---

## Try it Yourself

Write a function that returns the larger of two numbers. Use its result in an `if` statement and print a sentence about the winner.

Then return an object containing a product name, quantity, and total. Add an early return for a quantity of zero and explain why the caller should handle that result.

---

## More background

See [MDN: return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return) and [MDN: Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions).

---

