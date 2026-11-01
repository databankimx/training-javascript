# Hello, world!

No matter what language you learn, your first program is almost always an instruction to the computer to print “Hello, world!” to the screen. That may seem frivolous, but it gives us a quick way to prove that the editor can send instructions to the computer and that the computer can execute them in the language we are learning. It is a small test, but a useful one. Computers are very good at making small tests surprisingly emotional.

For now, we are deliberately keeping the program plain. No variables, no browser page, no framework, and no cleverness that needs its own footnote. We will earn the cleverness later.

```javascript
console.log("Hello, world!");
```

The line calls `console.log` with a string. That call writes the string to the runner’s console:

```text
Hello, world!
```

> `console` is the place where a program can report information while it runs.
>
> `log` is a function on `console`. It receives a value and writes it there.
>
> A function is a named action we can ask the computer to perform. We will review functions in detail later.

There are a few small pieces here, and beginners are allowed to notice all of them:

- `console.log` names the action we want.
- The parentheses hold the value we are giving to that action.
- `"Hello, world!"` is a string literal, which is text written directly in the code.
- The semicolon marks the end of the statement. JavaScript can often infer the ending, but writing it makes the boundary visible and removes one more thing for the reader to guess.

The punctuation inside the quotation marks is part of the string. The parentheses and semicolon are JavaScript punctuation. They do different jobs, despite all looking like small marks that have wandered into the sentence.

---

## Try it Yourself

Change the message to your name and predict exactly what will appear. Then add another `console.log` with one thing you hope to learn. Run it again and compare the two output lines.

Now make one controlled mistake. Misspell `console`, run the program, and read the error. You will get a `ReferenceError` because JavaScript cannot find the name you gave it. The computer is not being dramatic. It is being extremely literal, which is both its charm and its primary personality defect. Fix the spelling and run it again.

Believe it or not, you’re a JavaScript programmer now. The rest is just details.

---

## More background

For a little more background, see the [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) or [Eloquent JavaScript](https://eloquentjavascript.net/). You do not need to read either book before changing the greeting. That would be an oddly elaborate way to avoid printing two words.

---
