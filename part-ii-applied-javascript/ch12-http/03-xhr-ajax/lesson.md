# Legacy AJAX with `XMLHttpRequest`

Before `fetch`, browser code commonly used `XMLHttpRequest`, usually called XHR. AJAX is the broader idea of making asynchronous HTTP requests. XHR is one older API used to do it.

```javascript
const request = new XMLHttpRequest();
request.open("GET", "/api/person");
request.addEventListener("load", () => {
  if (request.status >= 200 && request.status < 300) {
    console.log(request.responseText);
  }
});
request.addEventListener("error", () => console.log("Network error"));
request.send();
```

The runnable example uses a small callback-based stand-in because `XMLHttpRequest` is a browser API. The shape is the important comparison. A real legacy application might target a service URL such as `https://api.example.com/v1/people/42` in its `open` call. The URL is illustrative and is not used by the runnable script.

> XHR uses event handlers such as `load` and `error` instead of returning a promise.
>
> `open` configures the method and URL. `send` starts the request.
>
> `responseText` contains the body as text, so JSON responses require explicit parsing.

```text
Legacy response
```

Modern code generally prefers `fetch`, but students are very likely to encounter XHR in older applications. jQuery's `$.ajax()` also builds on the older callback-oriented browser model.

---

## Try it Yourself

Add a callback error case to the runnable stand-in. Then compare the XHR events with `fetch` and list one advantage of each API.

---

## More background

See [MDN: XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest).

---
