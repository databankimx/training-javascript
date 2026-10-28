# 22 · Accessible accordions

## Learning goal

22 · Accessible accordions: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

An accordion should open and close sections. Ideally, it should also work for someone using a keyboard, which is a perfectly ordinary expectation for an interface.

For a simple disclosure, details and summary already provide keyboard behavior and open state. JavaScript can enhance the behavior without rebuilding the control. This example permits one open section at a time. The toggle event reflects the resulting open state; closing siblings may also trigger events, so ignore events for a panel that is now closed. jQuery UI accordion is a plugin with its own API and behavior, not part of jQuery core.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Open either section with a mouse or keyboard. Opening one closes the other.

## Example code

```javascript
const panels=[...document.querySelectorAll('details')];
for(const panel of panels)panel.addEventListener('toggle',()=>{
  if(!panel.open)return;
  for(const other of panels)if(other!==panel)other.open=false;
});
```

## Expected output

```text
Open either section with a mouse or keyboard. Opening one closes the other.
```

## Walk through the example

The script captures the details elements already in the page and attaches a toggle listener to each. A newly opened panel closes its siblings. The early return for a closed panel avoids reopening anything when those sibling closures emit their own toggle events. Native summary supplies the basic keyboard interaction.

## Try it yourself

Add a third section in HTML without changing JavaScript. Compare native details with a custom button/panel accordion and identify which accessibility behavior would need to be implemented.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.

## jQuery comparison: disclosures and plugins

Vanilla JavaScript used in this course:

```js
details.open = true;
details.addEventListener('toggle', handler);
```

Familiar jQuery reading example (requires jQuery; not executed here):

```js
// jQuery UI, not jQuery core:
$('#accordion').accordion();
```

Native details/summary provides disclosure semantics without a library. jQuery UI must be separately included and configured. Compare accessibility, multiple-open policy, animation, keyboard behavior, and markup requirements before replacing either approach.

We’ll give jQuery its own course. For now, the comparison helps us read familiar DataBank code while keeping this example in vanilla JavaScript.
