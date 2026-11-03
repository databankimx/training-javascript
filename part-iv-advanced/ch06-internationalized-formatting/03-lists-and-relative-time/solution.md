# Solution

Use the formatter that matches the kind of text being displayed.

```javascript
const list = new Intl.ListFormat("en-US", { type: "disjunction" });
console.log(list.format(["Ada", "Grace", "Alan"]));
```

```text
Ada, Grace, or Alan
```

The formatter handles the joining word and punctuation for the selected locale.

---
