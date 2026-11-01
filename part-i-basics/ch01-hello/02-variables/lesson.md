# Hello with variables

Hello World proved that JavaScript can follow an instruction. Now we will give the pieces of the greeting names. This is the point where the program becomes slightly less like a sign taped to the computer and more like something we can change without rewriting everything. Or at least the sign is now written in pencil instead of sharpie.

A variable allows you to bind a value to a name and then use the name in code. The name gives us something we can read, change, and explain. It also gives the computer somewhere to look when the instruction needs the value again.

```javascript
var punctuation = "!";
let greeting = "Hello";
const name = "JavaScript";
console.log(greeting + ", " + name + punctuation);
```

The output is still pleasantly unsurprising:

```text
Hello, JavaScript!
```

`punctuation`, `greeting`, and `name` are variables. The `console.log` call reads their current values and joins the strings with `+`. Here, `+` is the **concatenation operator**. It joins strings together. We will look at string operations more closely later, but you should recognize what it is doing here.

The order matters. JavaScript evaluates the expression from left to right, building one longer string:

1. `greeting` contributes `"Hello"`.
2. `", "` contributes a comma and a space.
3. `name` contributes `"JavaScript"`.
4. `punctuation` contributes `"!"`.

Change `greeting` to `"Welcome"` and the same structure produces a different greeting. That is the useful bit: the instruction stays mostly the same while the named values change.

## Choosing a declaration

The declaration is the word at the beginning of each line: `var`, `let`, or `const`. Those words are not interchangeable decoration. They tell JavaScript how the binding may be used later.

| Declaration | Can reassign? | What to know |
| --- | --- | --- |
| `var` | Yes | The older declaration. It is function-scoped and has some surprising historical behavior, so it is usually avoided in new code. |
| `let` | Yes | Block-scoped and useful when the binding needs to change. |
| `const` | No | Block-scoped and a good default when the binding should not change. |

For this example, `let greeting` makes sense because we are going to change the greeting. `const name` makes sense because the name should stay the same. `var punctuation` works, but it is the older option, and there is no advantage to using it here. In new code, start with `const` and choose `let` when you know the binding must be reassigned.

## One more JavaScript characteristic

> A variable allows you to bind a value to a name and then use the name in code. The declaration determines how that binding behaves. We will use these rules repeatedly, so it is worth getting them straight now.
>
> JavaScript is dynamically typed. A binding does not have a permanent declared type, so the value can be a string at one point and a number at another.
>
> JavaScript is also often called weakly typed because it performs some implicit conversions. Those conversions can be convenient, confusing, or both. We will examine them in the data types and coercion lessons.

---

## Try it Yourself

Change `name` and run the program again. Change `greeting` after its declaration and run it. Then replace `var punctuation` with `const punctuation` and explain why that is a better choice here.

Next, try assigning a new value to `name` and read the error instead of taking it personally. Finally, change `let greeting` to `const greeting`, then try to reassign it. The error is JavaScript enforcing the rule you asked for. It is not a personal review of your greeting.

If you can explain what each declaration allows - and why `const` is a sensible default when a value will not change - you have the important part. The punctuation is merely showing off.

---

## More background

See [MDN: Declaring variables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#declarations) and [MDN: let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let). We can learn the history without inviting it to write all our new code.

---
