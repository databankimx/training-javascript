# Errors and failure paths

Programs do not receive perfect input. Users mistype values, files go missing, network responses are malformed, and systems return data that is technically valid JavaScript but useless for the next operation. Good programs do not pretend those cases cannot happen. They decide what to do when the ordinary path is not available.

There are three useful categories to keep separate:

| Kind of problem | What it means | Typical result |
| --- | --- | --- |
| Syntax error | The code is not valid JavaScript | The script cannot start |
| Runtime error | The code fails while it is running | An exception may stop the current operation |
| Logic error | The code runs, but the result is wrong | No automatic error tells us what to fix |

A missing closing brace is a syntax error. Calling a function that does not exist is a runtime error. Applying a discount twice is a logic error. The last category is often the most irritating because the computer is doing exactly what we told it to do, which is not the same as what we meant.

---

## A deliberate failure result

Not every invalid input needs an exception. If an invalid value is an expected part of normal use, a function can return a result that the caller knows how to handle:

```javascript
function parseScore(text) {
  const score = Number(text);
  return Number.isNaN(score) ? "Invalid number" : score;
}

console.log(parseScore("12"));
console.log(parseScore("twelve"));
```

```text
12
Invalid number
```

> A failure path is the code that handles an input or situation the ordinary path cannot use.
>
> `Number.isNaN(value)` checks whether a value is the special `NaN` result.
>
> A returned failure value is appropriate when the caller can handle the problem as ordinary application data, such as displaying validation beside a form field.

Returning a message keeps the problem in the normal flow. Not every problem needs to be thrown like a tiny theatrical emergency.

---

## A runtime exception

Some operations cannot produce a useful ordinary result. Parsing malformed JSON is one example:

```javascript
const text = '{"name": "Ada"';

console.log("Before parsing");

try {
  const data = JSON.parse(text);
  console.log(data.name);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

console.log("After parsing");
```

```text
Before parsing
SyntaxError
Unexpected end of JSON input
After parsing
```

The malformed text is not a valid JSON document, so `JSON.parse()` throws a `SyntaxError`. Without a handler, the script would stop at that line and never reach the final message.

JavaScript reports many runtime failures as `Error) objects. The `name` describes the broad kind of failure, while `message` explains this particular occurrence.

---

## Try it Yourself

Add a negative-score check to `parseScore()`. Decide whether it should return a validation message or throw an error. Then parse valid and invalid JSON and explain which lines run after the failure.

---

## More background

See [MDN: Errors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) and [MDN: JSON.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse).

---

