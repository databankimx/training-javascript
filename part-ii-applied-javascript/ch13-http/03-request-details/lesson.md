# Building an HTTP request

The previous lesson showed the short form of `fetch(url)`. Real service calls usually carry more information than a bare address. We may need query parameters to narrow the result, a method such as `POST` to create data, and headers that tell the server what format we accept or how we are authenticated.

```javascript
const baseUrl = "https://api.example.com/v1/repositories";
const query = new URLSearchParams({
  language: "javascript",
  sort: "stars",
  limit: "10"
});

const request = {
  method: "GET",
  url: `${baseUrl}?${query}`,
  headers: {
    Accept: "application/json"
  }
};

console.log(request.method);
console.log(request.url);
console.log(request.headers.Accept);
```

`URLSearchParams` turns the separate search values into the query-string portion of the URL. The `?` separates the path from those parameters. `fetch` can use the same pieces directly:

```javascript
const response = await fetch(request.url, {
  method: request.method,
  headers: request.headers
});
```

That real-world call is not in the runnable script, because this lesson is meant to be deterministic and offline. The URL is illustrative, but the shape is the same one you will see in service documentation.

> A query parameter narrows or modifies a request, such as `limit=10` or `sort=stars`.
>
> A method describes the operation. `GET` reads data, while `POST`, `PUT`, `PATCH`, and `DELETE` usually change data in different ways.
>
> A header carries metadata about the request, such as the response format the client accepts.

```text
GET
https://api.example.com/v1/repositories?language=javascript&sort=stars&limit=10
application/json
```

The URL is data, not decoration. When a service call fails, compare the exact URL, method, and headers with the service documentation before changing code at random. Random changes are how a typo acquires a second typo for company.

## Try it Yourself

Add an `owner` query parameter. Change the method to `POST`, add a `Content-Type` header, and explain why that request would need a body in a real application.

## More background

See [MDN: URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) and [MDN: fetch options](https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch#parameters).

---
