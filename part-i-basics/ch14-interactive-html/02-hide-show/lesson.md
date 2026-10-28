# 21 · Hide and show a section

## Learning goal

21 · Hide and show a section: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

We need to hide a section until it is useful. That is a sensible interface decision. Treating the hidden section as a place to keep secrets would be a rather different decision.

Use the hidden property for content that should be absent from layout and normal interaction. Keep aria-expanded on the controlling button synchronized with the visible state, and connect it with aria-controls. Hiding is presentation, not authorization: hidden values still exist in the DOM. Avoid adding CSS display rules that override hidden. jQuery .hide() and .show() manage display styles; they are not identical to setting the hidden attribute.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Details start hidden. The button toggles the content and its expanded state together.

## Example code

```javascript
const toggle=document.querySelector('#toggle');
const panel=document.querySelector('#details');
function setOpen(open){
  panel.hidden=!open;
  toggle.setAttribute('aria-expanded',String(open));
  toggle.textContent=open?'Hide details':'Show details';
}
toggle.addEventListener('click',()=>setOpen(panel.hidden));
setOpen(false);
```

## Expected output

```text
Details start hidden. The button toggles the content and its expanded state together.
```

## Walk through the example

setOpen is the single place that updates the panel, button text, and aria-expanded. Initialization and the click listener both call it, so these representations stay synchronized. The click passes panel.hidden as the desired next open state: a currently hidden panel should become open.

## Try it yourself

Add a Close button inside the panel. Return focus to the toggle before hiding the panel when Close is used.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.

## jQuery comparison: visibility

Vanilla JavaScript used in this course:

```js
panel.hidden = true;
panel.hidden = false;
button.setAttribute('aria-expanded', String(!panel.hidden));
```

Familiar jQuery reading example (requires jQuery; not executed here):

```js
$('#details').hide();
$('#details').show();
$('#toggle').attr('aria-expanded', 'true');
```

hidden and jQuery display manipulation have different mechanics. Neither automatically implements a full disclosure control. Synchronize ARIA state and focus. .slideToggle() adds an animation with its own display and timing behavior; it is not a direct substitute for setting hidden.

We’ll give jQuery its own course. For now, the comparison helps us read familiar DataBank code while keeping this example in vanilla JavaScript.
