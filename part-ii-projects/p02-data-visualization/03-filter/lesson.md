# Project 2.3 · Interactive filtering

## Learning goal

Project 2.3 · Interactive filtering: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

A filter should change which records we see, without losing the records we are filtering. I prefer my temporary view decisions to remain temporary.

This stage introduces a control that filters the data and re-renders a textual report. The source records remain unchanged; the filtered collection is derived state. The same separation can drive a chart. Keep the unit and threshold visible, update on input, and represent the empty result explicitly. This final stage is an independent filter lab rather than a full copy of the prior chart.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Set the threshold to 15 to see February and April; 30 produces No matching months.

## Example code

```javascript
const rows=[{month:'Jan',hours:12},{month:'Feb',hours:18},{month:'Mar',hours:9},{month:'Apr',hours:21}];
const app=document.querySelector('#app');
app.innerHTML='<label>Minimum hours <input type="number" min="0" value="0"></label><ul aria-live="polite"></ul>';
const input=app.querySelector('input'),list=app.querySelector('ul');
function render(){
  list.replaceChildren();
  const raw=input.value;
  const min=Number(raw);
  if(!raw.trim()||!Number.isFinite(min)||min<0){
    list.textContent='Enter a nonnegative number';
    return;
  }
  const selected=rows.filter(row=>row.hours>=min);
  if(!selected.length){
    list.textContent='No matching months';
    return;
  }
  for(const row of selected){
    const item=document.createElement('li');
    item.textContent=row.month+': '+row.hours+' hours';
    list.append(item);
  }
}
input.addEventListener('input',render);
render();
```

## Expected output

```text
Set the threshold to 15 to see February and April; 30 produces No matching months.
```

## Walk through the example

The input handler calls render on each edit. render validates the threshold, derives matching records, clears old output, and builds fresh list items. The source rows are never mutated. This stage isolates filter behavior; combining it with the chart is the integration exercise.

## Try it yourself

Combine the filter with the previous chart. Choose and document whether the scale stays fixed when filtering.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.
