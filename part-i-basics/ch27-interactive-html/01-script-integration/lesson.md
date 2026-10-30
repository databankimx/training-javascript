# 20 · Connect HTML, CSS, and JavaScript

## Learning goal

20 · Connect HTML, CSS, and JavaScript: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

We have some HTML, some CSS, and some JavaScript. They can cooperate quite nicely, provided we introduce them using the same element identifiers.

HTML supplies structure and meaning, CSS supplies presentation, and JavaScript supplies behavior. This lesson keeps all three in separate files so you can see the contract: an HTML id must match the selector used by the script. A type="module" script is deferred and runs in module scope. It does not create window properties for top-level bindings. Older inline onclick handlers therefore should not be mixed with module-scoped functions. Attach listeners in the script instead.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

The HTML contains a button and status paragraph before JavaScript runs. Click Greet to update the paragraph.

## Example code

```javascript
const button = document.querySelector('#greet');
const output = document.querySelector('#message');
button.addEventListener('click', () => {
  output.textContent = 'JavaScript connected to HTML';
  output.classList.add('success');
});
```

## Expected output

```text
The HTML contains a button and status paragraph before JavaScript runs. Click Greet to update the paragraph.
```

## Walk through the example

Open index.html first and find greet and message. Then follow those identifiers into main.js. The listener changes a property and a class when the button is activated. style.css determines how that class looks; adding a class name by itself does not create a CSS rule.

## Try it yourself

Rename the button id in both HTML and JavaScript. Add a .success rule in style.css. Explain why changing only one file breaks the connection.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.
