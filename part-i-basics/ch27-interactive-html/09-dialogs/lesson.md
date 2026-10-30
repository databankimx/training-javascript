# 28 · Dialogs, focus, and note entry

## Learning goal

28 · Dialogs, focus, and note entry: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

A note-entry window needs to open, accept a note, and close again. We should also be able to find our keyboard focus afterward. I like to know where I’ve left things.

A native dialog opened with showModal places content in the top layer and manages modal interaction. A form with method="dialog" can close it without a network request. Handle cancel and reopening deliberately, and return focus to the invoking control. A jQuery show/hide call on a div changes visibility but does not create modal focus behavior. This example mirrors note-entry overlays in the EForms coding form.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Open the note dialog, save a note, or cancel with the button or Escape. Notes are inserted as text.

## Example code

```javascript
const dialog=document.querySelector('dialog'),open=document.querySelector('#open'),form=dialog.querySelector('form');
open.addEventListener('click',()=>{
  form.reset();
  dialog.returnValue='';
  dialog.showModal();
});
dialog.addEventListener('close',()=>{
  if(dialog.returnValue==='save'){
    const text=form.elements.note.value.trim();
    if(text){
      const item=document.createElement('li');
      item.textContent=text;
      document.querySelector('#notes').append(item);
    }
  }
  open.focus();
});
```

## Expected output

```text
Open the note dialog, save a note, or cancel with the button or Escape. Notes are inserted as text.
```

## Walk through the example

Open resets the previous form and return value before showModal. The dialog form closes with the selected button’s value, and the close listener saves only a nonblank note from a save action. It appends that text to a new list item and returns focus to the invoking button.

## Try it yourself

Prevent saving a whitespace-only note and keep the dialog open with a helpful message. Test keyboard focus on open and close.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.

## jQuery comparison: modal behavior

Vanilla JavaScript used in this course:

```js
dialog.showModal();
dialog.close('cancel');
```

Familiar jQuery reading example (requires jQuery; not executed here):

```js
$('#note-modal').show();
$('#note-modal').hide();
```

The jQuery calls are visibility examples, not equivalent modal implementations. A complete modal needs focus management, keyboard dismissal, labeling, and background interaction control. jQuery UI dialog is a separate widget with its own API.

We’ll give jQuery its own course. For now, the comparison helps us read familiar DataBank code while keeping this example in vanilla JavaScript.
