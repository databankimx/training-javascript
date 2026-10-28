# Project 3.1 · A Learning Log model and view

## Learning goal

Project 3.1 · A Learning Log model and view: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

A Learning Log gives us somewhere to record what we learned. Building it will also give us several things to record, which is a fairly economical arrangement.

A small application still benefits from separating a model from its rendering. Entries live in an array; rendering replaces the list from that model. Form input is validated before changing state. Use unique identifiers rather than array positions when later features need to edit or remove an entry. The lesson uses crypto.randomUUID, available in the browser preview.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Add entries using the form. The list updates; re-running resets this stage.

## Example code

```javascript
const app=document.querySelector('#app');
app.innerHTML='<form><label>Learning entry <input name="entry" required maxlength="200"></label><button>Add</button></form><ul aria-live="polite"></ul>';
const form=app.querySelector('form'),list=app.querySelector('ul');
const entries=[];
function render(){
  list.replaceChildren();
  for(const entry of entries){
    const item=document.createElement('li');
    item.textContent=entry.text;
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
Add entries using the form. The list updates; re-running resets this stage.
```

## Walk through the example

The submit handler trims the input and adds one record with a stable UUID. render discards the old list view and rebuilds it from entries. Keeping the array as the model makes later persistence and editing possible without using DOM text as the database.

## Try it yourself

Add a timestamp to each entry and display it with Intl.DateTimeFormat.

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
