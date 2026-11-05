# GET and POST requests

HTTP methods describe the intention of a request. A `GET` usually asks the server for data. A `POST` usually sends new data for the server to process. The browser can use the same jQuery AJAX machinery for both, but the endpoint and server behavior are different.

---

```javascript
$.get("/api/status").done(function (data) {
  console.log(data);
});

$.post("/api/comments", { text: "Hello" }).done(function (data) {
  console.log(data);
});
```

The runnable example simulates the two outcomes so it does not depend on an external service. In a real application, `/api/status` might return current work items, while `/api/comments` would receive a comment and create a record.

| Method | Typical purpose | Data location |
| --- | --- | --- |
| `GET` | Read data | Query string or no body |
| `POST` | Create or process data | Request body |
| `PUT` / `PATCH` | Replace or update data | Request body |
| `DELETE` | Remove data | URL or request body, depending on API |

```text
GET request completed for status.
POST request completed for comment.
```

> **Never assume success from the fact that a callback ran.** Real code should inspect the response, status code, and error callback before announcing that a save worked.

---

## Try it Yourself

Add a simulated response for a `DELETE` action. Then write the equivalent `$.ajax({ method: "GET", url: "/api/status" })` call and compare it with the shorthand `$.get(...)` form.

---

## More Background

- [jQuery `$.get()`](https://api.jquery.com/jQuery.get/)
- [jQuery `$.post()`](https://api.jquery.com/jQuery.post/)
- [MDN: HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods)

---
