# Solution: API limits and response metadata

```javascript
if (rateLimit.remaining < 10) {
  console.log("Rate limit is nearly exhausted; wait before retrying.");
}
```

```text
Remaining: 42
Resets at: 12:30 PM
70% available
```

With `remaining` set to `3`, the warning appears because the client is close to the service limit. In a real application, the response’s reset time would help decide whether to wait or use a cached result.

---
