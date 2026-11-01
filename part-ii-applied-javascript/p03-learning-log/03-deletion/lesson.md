# Project 3.3 · Deletion, empty states, and review

## Learning goal

Project 3.3 · Deletion, empty states, and review: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

The final version needs to handle deleting and editing entries as sensibly as it handles adding them. Demonstrations tend to favor Add; actual use is less obliging.

The final stage adds per-entry deletion and an explicit empty state. Each delete callback captures the stable entry ID, not a list position that could change. Rendering derives the view from the updated model. This local app has no accounts or server; authentication, ownership checks, and deployment are separate extensions rather than simulated production security.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Add several entries and delete the middle one. Other entries remain unchanged; deleting all shows the empty state.

## Example code

```javascript
const app=document.querySelector('#app');
app.innerHTML='<form><label>Learning entry <input name="entry" required maxlength="200"></label><button>Add</button></form><ul aria-live="polite"></ul>';
const form=app.querySelector('form'),list=app.querySelector('ul');
let entries=[];
function render(){
  list.replaceChildren();
  if(!entries.length){
    list.textContent='No learning entries yet.';
    return;
  }
  for(const entry of entries){
    const item=document.createElement('li');
    const text=document.createElement('span');
    text.textContent=entry.text;
    const remove=document.createElement('button');
    remove.textContent='Delete';
    remove.setAttribute('aria-label','Delete '+entry.text);
    remove.onclick=()=>{
      entries=entries.filter(e=>e.id!==entry.id);
      render();
    };
    item.append(text,remove);
    list.append(item);
  }
}
form.addEventListener('submit',event=>{
  event.preventDefault();
  const text=form.elements.entry.value.trim();
  if(!text)return;
  entries.push({id:crypto.randomUUID(),text});
  form.reset();
  render();
});
render();
```

## Expected output

```text
Add several entries and delete the middle one. Other entries remain unchanged; deleting all shows the empty state.
```

## Walk through the example

Each rendered Delete button captures its entry’s stable ID. Clicking it filters the model and renders again, so deleting a middle entry cannot accidentally target a later shifted index. When no entries remain, render displays an explicit empty state rather than a mysteriously blank list.

## Try it yourself

Integrate export/import from the prior stage, add an edit action, and write a review checklist for the finished app.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.

## jQuery comparison: model and DOM updates

Vanilla JavaScript used in this course:

```js
const item = document.createElement('li');
item.textContent = entry.text;
list.append(item);
```

Familiar jQuery reading example (requires jQuery; not executed here):

```js
const $item = $('<li>').text(entry.text);
$('#entries').append($item);
```

Both examples insert user content as text. Keep the application model independent of either DOM API so a later jQuery implementation can reuse validation and state logic.

We’ll give jQuery its own course. For now, the comparison helps us read familiar DataBank code while keeping this example in vanilla JavaScript.
