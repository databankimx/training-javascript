# 27 · Templates, cloning, and unique identifiers

## Learning goal

27 · Templates, cloning, and unique identifiers: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

Copying a row is convenient. Copying its id five times is less convenient, especially when clicking a label sends us to an entirely different input.

An HTML template contains inert markup that is not rendered until cloned and inserted. cloneNode(true) copies the node structure but not listeners attached with addEventListener. Delegation avoids that surprise. Repeated controls need unique ids and matching label for attributes; duplicate ids make selectors and accessible names ambiguous. Set user text through textContent or value after cloning.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Add several note controls. Clicking each label focuses its own input; any row can be removed.

## Example code

```javascript
const template=document.querySelector('#row-template'),container=document.querySelector('#entries');
let nextId=1;
document.querySelector('#add').addEventListener('click',()=>{
  const fragment=template.content.cloneNode(true);
  const id='note-'+nextId++;
  fragment.querySelector('input').id=id;
  fragment.querySelector('input').name=id;
  fragment.querySelector('label').htmlFor=id;
  container.append(fragment);
});
container.addEventListener('click',event=>{
  const remove=event.target instanceof Element?event.target.closest('[data-remove]'):null;
  if(remove&&container.contains(remove)){
    remove.closest('.entry').remove();
    document.querySelector('#add').focus();
  }
});
```

## Expected output

```text
Add several note controls. Clicking each label focuses its own input; any row can be removed.
```

## Walk through the example

template.content holds the inert fragment. A click clones it, assigns a fresh id and name, connects the label, and inserts the fragment. The container’s delegated listener handles removal. No per-row handler needs to be copied, which keeps the clone operation pleasantly uneventful.

## Try it yourself

Compare template.content.cloneNode(true) with jQuery .clone(). Why does copying markup not guarantee copied event behavior?

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.

## jQuery comparison: cloning

Vanilla JavaScript used in this course:

```js
const fragment = template.content.cloneNode(true);
container.append(fragment);
```

Familiar jQuery reading example (requires jQuery; not executed here):

```js
const $copy = $('.entry').first().clone();
$('#entries').append($copy);
```

Native cloneNode does not copy addEventListener registrations. jQuery clone options can copy handlers and data, which changes the contract. Regenerate identifiers and prefer delegation for repeated interactive content.

We’ll give jQuery its own course. For now, the comparison helps us read familiar DataBank code while keeping this example in vanilla JavaScript.
