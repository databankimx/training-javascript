# S17 · Document queries (MongoDB counterpart)

## Learning goal

S17 · Document queries (MongoDB counterpart): by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

A document database lets records contain nested values. That flexibility is useful, and it leaves us with the small matter of deciding what shapes our application can actually handle.

Document databases store records whose nested shapes can vary. Embedded arrays make some reads natural but require a deliberate update and indexing model. This offline lesson models document filtering in memory; it does not connect to MongoDB or emulate its consistency and query semantics. A real integration needs an approved driver, a server, configuration outside source control, and integration tests.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Expect one projected record containing name Ada.

## Example code

```javascript
const learners = [{name:'Ada',tags:['js','sql'],profile:{active:true}},{name:'Grace',tags:['python'],profile:{active:false}}];
const selected = learners.filter(user => user.profile?.active === true && user.tags.includes('js'));
console.log(selected.map(({name}) => ({name})));
```

## Expected output

```text
Expect one projected record containing name Ada.
```

## Walk through the example

The filter combines an explicit active-state check with membership in the tags array. The map then projects only names. This demonstrates the shape of a document query but has no server indexes, driver, transactions, or database-side execution. Keep that distinction clear when moving the idea into MongoDB.

## Try it yourself

Handle a document with no tags field and one with no profile. Keep invalid types from producing a runtime error.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.
