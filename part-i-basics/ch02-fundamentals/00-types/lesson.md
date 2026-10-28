# Data types

Before we ask JavaScript to do useful work with values, it helps to know what sort of values we have.

Text, numbers, and yes-or-no answers are not interchangeable, even when JavaScript occasionally tries to make them look that way.

Consider this code:

```javascript
const name = "Ada";
const age = 37;
const learning = true;

// The `typeof` operator reports the data type of the variable
console.log(typeof name);
console.log(typeof age);
console.log(typeof learning);
```

> Calling `typeof` asks JavaScript to identify the type of a value.
> 
> `typeof` is an operator rather than a function, so there are no parentheses after it.

The output is:

```text
string
number
boolean
```

## What the types mean

The types returned make sense when we consider what the variables actually hold.

| Variable | Type | Content |
| --- | --- | --- |
| `name` | `string` | text |
| `age` | `number` | integer or decimal |
| `learning` | `boolean` | true or false logical value |

We control data type when we assign a value to a variable.

* Any value surrounded by quotes is treated as a `string`.
    * e.g.: `let s = "Hello";`
* Any value without quotes that represents a number is treated as a `number`.
    * e.g.: `let n = 42;`
* Any value that is either `true` or `false` is treated as a `boolean`.
    * e.g.: `let b = true;`

## Types can change

We can change the data type of a variable by assigning it a new value of a different type. For example:

```javascript
let value = "Hello"; // string
value = 42;          // now a number
value = true;        // now a boolean
```

---

## Try it Yourself

Add a `const` for a price, one for a description, and one for whether the item is available. Use `typeof` to check each value. Try changing one value to a different kind of data and predict the new result before you run the file.

If you can look at a value and say whether it is text, a number, or a boolean, you have the foundation for the next lesson. The computer is happier when we stop making it guess.

---

## More background

See [MDN: JavaScript data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures) and [MDN: typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof).

---
