## Solution

```javascript
if (honeypot.value !== "") {
    status.textContent = "Thanks for your comment.";
    comment.value = "";
    honeypot.value = "";
    return;
}
```

```text
Thanks for your comment.
```

The honeypot is an input that no person can reach. Its label says to leave it empty, and CSS moves it off-screen. Keyboard users skip it because of `tabindex="-1"`, and screen readers skip it because the wrapper is `aria-hidden="true"`.

A bot that fills every field fills it in. The handler sees a value, which is strong evidence that nobody typed it, and it refuses to save the comment.

The reply is the same for both outcomes. This is deliberate. If a rejected submission showed an error, the bot's author would learn exactly which field gave the game away, and would simply remove it. A neutral reply gives them nothing to adjust.

Notice that the bot button in this step also fills the honeypot, so the comment is dropped and the saved list stays empty. Compare that with the previous step, where the same button saved its comment.

---
