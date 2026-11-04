# Solution

The closure keeps a private Map between calls.

```javascript
const square = makeSquareCache();
square(3);
square(3);
```

```text
calculated: 9
cached: 9
```

---

