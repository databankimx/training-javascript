## Solution

```javascript
const debugOutput = document.querySelector("#debug");
const debug = message => { console.log(message); debugOutput.textContent += `${message}\n`; };
document.querySelector("#run").addEventListener("click", () => debug("Validation ran"));
```

```text
Validation ran
```

The helper keeps the browser console and visible diagnostic area synchronized.

---
