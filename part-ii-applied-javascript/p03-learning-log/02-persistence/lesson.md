# Project 3.2 · Export and import persistence

## Learning goal

Project 3.2 · Export and import persistence: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

We’ve added useful entries. It would be nice if they survived closing the page, so let’s give them a file format and a way back in.

A portable data file is a persistence boundary. This stage exports JSON as a download and imports it after validation. The runner preview has an opaque origin, so it intentionally does not depend on localStorage. A standalone app served from a regular origin can add browser storage later. Parse and validate the entire import before replacing existing state so a bad file does not destroy current entries.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Add entries, export a file, re-run the preview, then import the file to restore them. The preview permits local JSON downloads; importing uses the file you select.

## Example code

```javascript
const app=document.querySelector('#app');
app.innerHTML='<form><label>Learning entry <input name="entry" required maxlength="200"></label><button>Add</button></form><ul aria-live="polite"></ul>';
const form=app.querySelector('form'),list=app.querySelector('ul');
let entries=[];
const exportButton=document.createElement('button');
exportButton.textContent='Export JSON';
const importInput=document.createElement('input');
importInput.type='file';
importInput.accept='.json';
importInput.setAttribute('aria-label','Import entries JSON');
app.append(exportButton,importInput);
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
exportButton.onclick=()=>{
  const url=URL.createObjectURL(new Blob([JSON.stringify(entries,null,2)],{type:'application/json'}));
  const a=document.createElement('a');
  a.href=url;
  a.download='learning-log.json';
  a.click();
  setTimeout(()=>URL.revokeObjectURL(url),1000);
};
importInput.onchange=async()=>{
  try{
    const file=importInput.files[0];
    if(!file)return;
    if(file.size>100000)throw new Error('File too large');
    const data=JSON.parse(await file.text());
    if(!Array.isArray(data)||!data.every(e=>e&&typeof e.id==='string'&&typeof e.text==='string'&&e.text.trim()&&e.text.length<=200)||new Set(data.map(e=>e.id)).size!==data.length)throw new Error('Invalid entries');
    entries=data;
    render();
    console.log('Imported',entries.length);
  }catch(error){
    console.error(error.message);
  }
};
render();
```

## Expected output

```text
Add entries, export a file, re-run the preview, then import the file to restore them. The sandbox may restrict downloads; open the lesson with the standalone preview instructions if necessary.
```

## Walk through the example

Export serializes the model into a Blob and creates a temporary download URL. Import reads a selected file, checks its size, parses it, validates every record and ID, and only then replaces entries. A rejected file leaves the existing model untouched.

## Try it yourself

Reject duplicate IDs and an import with a non-string text value. Verify existing entries survive a failed import.

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
