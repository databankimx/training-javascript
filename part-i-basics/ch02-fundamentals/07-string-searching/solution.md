# String searching and transformation - exercise solution

Here is one reasonable way through this exercise:

```javascript
const value = "  red, green, red  ";
const colors = value.trim().split(", ");
const updated = value.trim().replaceAll("red", "blue");

console.log(colors.length);
console.log(updated);
```

```text
3
blue, green, blue
```

The string is trimmed before it is split, so the outside whitespace does not become part of the first or last item. `replaceAll()` changes both occurrences, while the original `value` remains available if we need it.

---
