# Why bots matter

A comment form looks like a small thing, and then someone discovers that it is the easiest place on the site to post advertising. The form is public. Anyone can read its fields, and anyone can send the same fields back again, thousands of times, without opening a browser at all.

We are not going to stop bots in this chapter. We are going to learn what the common defenses actually accomplish, and where each one stops working. Let's start by seeing how little the page can tell.

## Try the form

Type a comment and press Submit. The status line counts the saved comments. Now press **Simulate a bot**. The button fills in the comment and submits the form, and the page saves it the same way.

Look at what the script does:

```javascript
botButton.addEventListener("click", () => {
    comment.value = "Cheap watches, click here";
    form.requestSubmit();
});
```

```text
Saved 1 comment(s).
```

The handler for Submit is the same handler the bot uses. It checks that the text is not empty, saves it, and clears the field. It has no idea whether a finger pressed a key.

## Why the browser cannot be the referee

The page is code that runs on the visitor's computer. The visitor controls that computer. Nothing on the page can make the visitor's own machine behave honestly, so any check on the page is a request, not an enforcement.

A determined bot does not even need the page. It can read the form's field names from the HTML, and then send a plain request to the server with whatever values it likes. The form's JavaScript never runs.

That gives us the first rule of this chapter. **A client-side check protects against mistakes and casual misuse. It does not prove that a human sent the data.** Client-side checks are still useful, because they give honest people quick feedback, and they filter out the cheapest automated traffic. They just cannot be the last line of defense.

## Why the old habit fails

Many older forms call `form.submit()` directly, instead of letting the Submit button fire the event. The difference matters:

```javascript
form.submit();        // sends the form; no submit event is fired
form.requestSubmit(); // fires the submit event first, then sends if not cancelled
```

If your validation lives in a `submit` handler, `form.submit()` skips it entirely. `requestSubmit()` is the modern call, and it behaves like a click on Submit. Use it when you want the handler to run.

## Try it yourself

- Change the bot's comment to a sensible sentence, and confirm the page treats it exactly the same way.
- Submit an empty comment. What does the status line say, and why does the bot never reach that branch?
- Replace `form.requestSubmit()` with `form.submit()`, and press Simulate a bot. What happens to the saved list, and why?

## Going further

Think about what an attacker learns by reading the page's source. Everything the form sends is visible there: field names, the address it posts to, and any hidden fields. Hiding something in the HTML is not the same as keeping it secret. Every later step in this chapter depends on that idea, so it's worth remembering.

## More background

See [MDN: HTMLFormElement.requestSubmit()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/requestSubmit) and [OWASP: Automated Threats to Web Applications](https://owasp.org/www-project-automated-threats-to-web-applications/).

---
