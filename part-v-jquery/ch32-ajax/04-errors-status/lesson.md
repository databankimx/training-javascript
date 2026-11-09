# AJAX errors and status

An AJAX request has more than one ending. It may succeed, fail because the network is unavailable, or receive an HTTP error such as `404` or `500`. jQuery's `.done(...)`, `.fail(...)`, and `.always(...)` callbacks make those paths explicit.

---

```javascript
request(true)
  .done(data => $("#output").text(`Success: HTTP ${data.status}`))
  .fail(error => $("#output").text(`Request failed: HTTP ${error.status}`));
```

```text
Success: HTTP 200
Request failed: HTTP 500
```

The simulated request lets us test both paths. In a real service, inspect the status code before presenting a success message. A server can respond correctly at the network level and still report that the requested record was missing or that the server failed.

| Callback | Use |
| --- | --- |
| `.done(...)` | Successful response |
| `.fail(...)` | Network or HTTP failure |
| `.always(...)` | Cleanup that must happen either way |

> **HTTP status is part of the response.** Treating every response body as success is how a friendly “Saved!” message gets attached to a `500` error.

---

## Try it Yourself

Add `.always(...)` to hide a loading message. Then add a simulated `404` response and display a different message from the `500` case.

---

## More Background

- [jQuery Deferred](https://api.jquery.com/category/deferred-object/)
- [MDN: HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status)

---
