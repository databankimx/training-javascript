# 16 · HTTP, fetch, and response validation

## Learning goal

16 · HTTP, fetch, and response validation: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

A request completed, so everything must be fine. Unfortunately, a server can quite successfully tell us that the thing we asked for does not exist.

fetch returns a promise for a Response. HTTP error status codes such as 404 normally resolve that promise, so check response.ok yourself. Network failures reject. Parsing JSON is asynchronous and does not validate the resulting object. AbortSignal.timeout bounds a request. This example creates a local HTTP server so it works offline and teaches both ends of a request.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Expect 16, then the process exits after closing the server.

## Example code

```javascript
import { createServer } from 'node:http';
const server = createServer((req,res) => {
  res.setHeader('Content-Type','application/json');
   res.end(JSON.stringify({lessons: 16}));
});
await new Promise(resolve => server.listen(0,'127.0.0.1',resolve));
try {
  const response = await fetch(`http://127.0.0.1:${server.address().port}`, {signal:AbortSignal.timeout(2000)});
  if (!response.ok) throw new Error('HTTP ' + response.status);
  const data = await response.json();
  if (!Number.isInteger(data.lessons)) throw new TypeError('Invalid lesson count');
  console.log(data.lessons);
}finally {
  await new Promise(resolve => server.close(resolve));
}
```

## Expected output

```text
16
```

## Walk through the example

The server binds an available loopback port and returns a small JSON record. The client builds its URL from the actual port, sets a timeout, checks the status, parses JSON, and validates the field. finally closes the server even when any of those steps fails.

## Try it yourself

Return status 404 from the server and verify the client rejects it explicitly. Then return a string instead of a numeric lesson count.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.

## jQuery comparison: fetch versus Ajax

Vanilla JavaScript used in this course:

```js
const response = await fetch('/api/entries');
if (!response.ok) throw new Error('HTTP ' + response.status);
const entries = await response.json();
```

Familiar jQuery reading example (requires jQuery; not executed here):

```js
$.ajax({ url: '/api/entries', dataType: 'json' })
  .done(function (entries) { /* render */ })
  .fail(function (xhr, status, error) { /* report */ });
```

fetch requires an explicit HTTP status check and JSON parsing. jqXHR has jQuery Deferred and Ajax conventions and should not be treated as an identical native Promise. Compare methods, request encoding, headers, credentials, cancellation, and error handling before translating existing code. These URLs illustrate an interface and are not services supplied by the course.

We’ll give jQuery its own course. For now, the comparison helps us read familiar DataBank code while keeping this example in vanilla JavaScript.
