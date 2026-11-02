# Functions: named actions

Functions are how we give a useful action a name. A greeting, a calculation, a validation check, and a piece of formatting logic may all need to run more than once. We can define each action once and call it whenever we need it instead of copying the same code everywhere and hoping the copies stay in agreement.

```javascript
function greet(name) {
  console.log(`Hello, ${name}`);
}

greet("Ada");
greet("Grace");
```

> A function is a named action that can receive values and perform work.
>
> Declaring a function defines it. Calling a function runs it.
>
> The name between the parentheses is a parameter. It receives a value when the function is called.

```text
Hello, Ada
Hello, Grace
```

The function is declared once, then called twice with different names. Each call creates a new pass through the function body. The function does not run merely because JavaScript has read its declaration. The calls are the instructions that actually perform the work.

---

## Try it Yourself

Write a function that prints a menu item. Call it three times with different items, then add a second parameter for a price.

---

## More background

See [MDN: Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions).

---
