# Homework: readiness investigation

This time, investigate timing rather than merely repeating the example. Register one callback for jQuery ready, one for `DOMContentLoaded`, and one for `window.load`. Each callback should add a line to the page and the console.

```javascript
function report(label) {
  // Add the label to the page and the console.
}
```

```text
jQuery ready fired
DOMContentLoaded fired
window load fired
```

The first two events may appear in a slightly different order depending on the browser and the way the page is loaded. Explain what condition each event represents, and explain why `window.load` is later when the page contains an image or another external resource.

## Try it Yourself

Add an image with a deliberately slow URL or a local image, then record whether the page is parsed before the image has finished loading. Do not use a blocking loop to fake the delay. The browser already has enough opportunities to surprise us.

The spoiler contains a complete implementation.

---
