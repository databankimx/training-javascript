# Homework: shopping list

Build a shopping list that starts with bread, milk, and eggs. Add coffee, create a new list without eggs, check whether milk is still present, and print the final list.

```javascript
const list = ["bread", "milk", "eggs"];
list.push(/* add coffee */);
const withoutEggs = /* make a copy without eggs */;

console.log(withoutEggs.join(", "));
console.log(/* check for milk */);
```

```text
bread, milk, coffee
true
```

---

## Try it Yourself

Add another item, remove a different item, and try a name that is not in the list. Keep the original list unchanged while you create the final list. Explain why `toSpliced()` is useful here.

Use **Show example (spoiler)** after you have made a first attempt.

---

## More background

See [MDN: toSpliced](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced), [MDN: includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes), and [MDN: indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf).

---
