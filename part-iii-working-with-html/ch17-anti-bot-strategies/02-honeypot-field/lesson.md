# A honeypot field

A honeypot is a field that a person never sees and never fills in. Bots do not look at the page the way people do. Many fill every input they find in the HTML, so the honeypot catches them by accident. It costs the honest visitor nothing, because they never meet it.

The idea is simple, but the details decide whether it works, so we'll build it step by step.

## The trap in the HTML

The honeypot lives inside the form, labelled as something to leave empty:

```html
<div class="honeypot" aria-hidden="true">
    <label for="website">Leave this field empty</label>
    <input id="website" name="website" type="text" tabindex="-1" autocomplete="off">
</div>
```

Three details keep it away from people without making it obvious to bots:

- **CSS moves it off-screen.** A person looking at the page never sees it.
- **`tabindex="-1"` removes it from the Tab order,** so keyboard users do not land on it.
- **`aria-hidden="true"` hides it from screen readers,** so a blind visitor is not asked to leave an invisible field empty.

Notice that we use off-screen positioning instead of `display: none`. Some bots skip fields that are hidden with `display: none`, because they assume those fields are not real. Moving the field off-screen keeps it in the page for the bot while staying hidden from the person.

## The check

The submit handler checks the honeypot before it saves anything:

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

## Why the reply is the same

When the check fails, the page says the same thing it says on success. That's the part that surprises people, and it's the important part. An error message would teach the bot which field is the trap, and the bot's author would remove it on the next run. A neutral reply gives them nothing to act on.

## Try it yourself

- Press Submit with a comment and an empty honeypot. The comment should appear in the list.
- Press Simulate a bot. The reply reads the same, but the list does not change. Why?
- Remove the `aria-hidden` attribute, then use Tab to move through the form. Does keyboard focus reach the honeypot? What about after you restore `tabindex="-1"`?

## Going further

A honeypot is a filter, not a lock. A bot that inspects the page can see the field's name and its CSS, and a more careful bot can skip fields that are positioned off-screen. Every defense in this chapter is one more hurdle, and the aim is to make automated abuse expensive enough that a determined attacker prefers a different site. Keep that goal in mind when a clever-looking trick seems like the final answer.

## More background

See [OWASP: Automated Threats Handbook](https://owasp.org/www-project-automated-threats-to-web-applications/) and [MDN: aria-hidden](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden).

---
