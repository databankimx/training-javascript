# S06 · Records and validation (dataclasses counterpart)

## Learning goal

S06 · Records and validation (dataclasses counterpart): by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

Python dataclasses do some convenient work for us. In JavaScript we’ll make those responsibilities explicit, starting with deciding which records we are willing to create.

JavaScript has no built-in Python dataclass decorator. A factory can centralize validation and return a record, while Object.freeze prevents changing its immediate properties. Freezing is shallow; nested objects need separate treatment. Runtime validation still matters when data arrives from JSON even if an editor supplies static type hints.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Expect Ada 36 and true.

## Example code

```javascript
function makeUser(name, age) {
  if (typeof name !== 'string' || !name.trim()) throw new TypeError('Name required');
  if (!Number.isInteger(age) || age < 0) throw new RangeError('Invalid age');
  return Object.freeze({name:name.trim(), age});
}
const user = makeUser(' Ada ', 36);
console.log(user.name, user.age);
console.log(Object.isFrozen(user));
```

## Expected output

```text
Ada 36
```

## Walk through the example

makeUser trims and validates its inputs before constructing the record. Object.freeze prevents assignments to the returned object’s own properties. The getter-free record is convenient for reading and serialization, but a nested address object would need its own immutability policy.

## Try it yourself

Add an optional email field and validate its type when supplied. Avoid pretending a simple regex proves deliverability.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.
