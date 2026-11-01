# Troubleshooting web service responses

When a service call fails, do not guess. Inspect the URL, method, status, headers, response body, and browser network entry. The response often tells us whether the problem belongs to the client, the server, authentication, or the network boundary.

```javascript
const response = { status: 404, url: "https://api.example.com/v1/missing", body: "Not found" };

console.log(`Status: ${response.status}`);
console.log(response.body);
```

> Cross-domain requests are subject to the browser's same-origin policy. A server must opt into browser access with the appropriate CORS headers.
>
> The Network panel in browser developer tools shows the actual URL, method, status, request headers, response headers, timing, and body.
>
> Fiddler can capture and inspect HTTP traffic outside the page, which is useful when a request never reaches the expected server or when headers need careful comparison.

```text
Status: 404
Not found
```

The runnable example is a diagnostic stand-in. A real request might look like this:

```javascript
const response = await fetch("https://api.example.com/v1/missing");
console.log(response.url, response.status);
console.log(await response.text());
```

That URL is illustrative and is not called by the runnable script. In a browser, first check whether the request appears in Network. If it does not, inspect the URL, protocol, certificate, and CORS boundary. If it does appear, compare the status and response body with the service documentation. A 404 is different from a CORS error, and both are different from a 500.

---

## Try it Yourself

Change the diagnostic response to 401, 403, 500, and 503. For each one, write down the most likely next place to investigate. Add a response header and print it as part of the diagnostic output.

---

## More background

See [MDN: CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS), [Chrome DevTools Network reference](https://developer.chrome.com/docs/devtools/network/), and [Fiddler](https://www.telerik.com/fiddler).

---
