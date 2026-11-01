# Fetching data

`fetch` is the modern browser API for making HTTP requests. It returns a promise for a response, and reading a JSON body is another asynchronous step.

```javascript
async function loadPerson() {
  const response = await fetch("/api/person");
  if (!response.ok) throw new Error("Request failed");
  return response.json();
}

const person = await loadPerson();
console.log(person.name);
```

Our runnable example uses a local promise with the same response shape, so the lesson remains deterministic offline. In a real application, the call might target a documented service URL:

```javascript
const response = await fetch("https://api.example.com/v1/people/42");
```

That URL is a teaching example only and is intentionally not used by the runnable script.

> `fetch(url)` starts an HTTP request and returns a promise for a `Response`.
>
> `response.ok` indicates whether the HTTP status is in the successful range.
>
> `response.json()` reads and parses a JSON response body asynchronously.

```text
Ada
```

Check the status before trusting the body. A response can arrive successfully at the network level while still reporting an HTTP error such as 404.

---

## Try it Yourself

Add a second field to the returned JSON and print it. Then make `ok` false and handle the thrown error.

---

## More background

See [MDN: fetch](https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch).

---
