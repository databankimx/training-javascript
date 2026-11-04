# Exercise solution

Here is one reasonable way to build the collection and make the requested changes.

```javascript
const tools = ["editor", "terminal", "browser"];
console.log(tools[0]);
console.log(tools.at(-1));
tools.push("tests");
tools[1] = "console";
console.log(tools);
```

```text
editor
browser
[ 'editor', 'console', 'browser', 'tests' ]
```

Indexes begin at zero, while `at(-1)` reads from the end. `push()` adds the fourth item, and assignment replaces the item at index 1. The final array shows both changes together, which is much more useful than trusting that the editor looked busy.

---
