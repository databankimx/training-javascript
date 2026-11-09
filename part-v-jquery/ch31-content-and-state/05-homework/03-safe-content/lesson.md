# Homework: safe content insertion

Display two values differently. User input must be inserted with `.text(...)`, while application-owned markup may be inserted with `.html(...)` when it is deliberately trusted.

```javascript
const userInput = "<em>User supplied text</em>";
const applicationMarkup = "<strong>Trusted heading</strong>";
```

```text
<em>User supplied text</em>
Trusted heading
```

## Try it Yourself

Change `userInput` to include a script tag and confirm it is displayed as text. Then explain why changing that one call to `.html(...)` would change the security situation. The spoiler contains a complete solution.

---
