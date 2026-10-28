# 01 · Hello, world!

No matter what language you learn, your first program is almost always an instruction to the computer to print “Hello, world!” to the screen. That may seem frivolous, but it gives us a quick way to prove that the editor can send instructions to the computer and that the computer can execute them in the language we’re learning. It is a small test, but a useful one. Computers are very good at making small tests surprisingly emotional.

For now, this is JavaScript without variables, frameworks, or ceremony. We’ll get to the browser once we have a little more language under our belts.

```javascript
console.log("Hello, world!");
```

The line calls `console.log` with a string. That call writes the string to the console:

```text
Hello, world!
```

> `console` is the place where a program can report information while it runs.
> 
> `log` is a function on `console`. It receives a value and writes it there.
> 
> > We’ll review functions in detail later. For now, think of a function as a named action we can ask the computer to perform.

---

## Try it Yourself

Change the message to your name and predict what will happen. Then add another `console.log` with one thing you hope to learn. Run it again. If you misspell `console`, you’ll get a `ReferenceError`; the computer is not being dramatic, it simply cannot find the name you gave it. Fix the spelling and run it again.

Believe it or not, you’re a JavaScript programmer now. The rest is just details.

---

## More background

For a little more background, see the [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) or [Eloquent JavaScript](https://eloquentjavascript.net/). You do not need to read either book before changing the greeting. That would be an oddly elaborate way to avoid printing two words.

---
