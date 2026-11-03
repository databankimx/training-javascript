# API limits and response metadata

Public services usually limit how many requests a client may make in a period of time. That protects the service from one enthusiastic script behaving like a small weather system of requests, and it protects everyone else from the consequences. Many APIs report the limit in response headers or in a dedicated endpoint.

```javascript
const rateLimit = {
  limit: 60,
  remaining: 42,
  resetAt: "12:30 PM"
};

const availablePercent = Math.round((rateLimit.remaining / rateLimit.limit) * 100);

console.log(`Remaining: ${rateLimit.remaining}`);
console.log(`Resets at: ${rateLimit.resetAt}`);
console.log(`${availablePercent}% available`);
```

The runnable object stands in for metadata a real API might provide. A real response could expose headers such as `X-RateLimit-Limit`, `X-RateLimit-Remaining`, and `X-RateLimit-Reset`, or it could provide a JSON endpoint such as `https://api.example.com/v1/rate-limit`.

> A rate limit is the maximum number of requests a client may make during a period.
>
> Remaining capacity tells us how many requests we can still make before the limit resets.
>
> Metadata is information about the response or request, rather than the main records we asked for.

```text
Remaining: 42
Resets at: 12:30 PM
70% available
```

When a service reports that very little capacity remains, a client may need to wait, cache a result, combine requests, or show a useful message instead of retrying immediately. A retry loop that ignores the limit is not persistence. It is a polite-looking denial-of-service attack.

## Try it Yourself

Change `remaining` to `3`. Add a message when fewer than 10 requests remain. Then explain why the reset time matters when deciding whether to retry.

## More background

See [MDN: HTTP headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) and [GitHub: Rate limits](https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api).

---
