# Parameters and arguments

Functions become much more useful when the caller can supply details. A task-reporting function should not need a new copy for every person or every count. The names in the declaration are parameters. The actual values supplied by a call are arguments.

```javascript
function describeTasks(name, count) {
  console.log(`${name} has ${count} tasks`);
}

describeTasks("Ada", 3);
```

> A parameter is the local name declared by a function.
>
> An argument is the value supplied by the caller.
>
> JavaScript matches ordinary arguments to parameters by position. The first argument fills the first parameter, the second fills the second, and so on.

```text
Ada has 3 tasks
```

The call passes `"Ada"` into `name` and `3` into `count`. JavaScript will not look at the values and politely infer that we meant to swap them. It simply uses the position we gave it.

---

## Rest parameters

Sometimes a function should accept any number of additional values. A rest parameter collects those trailing arguments into an array:

```javascript
function totalScores(label, ...scores) {
  const total = scores.reduce((sum, score) => sum + score, 0);
  console.log(`${label}: ${total}`);
}

totalScores("Ada", 10, 8, 9);
totalScores("Grace", 7, 6);
```

```text
Ada: 27
Grace: 13
```

The `...scores` parameter gathers every argument after `label`. Inside the function, `scores` is an ordinary array, so we can loop over it or use array methods. A rest parameter must be last because it collects whatever remains.

The same three dots mean something different in a call:

```javascript
const values = [2, 3, 4];
console.log(totalScores("Linus", ...values));
```

The spread syntax opens the array and passes its items as separate arguments. Rest gathers arguments inside a function; spread expands a collection at a call site. The punctuation is shared, but the direction of travel is opposite.

---

## Options objects instead of keyword arguments

JavaScript does not have Python-style keyword arguments. When a function has several optional settings, an object is the usual replacement:

```javascript
function describePet({ name, type = "dog", indoor = false }) {
  const location = indoor ? "indoor" : "outdoor";
  return `${name} is an ${location} ${type}`;
}

console.log(describePet({ name: "Rover" }));
console.log(describePet({ type: "cat", name: "Pickles", indoor: true }));
```

```text
Rover is an outdoor dog
Pickles is an indoor cat
```

The caller names each option in the object, so the order is no longer carrying all the meaning. This is especially useful when a function has several optional values or when a call would otherwise be a punctuation-heavy argument list.

---

## Try it Yourself

Add a third parameter for a completed-task count. Call the function with different values and predict the sentence before running it.

Then write a rest-parameter function that accepts a label and several numbers. Build an options-object function with two defaults, and call it with the properties in a different order.

---

## More background

See [MDN: Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters), [MDN: Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax), and [MDN: Destructuring parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

---

