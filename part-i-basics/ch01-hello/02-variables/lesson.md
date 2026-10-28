# Hello with variables

Hello World proved that JavaScript can follow an instruction. Now we’ll give the pieces of the greeting names. This is the point where the program becomes slightly less like a sign taped to the computer and slightly more like something we can change without rewriting everything.

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

`punctuation`, `greeting`, and `name` are variables. The `console.log` call reads their current values and joins the strings with `+`. Here, `+` is the concatenation operator. It joins strings together. We will look at it more closely in the strings lesson, but you should recognize what it is doing here. Change `greeting` to `"Welcome"` and the same code produces a different greeting. That is the useful bit: the instruction stays mostly the same while the named values change.

| Declaration | Can reassign? | What to know |
| --- | --- | --- |
| `var` | Yes | Older, function-scoped, and usually avoided in new code. |
| `let` | Yes | Block-scoped and useful when the binding needs to change. |
| `const` | No | Block-scoped and a good default when the binding should not change. |

> A variable allows you to bind a value to a name and then use the name in code. The declaration determines how that binding behaves. We will use these rules repeatedly, so it is worth getting them straight now.
>
> JavaScript is dynamically typed. It is often called weakly typed because it performs some implicit conversions, so a binding does not have a permanent declared type. We will look at those conversions more closely in the next chapter.

---

## Try it Yourself

Change `name` and run the program again. Change `greeting` after its declaration and run it. Then replace `var punctuation` with `const punctuation` and explain why that is a better choice here. Finally, try assigning a new value to `name` and read the error instead of taking it personally.

If you can explain what each declaration allows - and why `const` is a sensible default when a value will not change - you have the important part. The punctuation is merely showing off.

---

## More background

See [MDN: Declaring variables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#declarations) and [MDN: let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let). We can learn the history without inviting it to write all our new code.

---
