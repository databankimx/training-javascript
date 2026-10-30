# 18 · DOM elements versus jQuery collections

## Learning goal

18 · DOM elements versus jQuery collections: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

The familiar jQuery selector gives us a collection. A native selector might give us one element, several elements, or null. Similar punctuation, rather different arrangements.

querySelector returns one Element or null; querySelectorAll returns a static NodeList. A jQuery selector returns a jQuery collection, including an empty collection when nothing matches. Methods and return types differ: a DOM element has textContent, while a jQuery collection has .text(). Native property access on null throws, so handle missing elements explicitly. NodeLists do not automatically acquire jQuery methods.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Two paragraphs appear. Output reports Matches: 2 and true for the missing-element check.

## Example code

```javascript
const app = document.querySelector('#app');
for (const name of ['Ada', 'Grace']) {
  const item = document.createElement('p');
  item.classList.add('learner');
  item.textContent = name;
  app.append(item);
}
const learners = document.querySelectorAll('.learner');
learners.forEach(node => node.classList.add('active'));
console.log('Matches:', learners.length);
console.log(document.querySelector('.missing') === null);
```

## Expected output

```text
Two paragraphs appear. Output reports Matches: 2 and true for the missing-element check.
```

## Walk through the example

The first selection finds the existing app element. The loop creates two paragraphs, and querySelectorAll captures the matching collection after insertion. forEach applies a class to each node. The final selection has no match, so its result is null rather than an empty jQuery collection.

## Try it yourself

Compare document.querySelectorAll(".learner") with $(".learner"). Write vanilla code to update all matched text, then handle a missing single element safely.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.

## jQuery comparison: collections and class changes

Vanilla JavaScript used in this course:

```js
document.querySelectorAll('.field').forEach(node => {
  node.classList.add('error');
});
```

Familiar jQuery reading example (requires jQuery; not executed here):

```js
$('.field').addClass('error');
```

The native NodeList is a static collection; a jQuery collection has library methods. For an individual DOM element, $(element) wraps it and $element[0] unwraps the first match; check that a match exists. Native and jQuery selectors are not universally interchangeable, especially library-specific pseudo-selectors.

We’ll give jQuery its own course. For now, the comparison helps us read familiar DataBank code while keeping this example in vanilla JavaScript.
