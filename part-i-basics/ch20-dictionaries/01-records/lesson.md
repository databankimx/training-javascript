# 07 · Objects, maps, and sets

## Learning goal

07 · Objects, maps, and sets: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

JavaScript gives us several ways to organize values. We could use one enormous object for everything, but future maintenance would appreciate a slightly more deliberate approach.

Use plain objects for records with known fields, Map for keyed collections, and Set for unique values. Object property names are strings or symbols, whereas Map keys can be arbitrary values. Object.entries exposes a record as key/value pairs. Destructuring names fields you need, and spread can build an updated record. Both are shallow operations.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Ada is printed first; JS has count 2 and Python count 1; the Set keeps JS and SQL once each.

## Example code

```javascript
const person = { name: 'Ada', team: 'Training' };
const { name } = person;
const counts = new Map();
for (const language of ['JS', 'Python', 'JS']) counts.set(language, (counts.get(language) ?? 0) + 1);
console.log(name);
console.log([...counts]);
console.log([...new Set(['JS','JS','SQL'])]);
```

## Expected output

```text
Ada is printed first; JS has count 2 and Python count 1; the Set keeps JS and SQL once each.
```

## Walk through the example

The record supplies a named field through destructuring. The loop then treats counts as a keyed collection: read the previous count or zero, increment it, and store it. Spreading Map exposes its entries for printing. Set removes repeated values while retaining first-insertion order.

## Try it yourself

Count words case-insensitively in "JS js Node" and print each count. Explain why Map is a good fit.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.
