## Solution

```javascript
const recent = (this.recentByClient[request.clientId] ?? [])
    .filter(time => now - time < this.windowMilliseconds);
recent.push(now);
this.recentByClient[request.clientId] = recent;

if (recent.length > this.limit) {
    return { accepted: false, reason: "Too many requests. Wait and try again." };
}
```

```text
Too many requests. Wait and try again.
```

The server keeps a list of request times for each client, and drops the ones older than the window. Each new request is added, and if the list is now longer than the limit, the request is refused.

The count happens before the content check. If the empty-comment test came first, a flood of empty requests would never be counted, and it would be free to send them.

The bot's first three requests are accepted, its fourth and fifth are refused. The browser never decides that. It only reports what the server replied.

---
