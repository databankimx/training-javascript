## Solution

```javascript
const given = answer.value.trim();
if (given === "" || Number(given) !== expected) {
    status.textContent = "That answer is not right. Try again.";
    return;
}
```

```text
That answer is not right. Try again.
```

The answer is read from the field, trimmed, and checked for emptiness before it is converted to a number. Only then is it compared with `expected`, the sum the script stored when it asked the question.

`Number(given)` returns `NaN` for text such as `"seven"`. Comparing `NaN` with `!==` is always true, so a non-number is refused without a separate test. The empty check is there because `Number("")` returns `0`, which would look like a valid answer for a question whose sum is zero.

After a successful comment, `newQuestion()` replaces both the question and the stored answer. A recorded answer, or a bot that worked out the sum once, cannot be reused on every later submission.

The bot button submits without an answer, so it is refused with the same message a mistaken person would see. That is deliberate: the challenge is the one check in this chapter that speaks to the visitor, and it should explain itself.

---
