## Solution

```javascript
const entry = document.querySelector("#entry");
const output = document.querySelector("#output");

document.querySelector("#show").addEventListener("click", () => {
  output.textContent = entry.value;
});
```

```text
The output displays the typed text, including characters such as < and >.
```

The important change is `textContent` rather than `innerHTML`. The vulnerable version asks the browser to parse whatever the user entered as HTML. The fixed version keeps it as text, so a string such as `<strong>Important</strong>` is displayed literally instead of creating a bold element. That is the small code change that prevents this particular XSS mistake.

The solution also gives the output element its own name instead of querying it inside the event handler. That is not required, but it makes the two versions easier to compare and gives each element a clear role.

---
