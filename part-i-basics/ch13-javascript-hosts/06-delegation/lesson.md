# 19 · Event delegation and handler semantics

## Learning goal

19 · Event delegation and handler semantics: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

We add a new button and discover that its click handler stayed behind with the old buttons. Let’s put the handler somewhere that can see the newcomers.

Events often bubble from a child to an ancestor. A delegated listener uses that path to handle descendants added later. event.target identifies the original target; event.currentTarget is the element whose listener is running. closest finds a matching ancestor, so clicking a nested span still activates its button. Constrain the match to the intended container. Returning false from a native listener does not cancel the event; use preventDefault and stopPropagation explicitly when each is needed.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

The initial and dynamically added buttons are removable. Clicking the nested label works too.

## Example code

```javascript
const app=document.querySelector('#app');
app.innerHTML='<div id="actions"><button class="remove"><span>Remove this button</span></button></div><button id="add">Add another</button>';
const actions=app.querySelector('#actions');
actions.addEventListener('click', event => {
  const button=event.target instanceof Element ? event.target.closest('button.remove') : null;
  if(!button || !actions.contains(button)) return;
  button.remove();
   console.log('Removed through one delegated listener');
});
app.querySelector('#add').addEventListener('click',()=>{
  const button=document.createElement('button');
  button.className='remove';
  button.textContent='Dynamic button';
  actions.append(button);
});
```

## Expected output

```text
The initial and dynamically added buttons are removable. Clicking the nested label works too.
```

## Walk through the example

One listener belongs to actions. A click on a nested span bubbles there, and closest locates the remove button responsible for the interaction. The containment check keeps the match within the intended component. The Add listener creates new buttons without registering another remove handler.

## Try it yourself

Compare the listener with $("#actions").on("click", "button.remove", function(event) {...}). Explain why an arrow callback changes the meaning of this in jQuery handlers.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[jQuery .on()](https://api.jquery.com/on/) and [MDN events](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events).

## jQuery comparison: delegated events

Vanilla JavaScript used in this course:

```js
container.addEventListener('click', event => {
  const button = event.target instanceof Element
    ? event.target.closest('button.remove') : null;
  if (!button || !container.contains(button)) return;
  button.remove();
});
```

Familiar jQuery reading example (requires jQuery; not executed here):

```js
$(container).on('click', 'button.remove', function (event) {
  $(this).remove();
});
```

In the native listener currentTarget is container, while button is the matched descendant. In a normal delegated jQuery function, this is the matched descendant. Arrow functions retain lexical this. Native return false does not implement jQuery cancellation behavior. To remove a native listener retain the handler reference; jQuery also offers .off() and event namespaces.

We’ll give jQuery its own course. For now, the comparison helps us read familiar DataBank code while keeping this example in vanilla JavaScript.
