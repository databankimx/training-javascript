# Template literals

We can build a sentence by joining strings with `+`, but the spaces and punctuation quickly become a small obstacle course. Template literals give us a cleaner way to place values inside a sentence.

## Concatenation first

```javascript
const name = "Bob";
const age = 30;

const message = "My name is " + name + " and I am " + age + " years old.";
console.log(message);
```

```text
My name is Bob and I am 30 years old.
```

The `+` operator concatenates the pieces. It works, but every space has to be included in one of the quoted strings. Forget one, and the output becomes a sentence that looks like it was assembled during a fire drill.

Concatenation is not wrong. It just becomes difficult to read as the sentence grows. That gives us a reason to learn the next form rather than treating it as a new rule to memorize for its own sake.

## Template literals and interpolation

```javascript
const name = "Bob";
const age = 30;

const message = `Hello ${name}, you are ${age} years old.`;
console.log(message);
```

```text
Hello Bob, you are 30 years old.
```

> A template literal is a string surrounded by backticks rather than quotation marks.
>
> Interpolation evaluates the expression inside `${...}` and inserts its value into the surrounding string.

The sentence is easier to read because the words stay together, and the changing values are marked clearly. Interpolation can evaluate an expression, too:

```javascript
console.log(`Next year, ${age + 1}.`);
```

The expression inside `${...}` is evaluated before the surrounding string is produced. In this case, JavaScript calculates `age + 1`, then inserts the result into the sentence.

```text
Next year, 31.
```

## Multi-line strings

```javascript
const htmlTemplate = `
  <div>
    <h1>Welcome, Bob!</h1>
  </div>
`;
console.log(htmlTemplate.trim());
```

```text
<div>
    <h1>Welcome, Bob!</h1>
  </div>
```

Backticks can preserve line breaks, which is useful for small HTML or text templates. The `.trim()` call removes the first and last line breaks introduced by the formatting in the source file.

---

## Try it Yourself

Build a sentence about a product, its quantity, and its price. First write it with concatenation, then rewrite it with a template literal. Add a calculation inside `${...}` for a total or a future value.

If you can see why the template literal is easier to maintain, you have learned the important part. The punctuation can stop hiding in the bushes now.

---

## More background

See [MDN: Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).

---
