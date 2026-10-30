# 26 · Sort and filter a dynamic table

## Learning goal

26 · Sort and filter a dynamic table: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

A table is much more useful when we can find what we need. We’ll add sorting and filtering without making the original records disappear in the process.

Keep source records separate from the displayed rows. Filtering derives a subset and sorting derives its order; neither should destroy the source data. Numeric and textual sort rules differ. Provide a caption, table headers, an empty state, and visible result count. A full-featured DataTables plugin adds paging, searching, and many options; this lesson implements only its stated small feature set.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Search for a name and change the sort to Hours. Sorting hours puts 4 before 12 before 20.

## Example code

```javascript
const data=[{name:'Ada',hours:12},{name:'Grace',hours:4},{name:'Linus',hours:20}];
const search=document.querySelector('#filter'),sort=document.querySelector('#sort'),body=document.querySelector('tbody');
function render(){
  const selected=data.filter(row=>row.name.toLowerCase().includes(search.value.trim().toLowerCase())).toSorted(sort.value==='hours'?(a,b)=>a.hours-b.hours:(a,b)=>a.name.localeCompare(b.name));
  body.replaceChildren();
  for(const record of selected){
    const row=document.createElement('tr');
    for(const value of [record.name,record.hours]){
      const cell=document.createElement('td');
      cell.textContent=String(value);
      row.append(cell);
    }
    body.append(row);
  }
  document.querySelector('#count').textContent=selected.length?selected.length+' matching learners':'No matches';
}
search.addEventListener('input',render);
sort.addEventListener('change',render);
render();
```

## Expected output

```text
Search for a name and change the sort to Hours. Sorting hours puts 4 before 12 before 20.
```

## Walk through the example

render starts with the source data every time. It derives a case-insensitive filtered collection, then returns a sorted copy using either numeric or locale-aware comparison. Each cell receives textContent. An empty result updates the status instead of leaving stale rows on screen.

## Try it yourself

Add descending order and a Clear filters button. Preserve the original data order for a Reset order option.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.

## jQuery comparison: small tables versus table plugins

Vanilla JavaScript used in this course:

```js
const visible = records.filter(matches).toSorted(compare);
renderRows(visible);
```

Familiar jQuery reading example (requires jQuery; not executed here):

```js
// DataTables is a separate plugin:
$('#training-table').DataTable();
```

DataTables is not jQuery core and supplies many behaviors beyond this lesson, including plugin-dependent paging and search. The vanilla lesson teaches the underlying state/filter/sort/render pipeline. Preserve the plugin as a separate future-course topic.

We’ll give jQuery its own course. For now, the comparison helps us read familiar DataBank code while keeping this example in vanilla JavaScript.
