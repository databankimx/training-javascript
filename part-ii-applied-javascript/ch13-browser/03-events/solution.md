## Solution

```javascript
const button = document.querySelector("#add");
const count = document.querySelector("#count");
let value = 0;

button.addEventListener("click", () => {
  value += 1;
  count.textContent = value;
});
```

```text
Clicking Add changes the visible count from 0 to 1, then 2, and so on.
```

The callback runs once per click and updates the DOM with the current value.

---
