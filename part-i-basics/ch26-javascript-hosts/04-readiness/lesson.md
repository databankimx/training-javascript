# 17 · DOM readiness and page load

## Learning goal

17 · DOM readiness and page load: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

The page looks ready. The DOM may agree. The images may still be having a moment. These are different milestones, and using the wrong one can produce an impressively intermittent problem.

DOM readiness and full page load are different lifecycle milestones. DOMContentLoaded fires after HTML parsing and deferred/module scripts have run; it does not wait for images. window load waits for the page and dependent resources such as images. Assigning window.onload replaces that property handler, while addEventListener permits multiple listeners. A listener added after an event fires does not replay it. Check document.readyState when initialization might happen late.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

The preview initializes when its DOM is available. A load message follows if the listener was attached before load. This module is injected at the end of body, so the DOM may already be parsed.

## Example code

```javascript
function init() {
  document.querySelector('#app').textContent = 'DOM is ready for initialization.';
  console.log('init at readyState:', document.readyState);
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init, {once:true});
}else {
  init();
}
window.addEventListener('load', () => console.log('Page resources loaded'), {once:true});
```

## Expected output

```text
The preview initializes when its DOM is available. A load message follows if the listener was attached before load. This module is injected at the end of body, so the DOM may already be parsed.
```

## Walk through the example

init contains the work that needs a usable DOM. The readyState branch either registers it for a future DOMContentLoaded event or runs it immediately after parsing. The separate load listener illustrates another milestone. Registering a load listener late will not recover a load event that has already happened.

## Try it yourself

Explain why window.onload = function () {...} is not equivalent to $(document).ready(function () {...}). Write a late-safe initialization function and call it after a button click.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

When would waiting for image dimensions require load rather than DOM readiness? What happens if you assign window.onload twice? Does addEventListener replay an earlier event?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[jQuery .ready()](https://api.jquery.com/ready/) and [MDN DOMContentLoaded](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event).

## jQuery comparison: DOM ready is not window load

Vanilla JavaScript used in this course:

```js
function init() { /* bind controls */ }
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init, { once: true });
} else { init(); }
window.addEventListener('load', () => { /* resources loaded */ });
```

Familiar jQuery reading example (requires jQuery; not executed here):

```js
$(document).ready(function () { /* DOM ready */ });
// Current recommended shorthand:
$(function () { /* DOM ready */ });
$(window).on('load', function () { /* resources loaded */ });
```

window.onload = function () {...} waits for full load and replaces an earlier property assignment. It is not the counterpart of ready. jQuery ready also handles registration after DOM readiness, which a bare DOMContentLoaded listener does not. The readyState guard handles early and late native initialization. See the official ready API reference below.

We’ll give jQuery its own course. For now, the comparison helps us read familiar DataBank code while keeping this example in vanilla JavaScript.
