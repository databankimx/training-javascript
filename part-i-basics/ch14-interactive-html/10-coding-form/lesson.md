# 29 · Coding form integration lab

## Learning goal

29 · Coding form integration lab: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

Let’s put the pieces together in an invoice coding form. The important question is whether the allocations reconcile, even when someone does something other than follow our demonstration script.

Combine dynamic allocation rows, integer-cent totals, and an invoice reconciliation rule. This is a local browser training form inspired by the EForms navigator, without live OnBase APIs. A valid allocation total must exactly equal the invoice total. Keep numeric storage distinct from currency display. At an actual service boundary, enforce the same rules server-side and treat browser validation as user assistance.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Enter an invoice total and matching allocations. Review reports readiness only when the totals match; no server submission occurs.

## Example code

```javascript
const body=document.querySelector('#rows'),total=document.querySelector('#total');
let nextId=1;
function sum(){
  let cents=0,valid=true;
  for(const input of body.querySelectorAll('input[data-amount]')){
    const raw=input.value;
    if(!/^\d+(?:\.\d{1,2})?$/.test(raw)){
      valid=false;
      continue;
    }
    const [whole,fraction='']=raw.split('.');
    const value=Number(whole)*100+Number(fraction.padEnd(2,'0'));
    if(!Number.isSafeInteger(value)||!Number.isSafeInteger(cents+value)){
      valid=false;
      continue;
    }
    cents+=value;
  }
  total.textContent=valid?'Total: '+new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(cents/100):'Enter valid amounts in every row';
}
function add(){
  if(body.rows.length>=10)return;
  const id=nextId++;
  const row=document.createElement('tr');
  row.dataset.id=String(id);
  row.innerHTML='<td><input aria-label="Description row '+id+'" name="description-'+id+'"></td><td><input data-amount inputmode="decimal" aria-label="Amount row '+id+'" name="amount-'+id+'" value="0.00"></td><td><button type="button" data-remove>Remove</button></td>';
  body.append(row);
  row.querySelector('input').focus();
  sum();
}
document.querySelector('#add').addEventListener('click',add);
body.addEventListener('input',sum);
body.addEventListener('click',event=>{
  const button=event.target instanceof Element?event.target.closest('[data-remove]'):null;
  if(!button||!body.contains(button))return;
  button.closest('tr').remove();
  document.querySelector('#add').focus();
  sum();
});
add();
const invoice=document.querySelector('#invoice'),review=document.querySelector('#review');
review.addEventListener('click',()=>{
  const raw=invoice.value;
  const amounts=[...body.querySelectorAll('[data-amount]')].map(input=>input.value);
  function parse(value){
    if(!/^\d+(?:\.\d{1,2})?$/.test(value))throw new Error('Use amounts with at most two decimals');
    const [whole,fraction='']=value.split('.');
    const n=Number(whole)*100+Number(fraction.padEnd(2,'0'));
    if(!Number.isSafeInteger(n))throw new Error('Amount too large');
    return n;
  }
  try{
    if(!amounts.length)throw new Error('Add at least one coding row');
    const expected=parse(raw),actual=amounts.map(parse).reduce((a,b)=>a+b,0);
    if(!Number.isSafeInteger(actual))throw new Error('Total too large');
    if(expected!==actual)throw new Error('Allocations must equal the invoice total');
    document.querySelector('#review-result').textContent='Ready for review (local demo only)';
  }catch(error){
    document.querySelector('#review-result').textContent=error.message;
  }
});
```

## Expected output

```text
Enter an invoice total and matching allocations. Review reports readiness only when the totals match; no server submission occurs.
```

## Walk through the example

The row component retains the earlier add, remove, and total behavior. Review parses the invoice and every current allocation under the same decimal policy, requires at least one row, and compares integer totals. The result is local status text; there is no hidden service accepting this form behind the demonstration.

## Try it yourself

Require a nonblank description for every row. Add a conditional payment section, an accordion for guidance, and a note dialog from earlier lessons. Explain each event boundary during a code review.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.

## jQuery comparison: form integration

Vanilla JavaScript used in this course:

```js
input.value = '100.00';
input.addEventListener('input', recalculate);
button.disabled = false;
```

Familiar jQuery reading example (requires jQuery; not executed here):

```js
$('#amount').val('100.00');
$('#amount').on('input', recalculate);
$('#review').prop('disabled', false);
```

Programmatic value assignment does not dispatch input/change in either case. Recalculate explicitly when your application changes a value. Triggering a library event and dispatching a native event are not guaranteed to have identical behavior.

We’ll give jQuery its own course. For now, the comparison helps us read familiar DataBank code while keeping this example in vanilla JavaScript.
