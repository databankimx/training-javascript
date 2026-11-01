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

Now that we have seen JavaScript name the three values, we can connect those labels to the values themselves. The type is not a comment we added for decoration. It affects which operations make sense and how JavaScript will interpret the value when we use it.

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

The quotes are important. `"42"` is text, while `42` is a number. They may look similar on the page, but JavaScript stores and uses them differently. A surprising amount of beginner confusion begins when those two values are treated as interchangeable.

## Types can change

JavaScript does not permanently attach one type to a variable declaration. We can change the data type of a `let` binding by assigning it a new value of a different type. For example:

```javascript
let value = "Hello"; // string
value = 42;          // now a number
value = true;        // now a boolean
```

That flexibility is useful, but it also means we need to pay attention to what a value is before we operate on it. The next lesson begins with a common case: input that looks numeric but arrives as a string.

---

## Try it Yourself

Add a `const` for a price, one for a description, and one for whether the item is available. Use `typeof` to check each value. Try changing one value to a different kind of data and predict the new result before you run the file.

If you can look at a value and say whether it is text, a number, or a boolean, you have the foundation for the next lesson. The computer is happier when we stop making it guess.

---

## More background

See [MDN: JavaScript data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures) and [MDN: typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof).

---
