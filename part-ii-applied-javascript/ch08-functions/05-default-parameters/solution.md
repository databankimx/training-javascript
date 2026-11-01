## Solution

```javascript
function label(name, style = "friendly") {
  console.log(`${name} [${style}]`);
}

label("Ada", "formal");
label("Grace");
```

```text
Ada [formal]
Grace [friendly]
```

The omitted second argument lets the default parameter supply `friendly`.

---
