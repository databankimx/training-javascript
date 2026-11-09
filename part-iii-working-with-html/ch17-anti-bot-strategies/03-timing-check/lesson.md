# Timing checks

People are slow. They read the form, click into a field, and type something before pressing Submit. A script can submit the same form in a few milliseconds. That gap is useful, because a submission that arrives too quickly is probably not from a person.

The check is easy to write. The judgment behind it is the part to think about.

## Measure from when the form was shown

The script records the time as soon as it starts, and compares it with the time of each submission:

```javascript
const MIN_MILLISECONDS = 3000;
const openedAt = Date.now();

form.addEventListener("submit", event => {
    event.preventDefault();
    const elapsed = Date.now() - openedAt;
    if (elapsed < MIN_MILLISECONDS) {
        status.textContent = "Thanks for your comment.";
        comment.value = "";
        return;
    }
    // ...save the comment
});
```

`Date.now()` returns the current time in milliseconds since 1970, as a plain number. Subtracting two of them gives the elapsed time, which is the only arithmetic this check needs.

Try the form right after the page loads, with the bot button. The comment is dropped, and the reply is the neutral one.

```text
Thanks for your comment.
```

Now press **Simulate a slow person**. It waits three and a half seconds before submitting, and the comment is saved.

## Why three seconds, and why it is only a guess

The number is a judgment, not a law. Too short, and a quick typist gets rejected. Too long, and an impatient visitor gives up. Choose it from how your real form is used, and expect to tune it.

Also notice what the check measures. It measures time since the page loaded, not time spent typing. A person who loads the page, switches tabs, and returns ten minutes later passes the check, and a bot that waits three seconds before posting also passes it. The timing check raises the cost of automation. It does not identify anyone.

## Try it yourself

- Click Submit as quickly as you can after the page loads. Are you rejected? Try again after waiting, and compare.
- Change `MIN_MILLISECONDS` to 500, then to 10000. Which setting would you choose for a real form, and why?
- Reload the page, wait a while, and submit a comment. Does the timer restart? What does that tell you about what is being measured?

## Going further

A real application would record the time on the server as well, when the form is served, and sign that value so the client cannot change it. A value the browser can rewrite is a value the browser can lie about. We will meet the same principle again in the server-side step.

## More background

See [MDN: Date.now()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now) and [OWASP: Automated Threats Handbook](https://owasp.org/www-project-automated-threats-to-web-applications/).

---
