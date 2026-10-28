# Homework: shopping list - exercise solution

```javascript
const list = ["bread", "milk", "eggs"];
list.push("coffee");
const withoutEggs = list.toSpliced(list.indexOf("eggs"), 1);

console.log(withoutEggs.join(", "));
console.log(withoutEggs.includes("milk"));
```

```text
bread, milk, coffee
true
```

`push()` changes the working list, while `toSpliced()` creates the final list without changing the original. `indexOf()` finds the item’s position, and `includes()` answers the membership question directly.

---
