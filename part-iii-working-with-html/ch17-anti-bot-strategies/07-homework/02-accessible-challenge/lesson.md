# Homework: an accessible challenge

A challenge is only useful if everyone can use it. The page above asks "What is 7 + 5?", with a hint under the field. Right now a screen reader user who tabs into the field hears the label, but not the hint, and a wrong answer appears in a paragraph that nothing announces. This exercise fixes both problems without changing how the challenge works.

## The task

Start from the starter `main.js`, which has two TODO comments.

1. Connect the answer field to the hint, so a screen reader reads the hint when the field is focused. The usual way is `aria-describedby` on the input, pointing at the hint's `id`.
2. Announce the feedback. The feedback paragraph needs `aria-live="polite"`, so the message is read out when it changes. The visitor's focus should stay in the answer field, so they can correct it straight away.

The HTML needs one change for each of these, and the script needs none for the first. Start with the HTML.

The script sets this text, and the markup decides how a screen reader hears it:

```javascript
feedback.textContent = "That answer is not right. Try again.";
```

## The attribute that connects them

```html
<input id="answer" type="text" inputmode="numeric" autocomplete="off"
       aria-describedby="hint">
```

```text
Your answer, Type the answer as digits only.
```

The second line is roughly what a screen reader speaks when the field gets focus, after the label. Without `aria-describedby`, the hint paragraph is just text a sighted person can see.

## Try it yourself

- Remove `aria-live="polite"` from the feedback paragraph, and submit a wrong answer with a screen reader if you have one. Does the message still get read?
- Type `12` and submit. Then type `13` and submit. Does the feedback change in a way that is announced?

## Solution

The solution is in `solution.md`. Try the task first. The most common mistake is to move focus into the feedback paragraph, which announces the message but traps the visitor away from the field they need to fix.

---
