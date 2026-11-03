# Functions: named actions

Functions are how we give a useful action a name. A greeting, a calculation, a validation check, and a piece of formatting logic may all need to run more than once. We can define each action once and call it whenever we need it instead of copying the same code everywhere and hoping the copies stay in agreement.

Here is a small function that greets two people:

```javascript
function greet(name) {
  console.log(`Hello, ${name}`);
}

greet("Ada");
greet("Grace");
```

```text
Hello, Ada
Hello, Grace
```

The function is declared once, then called twice with different names. Each call creates a new pass through the function body. The function does not run merely because JavaScript has read its declaration. The calls are the instructions that actually perform the work.

---

## Read the function signature

The first line is the function signature:

```javascript
function greet(name) {
```

Here is what each part means:

| Part | What it does |
| --- | --- |
| `function` | Tells JavaScript that we are declaring a function |
| `greet` | The function's name, which we use when calling it |
| `(name)` | The parameter list. This function has one parameter named `name` |
| `{` | Starts the function body |
| `}` | Ends the function body |

The body contains the statements that run when the function is called. In this example, the body has one statement:

```javascript
console.log(`Hello, ${name}`);
```

> A function is a named action that can receive values and perform work.
>
> A parameter is the local name declared in the function signature. It is a placeholder for a value supplied by the caller.
>
> An argument is the actual value supplied in a function call. In `greet("Ada")`, `"Ada"` is the argument that fills `name`.
>
> JavaScript does not require us to declare a return type in the signature. If a function returns a value, we explain that with a `return` statement inside the body.

The parentheses are required even when a function has no parameters. An empty parameter list looks like this:

```javascript
function sayHello() {
  console.log("Hello");
}
```

The braces are the function body, not decoration. They show exactly which statements belong to the function.

---

## Declaring and calling are different

Declaring a function defines the reusable action. Calling a function runs it:

```javascript
function showMessage() {
  console.log("The function ran.");
}

console.log("Before the call");
showMessage();
console.log("After the call");
```

```text
Before the call
The function ran.
After the call
```

JavaScript function declarations are hoisted, so there is no language requirement to place the declaration above the call:

```javascript
greet("Ada");

function greet(name) {
  console.log(`Hello, ${name}`);
}
```

That code works because JavaScript makes a function declaration available before it reaches the surrounding call during execution. We will normally declare functions before calling them anyway. The conventional order is easier to read, and it avoids making beginners wonder whether the code has wandered backward in time.

This rule applies specifically to function declarations written with the `function` keyword. Function expressions and arrow functions are stored in variables, so they cannot be called before their `const` or `let` initialization runs.

---

## Try it Yourself

Write a function that prints a menu item. Call it three times with different items, then add a second parameter for a price.

Before you run it, identify the function keyword, name, parameter list, body, and each argument. Then move the calls above the function declaration and confirm that a function declaration still works. Put the calls back in the conventional order when you are finished.

---

## More background

See [MDN: Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) and [MDN: Function declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function).

---

