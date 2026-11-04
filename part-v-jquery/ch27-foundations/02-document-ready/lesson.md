# Document ready

Timing is where many old browser scripts become unexpectedly exciting. A script can be perfectly written and still fail if it asks for an element before the browser has created it. jQuery's document-ready helper was designed to make that timing problem easier to handle.

---

## Three ways to wait

```javascript
$(document).ready(function () {
  report("jQuery ready fired");
});
document.addEventListener("DOMContentLoaded", () => report("DOMContentLoaded fired"));
window.addEventListener("load", () => report("window load fired"));
```

The jQuery callback above uses the traditional `function () { ... }` syntax. You will see that form frequently in older jQuery code. The equivalent arrow-function form is shorter:

```javascript
$(document).ready(() => report("jQuery ready fired"));
```

Both forms create a function and pass it to `ready`. The choice of syntax does not change when the callback runs. Arrow functions do have different `this` behavior, which matters in some event handlers, but we can leave that particular rabbit hole in its burrow for now.

> **OnBase compatibility note:** Some older OnBase versions render forms through older browser emulation and may not support arrow functions reliably. In those forms, use the traditional `function () { ... }` syntax unless you have verified the target environment.

Here's the short version:

| Pattern | Runs when | Typical use |
| --- | --- | --- |
| `$(document).ready(...)` | The HTML document has been parsed | jQuery page setup |
| `DOMContentLoaded` | The document has been parsed | Native page setup |
| `window.load` | The document and dependent resources have loaded | Images or other resources matter |
| `defer` | A head script runs after parsing | Modern script loading |

`$(document).ready(...)` and its shorthand, `$(...)`, are jQuery's familiar answer. The callback waits until the DOM exists, but it does not wait for every image and stylesheet. That is usually what an interactive form needs. The shorthand can use either function style:

```javascript
$(function () {
  report("Traditional shorthand");
});

$(function () {
  report("Another ready callback");
});
```

```text
jQuery ready fired
DOMContentLoaded fired
window load fired
```

The exact order of the first two messages is not the lesson's point. The useful idea is that the callbacks run after the document is safe to inspect. We will return to `window.onload` when a lesson genuinely needs the whole window to finish loading.

> **Document ready** means that the browser has parsed the HTML into the DOM. It does not mean that every network resource has finished loading.

---

## Try it Yourself

Add a second jQuery-ready callback. Then add an image to the page and compare the time at which `DOMContentLoaded` and `load` fire. Keep the console open. A page that appears visually complete can still have a different event timeline underneath.

---

## More Background

- [jQuery ready documentation](https://api.jquery.com/ready/)
- [MDN: DOMContentLoaded](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event)

---
