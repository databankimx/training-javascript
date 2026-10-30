# 25 · Dynamic tables with delegated events

## Learning goal

25 · Dynamic tables with delegated events: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

We need another coding row, then another, and eventually we need to remove the one in the middle. This is where a few convenient assumptions about row numbers tend to retire unexpectedly.

Creating real rows differs from revealing a fixed set of hidden rows. Each added row needs unique control names, labels, and a stable identifier. Delegate input and remove events to tbody so later rows work automatically. Recompute the total from current rows after changes. This parallels the dynamic GL coding forms in the EForms navigator, while keeping the implementation independent of OnBase and jQuery.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

One row starts at 0.00. Add up to ten rows, enter amounts, and remove a middle row. The total updates without rebinding listeners.

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
```

## Expected output

```text
One row starts at 0.00. Add up to ten rows, enter amounts, and remove a middle row. The total updates without rebinding listeners.
```

## Walk through the example

add creates a row with a fresh identifier, inserts labeled controls, focuses the description, and recalculates. sum scans the current amount fields and accumulates safe integer cents. The tbody listeners receive input and removal events from later rows too. After removal, focus moves to Add and the total is recomputed.

## Try it yourself

Disable Add at the ten-row limit and re-enable it after removing a row. Test removing all rows and adding again.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.

## jQuery comparison: creating rows and delegation

Vanilla JavaScript used in this course:

```js
const row = document.createElement('tr');
tbody.append(row);
tbody.addEventListener('input', updateTotal);
```

Familiar jQuery reading example (requires jQuery; not executed here):

```js
const $row = $('<tr>');
$('#rows').append($row);
$('#rows').on('input', 'input[data-amount]', updateTotal);
```

Both approaches can support future rows. Keep identifiers unique and avoid interpolating untrusted text into HTML strings. .append() accepts different input types from native append; read contracts instead of mechanically replacing method names.

We’ll give jQuery its own course. For now, the comparison helps us read familiar DataBank code while keeping this example in vanilla JavaScript.
