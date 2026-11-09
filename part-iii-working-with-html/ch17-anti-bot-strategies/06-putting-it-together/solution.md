## Solution

```javascript
// 1. The honeypot
if (honeypot.value !== "") {
    neutral();
    return;
}

// 2. The timing check
if (Date.now() - openedAt < MIN_MILLISECONDS) {
    neutral();
    return;
}

// 3. The challenge
const given = answer.value.trim();
if (given === "" || Number(given) !== expected) {
    status.textContent = "That answer is not right. Try again.";
    return;
}
```

```text
Thanks for your comment.
```

The checks run in order of cost. The honeypot is a single comparison, so it runs first, and it stops most simple bots at no cost. The timing check is also cheap. The challenge is the most expensive for the visitor, because it asks them to do something, so it comes last. A bot that fails the honeypot never sees the question at all.

The first two checks reply neutrally. The challenge replies with a message, because a person who misjudged the sum needs to know. That's a deliberate trade-off. Each message you show tells an attacker something, so show only the messages a legitimate visitor needs.

The "careful bot" shows the limit that the challenge step described. It reads the question from the page, computes the sum, and types it in. It passes the challenge, the honeypot, and the timing check. Each check raised the price of this attack, and none of them stopped it. Only the server-side rules from the previous step, with real records and real limits, make a difference to a determined attacker.

---
