# Homework: search a list

Search a list of names for a target. Save the first matching index and stop searching once you find it. Leave the result at `-1` when the target is not present.

```javascript
const names = ["Ada", "Grace", "Linus", "James"];
const target = "Linus";
let foundIndex = -1;

for (let index = 0; index < names.length; index += 1) {
  if (/* match */) {
    foundIndex = index;
    /* stop searching */
  }
}

console.log(`Found at index: ${foundIndex}`);
```

```text
Found at index: 2
```

---

## Try it Yourself

Complete the comparison and stop the loop after a match. Test the first item, the last item, and a name that is not in the list.

Use **Show example (spoiler)** after you have tested your search.

---

## More background

See [MDN: break](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break).

---
