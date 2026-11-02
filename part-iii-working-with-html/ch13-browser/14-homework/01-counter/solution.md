## Solution

```javascript
const count = document.querySelector("#count");
let value = 0;
document.querySelector("#add").addEventListener("click", () => { value += 1; count.textContent = value; });
```

```text
Clicking Add increases the count.
```

The listener updates the DOM after each click.

---
