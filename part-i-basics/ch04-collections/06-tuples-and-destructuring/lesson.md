# Tuples and destructuring

A tuple is a small, ordered collection whose positions have fixed meanings. A two-item tuple such as `[name, score]` or `[x, y]` is understood by agreement: the first position always means one thing, and the second position always means another. This is common when a function returns a small, predictable group of values.

JavaScript does not have a separate tuple type, so we usually represent a tuple with an array. The convention can be useful, but it is not enforced by the language. If the positions become mysterious, an object is probably the clearer choice.

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

```text
Ada
42
10
30
```

The blank position in `[x, , z]` skips the middle value. Destructuring is convenient when the arrangement is obvious. It becomes less convenient when we have to remember what position 4 means six months later, which is when named object properties start looking very attractive.

---

## Looping over tuple-like values

A tuple-like array is still an array, so it can be traversed like any other collection:

```javascript
const dimensions = [3, 4, 5];

for (const dimension of dimensions) {
  console.log(`Dimension: ${dimension}`);
}
```

```text
Dimension: 3
Dimension: 4
Dimension: 5
```

The positions still have an agreed meaning: width, height, and depth. The language will not enforce that agreement for us, so a comment, a clear variable name, or an object may be worthwhile when the data leaves a small local example.

---

## Packing and unpacking

Destructuring works in both directions. We can unpack an existing array, and we can pack values into one before passing them around:

```javascript
const packed = ["x", "y"];
const [first, second] = packed;
console.log(`${first}, ${second}`);
```

```text
x, y
```

The square brackets on the left describe the positions we want to receive. They do not create a special tuple type. They simply bind the array's values to separate names.

---

## Swapping values

One practical use is swapping two values without a temporary variable:

```javascript
let left = "red";
let right = "blue";

[left, right] = [right, left];
console.log(`${left}, ${right}`);
```

```text
blue, red
```

JavaScript evaluates the right side first, creates the two-value array, and then assigns those values to the left-side bindings. It is tidy, although it may look like punctuation has briefly taken over the program.

---

## Rest destructuring

If an array contains more values than we want to name individually, `...` can collect the remainder:

```javascript
const record = ["Ada", 42, "analyst", "unused detail"];
const [recordName, recordScore, ...extra] = record;

console.log(recordName);
console.log(recordScore);
console.log(extra.join(", "));
```

```text
Ada
42
analyst, unused detail
```

> Destructuring assigns values from an array to separate bindings by position.
>
> A rest element collects the remaining values into a new array. It must be the last item in the destructuring pattern.
>
> A tuple is a fixed-position convention, not a distinct JavaScript type.

---

## Replacing rather than mutating

A JavaScript array can always be changed, so tuple-like code relies on convention. If we want a different value, create a replacement array rather than pretending the original is immutable:

```javascript
const original = ["Ada", 42];
const replacement = ["Grace", original[1]];

console.log(replacement.join(", "));
```

```text
Grace, 42
```

That is different from changing `original[0]`. In a larger program, the replacement approach makes it easier to see which value is the old one and which value is the new one. If true immutability matters, `Object.freeze()` can prevent direct changes, although it does not make nested arrays magically immutable.

---

## Try it Yourself

Create a tuple-like array for a product name and price. Destructure it, loop over a three-item coordinate, and use a rest element to collect any extra details. Swap two colors with destructuring. Finally, compare the tuple-like array with an object and decide which version is easier to read six months later.

---

## More background

See [MDN: Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment), [MDN: Rest parameters and spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax), and [MDN: Object.freeze()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze).

---

