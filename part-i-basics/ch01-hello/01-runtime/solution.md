# Exercise solution

Here is one reasonable way through this. Your name and learning goal can, of course, be different. The computer is not grading our personality.

```javascript
console.log("Scott");
console.log("I can explain a function");
```

```text
Scott
I can explain a function
```

The change is the second `console.log`, so the program now writes two lines instead of one. Each call receives a string directly. The first string is the name, and the second string is the learning goal. Nothing is stored for later yet. We are simply giving each function call its own value.

A misspelling such as `consle.log` produces a `ReferenceError` because JavaScript cannot find `consle`. Fix the spelling rather than hiding the error. Errors are useful evidence about what the computer tried to do.

---

Run the original input and the boundary case you chose. If both work, explain what each `console.log` call receives and why the output appears on two lines. That explanation is what we want to keep; the output window is happy to print all sorts of things.

---
