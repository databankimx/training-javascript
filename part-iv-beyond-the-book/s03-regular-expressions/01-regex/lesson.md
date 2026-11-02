# S03 · Regular expressions

## Learning goal

S03 · Regular expressions: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

A regular expression can make a small text problem pleasantly concise. It can also become punctuation that nobody wants to explain at the next code review. We’ll aim for the former.

A regular expression describes a text pattern. Anchors constrain the whole input, groups extract components, and flags adjust matching. matchAll requires a global expression and returns match records. Regex is useful for bounded text formats; it is not an HTML parser or a complete email-address validator. Reused global expressions have mutable lastIndex when used with test or exec.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Expect 1042, 2048 and true.

## Example code

```javascript
const text = 'Invoice INV-1042, then INV-2048.';
const ids = [...text.matchAll(/INV-(\d{4})/g)].map(match => match[1]);
console.log(ids.join(', '));
console.log(/^INV-\d{4}$/.test('INV-1042'));
```

## Expected output

```text
1042, 2048
true
```

## Walk through the example

matchAll walks every global match and exposes the captured digit group. The map keeps that group instead of the entire INV-prefixed match. The second expression anchors a whole identifier. Removing the anchors changes the validation question from “is this an identifier?” to “does this contain one?”.

## Try it yourself

Accept exactly INV- followed by 4 to 6 digits. Reject a match embedded inside other text.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.
