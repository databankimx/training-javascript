# Homework: limit submissions

A comment form is being flooded, and the team has agreed a simple rule: no more than two comments in any thirty seconds from the same visitor. A visitor who goes over the limit should see a neutral message, and their comment should not be saved.

Start from the starter `main.js`, which saves every comment. Add the limit.

## The task

1. Keep a list of the times of the recent accepted submissions.
2. On each submit, drop the times older than thirty seconds from the list.
3. If two or more times remain, do not save the comment. Show `Please wait a while before sending another comment.`
4. Otherwise save the comment, record the time, and show the usual thanks message.

Submit three comments within thirty seconds. The third should not be saved, and it should show the message above.

The starter submit handler is where the new code goes:

```javascript
form.addEventListener("submit", event => {
    event.preventDefault();
    // ...check the text, then add the limit here, then save
});
```

The third submission should show:

```text
Please wait a while before sending another comment.
```

## Hints

- `Date.now()` gives the time in milliseconds, so thirty seconds is `30000`.
- Filtering the list with `filter` is clearer than removing items with a loop.

## Try it yourself

- Wait more than thirty seconds between submissions. Does the limit reset as you expect?
- Change the limit to three. Which submission is now the first to be refused?

## Solution

The solution is in `solution.md`. Try the task yourself first, because the reasoning is more useful when you've met the edge cases.
