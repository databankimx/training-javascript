# 23 · Conditional form sections

## Learning goal

23 · Conditional form sections: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

The wire-transfer fields should disappear when we choose Check. So far, so good. Now let’s make sure the invisible required field stops objecting to our attempt to submit the form.

A conditional section changes more than visibility. A hidden required field can prevent submission, and enabled hidden fields may still be included in form data. A disabled fieldset removes its controls from normal form submission and constraint validation. Synchronize visibility, disabled state, and the business rule in one function. Hiding is never a replacement for server-side validation.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Selecting Wire reveals a required reference field; selecting Check hides and disables it. Submit displays only enabled fields.

## Example code

```javascript
const form=document.querySelector('form'),choice=document.querySelector('#payment'),section=document.querySelector('#wire-fields');
function sync(){
  const wire=choice.value==='wire';
  section.hidden=!wire;
  section.disabled=!wire;
}
choice.addEventListener('change',sync);
sync();
form.addEventListener('submit',event=>{
  event.preventDefault();
  document.querySelector('#result').textContent=JSON.stringify(Object.fromEntries(new FormData(form)));
});
```

## Expected output

```text
Selecting Wire reveals a required reference field; selecting Check hides and disables it. Submit displays only enabled fields.
```

## Walk through the example

sync derives the wire-section state from the payment selection. It changes both hidden and disabled, so display, validation, and serialization agree. FormData then reads the enabled named controls at submit time. Switching payment type is a good place to inspect the actual payload rather than assuming visibility changed submission behavior.

## Try it yourself

Add a third payment type and define whether it needs the reference. Compare .prop("disabled", true) with .attr("disabled", ...).

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.

## jQuery comparison: properties versus attributes

Vanilla JavaScript used in this course:

```js
fieldset.hidden = true;
fieldset.disabled = true;
checkbox.checked = true;
```

Familiar jQuery reading example (requires jQuery; not executed here):

```js
$('#wire-fields').hide().prop('disabled', true);
$('#approved').prop('checked', true);
```

Live boolean state belongs to properties. .attr("checked") describes an attribute, not reliably the current checked state; .prop("checked") reads live state. Hiding alone does not omit form controls from submission or validation. Disabled controls have different form behavior.

We’ll give jQuery its own course. For now, the comparison helps us read familiar DataBank code while keeping this example in vanilla JavaScript.
