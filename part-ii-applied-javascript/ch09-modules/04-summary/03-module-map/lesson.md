# Homework: module map

Create a small array describing two modules and their responsibilities. Use a loop to print the map.

```javascript
const modules = [
  ["main.js", "uses reports.js"],
  ["reports.js", "formats task data"]
];

for (const [name, responsibility] of modules) {
  console.log(/* formatted line */);
}
```

```text
main.js uses reports.js
reports.js formats task data
```

---

## Try it Yourself

Add a third module and describe what it exports. Keep each responsibility specific rather than turning one module into a junk drawer.

Use **Show example (spoiler)** after you have tested your loop.

---

## More background

See [MDN: JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).

---
