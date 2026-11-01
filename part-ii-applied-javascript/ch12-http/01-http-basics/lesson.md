# HTTP requests and responses

When JavaScript consumes a web service, it sends an HTTP request and receives an HTTP response. An HTTP response has a status line, headers, and usually a body containing data. The status tells us what happened before we try to interpret the body.

```javascript
const response = { status: 200, ok: true, body: "OK" };

console.log(response.status);
console.log(response.body);
```

> A request asks a server to perform an operation or return data.
>
> A response carries the server's status, metadata, and body back to the client.
>
> Status `200` means the request succeeded. Other status families describe redirects, client errors, or server errors.

| Status | Meaning | Typical situation |
| ---: | --- | --- |
| `200` | OK | The request succeeded and the response contains the requested result. |
| `201` | Created | A `POST` request created a new record. |
| `204` | No Content | The request succeeded, but there is no response body to parse. |
| `301` | Moved Permanently | The resource has a permanent new URL. |
| `303` | See Other | Follow the URL in the `Location` header, often after submitting a form. |
| `400` | Bad Request | The server could not understand or validate the request. |
| `401` | Unauthorized | Authentication is missing or invalid. |
| `403` | Forbidden | The server understood the request but will not allow it. |
| `404` | Not Found | The URL or requested record does not exist. |
| `500` | Internal Server Error | The server failed while handling an otherwise valid-looking request. |
| `503` | Service Unavailable | The service is temporarily unable to respond. |

```text
200
OK
```

This first example uses an ordinary object to make the response shape visible. A real `fetch` or AJAX call creates the response from an HTTP exchange. For example, a production client might target a specific service URL:

```javascript
const response = await fetch("https://api.example.com/v1/people/42");
console.log(response.status);
```

That URL is illustrative, not part of the runnable script. In a real application, the host, path, authentication, and request method come from the service documentation.

---

## Try it Yourself

Add a status message for a 404 response and a separate message for a 500 response. Explain why status handling belongs before using the body.

---

## More background

See [MDN: HTTP overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview).

---
