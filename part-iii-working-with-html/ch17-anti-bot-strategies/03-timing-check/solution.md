## Solution

```javascript
const MIN_MILLISECONDS = 3000;
const openedAt = Date.now();

// inside the submit handler
const elapsed = Date.now() - openedAt;
if (elapsed < MIN_MILLISECONDS) {
    status.textContent = "Thanks for your comment.";
    comment.value = "";
    return;
}
```

```text
Thanks for your comment.
```

`Date.now()` returns the current time in milliseconds. Recording it once, when the script starts, and comparing it at submit time gives the time the form was open. Anything under three seconds is faster than a person is likely to read the form, select a field, and type a reply.

The "slow person" button waits 3.5 seconds before submitting, so it looks like someone who took their time. The check cannot tell a slow bot from a person, and it does not need to. A bot that waits is now doing the work of a person, and each comment it posts takes real time. That cost is the point.

The rule lives in the script, and the reply is the same neutral sentence used in the honeypot step, for the same reason.

---
