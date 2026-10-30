# 15 · DOM, events, and safe text

## Learning goal

15 · DOM, events, and safe text: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

Here’s the part where JavaScript starts changing the page in front of us. We’ll keep the state small enough that I can explain it without waving vaguely at the screen.

The DOM is the browser representation of a document. querySelector finds a node; addEventListener attaches behavior without replacing unrelated handlers. Use textContent to insert user-provided text. innerHTML parses markup and requires a separate trust and sanitization decision. Keep state in JavaScript and render it into the DOM so the model and view have clear responsibilities.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Run to open the preview. Each button click increments the visible count.

## Example code

```javascript
const app = document.querySelector('#app');
const button = document.createElement('button');
const label = document.createElement('p');
let count = 0;
button.textContent = 'Count a click';
label.textContent = 'Clicks: 0';
button.addEventListener('click', () => {
  count++;
   label.textContent = 'Clicks: ' + count;
});
app.append(button, label);
```

## Expected output

```text
Run to open the preview. Each button click increments the visible count.
```

## Walk through the example

The script creates a button and paragraph, keeps count in a JavaScript binding, and appends both nodes to app. The listener increments that binding and updates the paragraph. The HTML-looking text exercise later in the course relies on this same textContent boundary to avoid parsing user text as markup.

## Try it yourself

Add a Reset button and make both controls keyboard accessible. Avoid creating a second state variable.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.

## jQuery comparison: text and event handlers

Vanilla JavaScript used in this course:

```js
const button = document.querySelector('#save');
button.addEventListener('click', handler);
button.textContent = 'Save';
```

Familiar jQuery reading example (requires jQuery; not executed here):

```js
$('#save').on('click', handler).text('Save');
```

Native selection returns an Element or null; the jQuery call returns a collection. Chaining jQuery setters is a library convention. .text() and textContent insert text; .html() and innerHTML parse markup.

We’ll give jQuery its own course. For now, the comparison helps us read familiar DataBank code while keeping this example in vanilla JavaScript.
