# S19 · Browser forms (Tkinter counterpart)

## Learning goal

S19 · Browser forms (Tkinter counterpart): by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

A browser form already knows quite a bit about buttons, labels, and keyboard interaction. We should use those features before volunteering to reimplement them.

A browser form provides controls, validation, and submission events. Handle submit rather than only a button click so Enter works. Label every input and use a live region for status updates. preventDefault keeps this local example from navigating away. Use the DOM rather than a desktop widget toolkit for JavaScript user interfaces.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Enter a name and submit using the keyboard or button. The greeting appears without navigation.

## Example code

```javascript
const app=document.querySelector('#app');
app.innerHTML='<form><label>Name <input name="name" required></label><button>Greet</button></form><p aria-live="polite"></p>';
const form=app.querySelector('form');
form.addEventListener('submit',event=>{
  event.preventDefault();
   app.querySelector('p').textContent='Hello, '+form.elements.name.value.trim();
});
```

## Expected output

```text
Enter a name and submit using the keyboard or button. The greeting appears without navigation.
```

## Walk through the example

The static form markup creates a labeled required input and a status paragraph. Its submit listener prevents navigation, reads the current value, and inserts a greeting as text. Add a whitespace policy after trimming, because the browser’s required rule alone accepts a string containing spaces.

## Try it yourself

Reject a name containing only whitespace and return focus to the input. Keep user text out of innerHTML.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.
