# A real local service

The earlier examples used local promises to keep one idea isolated. Now we can connect the pieces for real: start a tiny HTTP service, call it with `fetch`, read its JSON response, and close the service when we are finished.

```javascript
import { createServer } from "node:http";

const server = createServer((request, response) => {
  if (request.url === "/api/person") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ name: "Ada", tasks: 3 }));
    return;
  }

  response.writeHead(404, { "Content-Type": "application/json" });
  response.end(JSON.stringify({ error: "Not found" }));
});

await new Promise(resolve => server.listen(0, "127.0.0.1", resolve));
const port = server.address().port;

try {
  const response = await fetch(`http://127.0.0.1:${port}/api/person`);
  if (!response.ok) throw new Error(`Request failed: ${response.status}`);
  const person = await response.json();
  console.log(person.name);
  console.log(person.tasks);
} finally {
  await new Promise(resolve => server.close(resolve));
}
```

> `createServer` creates a Node HTTP service.
>
> Port `0` asks the operating system for an available local port, so the lesson does not collide with another process.
>
> `finally` closes the server whether the request succeeds or fails.

```text
Ada
3
```

This is a real request to a real local service. The server returns JSON, `fetch` receives it, and `response.json()` turns the body back into an object. The service is deliberately tiny, but the boundary is genuine.

---

## Try it Yourself

Add an `/api/tasks` route. Fetch it after the person request, validate its status, and print the returned data. Then request an unknown route and handle the 404 response.

---

## More background

See [Node.js: HTTP](https://nodejs.org/api/http.html) and [MDN: fetch](https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch).

---
