# The jQuery AJAX model

AJAX is the older name for making an asynchronous web request and updating part of a page instead of navigating to a new document. jQuery wraps that work in familiar callbacks and promise-like methods.

---

```javascript
function simulatedRequest() {
  return $.Deferred(function (deferred) {
    setTimeout(() => deferred.resolve({ status: "ready", count: 3 }), 250);
  }).promise();
}

simulatedRequest().done(function (data) {
  $("#output").text(`Status: ${data.status}; count: ${data.count}`);
});
```

The example simulates a response so the lesson remains runnable offline. A real request would target a URL such as `/api/status` and the server would return JSON. The page starts with a loading message, then updates the output when the response arrives.

```text
Status: ready; count: 3
```

> **Asynchronous** means the browser starts work and continues running other code while it waits. The callback runs later, when the response is ready.

---

## Try it Yourself

Change the simulated response to include a message and display it. Then make the request reject and add a `.fail(...)` handler. The exercise is about the timeline, not about pretending a timeout is a web service.

---

## More Background

- [jQuery AJAX](https://api.jquery.com/category/ajax/)
- [MDN: AJAX](https://developer.mozilla.org/en-US/docs/Glossary/AJAX)

---
