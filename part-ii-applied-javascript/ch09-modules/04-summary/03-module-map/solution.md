## Solution

```javascript
const modules = [
  ["main.js", "uses reports.js"],
  ["reports.js", "formats task data"]
];

for (const [name, responsibility] of modules) {
  console.log(`${name} ${responsibility}`);
}
```

```text
main.js uses reports.js
reports.js formats task data
```

The map makes each file's responsibility explicit and keeps the output generation separate from the data.

---
