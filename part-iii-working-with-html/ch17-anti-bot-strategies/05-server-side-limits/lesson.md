# Server-side limits

Every check in this chapter so far has lived in the page. We've said repeatedly that the page is not a barrier, and this step is where we act on that. A rate limit, a token that proves a challenge was passed, and a record of what was already accepted all belong on the server, where the visitor cannot change them.

A real server is a different program from the page, running on a different computer. This lesson has no such server, so the script plays the server's part. Read the comments in `main.js` as the boundary: the `server` object is the part that would run far away, and everything else is the page talking to it.

## A rate limit on the server

The rule is "no more than three requests from one client in ten seconds". The server keeps a list of request times for each client, and drops the old ones:

```javascript
const recent = (this.recentByClient[request.clientId] ?? [])
    .filter(time => now - time < this.windowMilliseconds);
recent.push(now);
this.recentByClient[request.clientId] = recent;

if (recent.length > this.limit) {
    return { accepted: false, reason: "Too many requests. Wait and try again." };
}
```

Press **Send as a bot (five times)**. The first three requests are saved, and the last two come back refused:

```text
Too many requests. Wait and try again.
```

## Who is the client?

Notice the `clientId` in the request. The page sends it, and the page can send any value it likes. A real server identifies a client by something the browser cannot freely choose, such as the connection's address or a session that the server issued. Even those can be faked by a determined attacker who controls many addresses, which is why rate limits are one layer among several, and why a sudden spike of requests from many places is itself a signal to watch.

The lesson's simulated client name is deliberately weak. It shows the mechanism, and it should make you uneasy about trusting any identifier the browser supplies.

## What must move to the server

- **The rate limit**, because the page can simply skip it.
- **The challenge answer**, because the page holds the expected value. A challenge checked only in the browser is a challenge the bot can read.
- **The honeypot and timing checks**, because the browser can skip them or rewrite the timestamp.
- **The record of what has been accepted**, so a replayed request cannot be counted twice.

The page still matters. It gives honest people immediate feedback, and it keeps simple mistakes off the wire. It just cannot be the place where the rule is enforced.

## Try it yourself

- Press **Send as a person** with an empty comment, and then with some text. Which one reaches the content check, and why does it matter which order the checks run in?
- Change `limit` to `1`, then press the bot button. How many comments are saved?
- Change `windowMilliseconds` to `100`. Press the bot button, wait a second, and press it again. What does this tell you about the window?

## Going further

Think about what happens when the server is restarted. Our `recentByClient` object lives in memory, so every restart forgets every limit. A real service stores these counts somewhere that survives a restart, and it has to decide what happens when several copies of the server share the same limit. Those are design questions, and they are why rate limiting is a server job rather than a page job.

## More background

See [OWASP: Automated Threats Handbook](https://owasp.org/www-project-automated-threats-to-web-applications/) and [MDN: Date.now()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now).

---
