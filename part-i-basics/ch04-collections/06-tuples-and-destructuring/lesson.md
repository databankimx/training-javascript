# Tuples and destructuring

JavaScript does not have a separate tuple type. We use an array as a tuple when its positions have a fixed meaning, such as `[name, score]` or `[x, y]`. That convention can be useful, but it is not enforced by the language. If the positions become mysterious, an object is probably the clearer choice.

```javascript
const entry = ["Ada", 42];
const [name, score] = entry;

console.log(name);
console.log(score);

const coordinates = [10, 20, 30];
const [x, , z] = coordinates;
console.log(x);
console.log(z);
```

> A tuple is a fixed-position collection whose positions have agreed meanings. In JavaScript, it is usually an array convention rather than a distinct type.
>
> Destructuring assigns items from an array to separate bindings in one expression.

```text
Ada
42
10
30
```

The blank position in `[x, , z]` skips the middle value. Destructuring is convenient when the arrangement is obvious. It becomes less convenient when we have to remember what position 4 means six months later, which is when named object properties start looking very attractive.

---

## Try it Yourself

Create a tuple-like array for a product name and price. Destructure it, then skip one value in a three-item coordinate. Compare the result with an object and decide which version is easier to read.

---

## More background

See [MDN: Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

---
