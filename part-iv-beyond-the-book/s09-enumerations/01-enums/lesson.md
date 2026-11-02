# S09 · Enumerations and explicit states

## Learning goal

S09 · Enumerations and explicit states: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

A status field that accepts any string will eventually receive a string we did not have in mind. Let’s define the states and the transitions before that becomes a group debugging activity.

JavaScript has no native enum declaration. A frozen object of string constants gives readable serialized values. It does not stop callers passing other strings; validate at boundaries. Model transitions explicitly so illegal state changes produce an error instead of silently corrupting the workflow.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Expect review and done.

## Example code

```javascript
const Status = Object.freeze({DRAFT:'draft', REVIEW:'review', DONE:'done'});
function next(status) {
  if (status === Status.DRAFT) return Status.REVIEW;
  if (status === Status.REVIEW) return Status.DONE;
  throw new Error('No next transition');
}
console.log(next(Status.DRAFT));
console.log(next(Status.REVIEW));
```

## Expected output

```text
review
done
```

## Walk through the example

Status supplies readable constants, and next lists only the two permitted forward transitions. The error path handles terminal and unknown input alike. Adding a canceled state therefore means extending the transition policy, not merely adding another property to the constants object.

## Try it yourself

Add a canceled state that may be reached from draft or review, but not from done.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.
