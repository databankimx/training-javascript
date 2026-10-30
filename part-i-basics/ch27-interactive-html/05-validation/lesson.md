# 24 · Form validation and computed values

## Learning goal

24 · Form validation and computed values: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

Two amounts look fine on the screen, but the allocation exceeds the invoice. This is the sort of disagreement I would prefer to resolve before the form goes anywhere.

HTML constraint validation covers required fields and numeric ranges. JavaScript adds cross-field rules using setCustomValidity, but must clear old messages before checking again. Validate on submit so keyboard submission follows the same path as clicking. A training form previews data locally; a real server must independently validate everything. For money, this example accepts at most two decimal places and uses integer cents for arithmetic.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

For 100.00 total and 25.25 allocated, the result is 7475 unallocated cents. An allocation over the total is rejected.

## Example code

```javascript
const form=document.querySelector('form'),amount=form.elements.amount,allocation=form.elements.allocation;
function cents(raw){
  if(!/^\d+(?:\.\d{1,2})?$/.test(raw))return null;
  const [whole,fraction='']=raw.split('.');
  const value=Number(whole)*100+Number(fraction.padEnd(2,'0'));
  return Number.isSafeInteger(value)?value:null;
}
function validate(){
  amount.setCustomValidity('');
  allocation.setCustomValidity('');
  const total=cents(amount.value),part=cents(allocation.value);
  if(total===null)amount.setCustomValidity('Enter an amount with at most two decimal places');
  if(part===null)allocation.setCustomValidity('Enter an amount with at most two decimal places');
  else if(total!==null&&part>total)allocation.setCustomValidity('Allocation exceeds invoice total');
}
form.addEventListener('input',validate);
form.addEventListener('submit',event=>{
  event.preventDefault();
  validate();
  if(!form.reportValidity())return;
  document.querySelector('#result').textContent='Unallocated cents: '+(cents(amount.value)-cents(allocation.value));
});
```

## Expected output

```text
For 100.00 total and 25.25 allocated, the result is 7475 unallocated cents. An allocation over the total is rejected.
```

## Walk through the example

cents first accepts a deliberately small decimal format, then separates whole and fractional digits without binary-fraction multiplication. validate clears earlier custom errors before checking current values. The submit handler validates again and uses reportValidity before subtraction. novalidate lets this handler control when the browser reports the errors.

## Try it yourself

Test blank, negative, three-decimal, and too-large values. Compare native value and setCustomValidity with jQuery .val() and a validation plugin.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.

## jQuery comparison: form values and validation

Vanilla JavaScript used in this course:

```js
const raw = input.value;
input.setCustomValidity('Allocation exceeds total');
form.reportValidity();
```

Familiar jQuery reading example (requires jQuery; not executed here):

```js
const raw = $('#amount').val();
// jQuery validation plugins add their own APIs.
```

A text input value is still a string in either approach. .val() does not validate, parse currency, or trigger change automatically. Native setCustomValidity and form validation are browser features; plugin-specific validation requires separate study.

We’ll give jQuery its own course. For now, the comparison helps us read familiar DataBank code while keeping this example in vanilla JavaScript.
