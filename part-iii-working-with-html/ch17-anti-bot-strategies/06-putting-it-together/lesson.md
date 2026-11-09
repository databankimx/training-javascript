# Putting the checks together

We now have three checks: a honeypot, a timing rule, and a challenge. Each one catches something the others do not, and each one has a weakness the others partly cover. This step puts them in one form, in an order that makes sense, and then tests the combination against the bots we've been building.

## Order the checks by cost

Put the cheapest checks first, so that most unwanted traffic is turned away before the expensive work starts:

```javascript
if (honeypot.value !== "") {
    neutral();
    return;
}

if (Date.now() - openedAt < MIN_MILLISECONDS) {
    neutral();
    return;
}

const given = answer.value.trim();
if (given === "" || Number(given) !== expected) {
    status.textContent = "That answer is not right. Try again.";
    return;
}
```

The honeypot is one comparison, so it's free. The timing check is a subtraction. The challenge asks the visitor to do something, so it comes last. A bot that fills the honeypot never sees the question.

## Reply quietly, except where it helps

The first two checks reply with the same neutral sentence. The challenge replies with a message, because a person who misjudged the sum needs to know what happened.

That is a trade-off, not a rule. Every message you show tells an attacker something about the check that failed. Show only the messages a legitimate visitor needs to continue.

## Test the combination

Press each button and watch the result:

```text
Thanks for your comment.
```

The neutral reply means a check stayed silent. It doesn't mean the comment was saved. Watch the list as well.

- **Submit** with a sensible comment, a correct answer, and a pause before pressing it. The comment is saved.
- **Simulate a bot** fills the honeypot. The reply is neutral and nothing is saved.
- **Simulate a careful bot** waits, reads the question from the page, and types the answer. It passes all three checks, and its comment is saved.

The third result is the lesson. Every check we built raised the cost of the attack, and none of them stopped a script that reads the page carefully. Anything the page shows, the page's script can read.

## Try it yourself

- Change the order so the challenge comes before the honeypot. Does the bot still get a neutral reply, and what does the challenge do to the visitor who sees the question first?
- Remove the timing check. Which button now saves a comment that it should not, and why?
- Think about the careful bot. What would make it harder to write, and which of those changes would also make the form harder for people?

## Going further

The best outcome for an anti-bot design is that a person never notices it. Each check you add is friction, and friction lands hardest on people who are slow, unfamiliar with the page, or using assistive technology. Before you add a fourth check, measure what the first three already cost.

## More background

See [OWASP: Automated Threats Handbook](https://owasp.org/www-project-automated-threats-to-web-applications/) and [W3C: Making content usable for people with cognitive and learning disabilities](https://www.w3.org/WAI/WCAG21/Understanding/making-content-usable.html).

---
