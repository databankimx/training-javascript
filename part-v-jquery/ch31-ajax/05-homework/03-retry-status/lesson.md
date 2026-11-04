# Homework: retry a failed request

Build a request that fails once with HTTP `503`, retries once, and then succeeds with HTTP `200`. Display both attempts. Do not hide the failure. A retry is useful only if the log makes the timeline clear.

```javascript
function tryOnce() {
  request().done(/* success */).fail(/* retry once */);
}
```

```text
Attempt 1: HTTP 503
Attempt 2: HTTP 200
```

## Try it Yourself

Add a maximum-attempt guard so a permanently failing service cannot recurse forever. Then explain why a real application might wait briefly between retries. The spoiler contains a complete solution.

---
