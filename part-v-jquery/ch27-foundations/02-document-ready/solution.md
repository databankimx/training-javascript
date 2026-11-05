# Solution

```javascript
function report(label) {
  const events = document.querySelector("#events");
  $(events).append($(`<li>${label}</li>`));
  console.log(label);
}

$(document).ready(function () {
  report("jQuery ready fired");
});
document.addEventListener("DOMContentLoaded", () => report("DOMContentLoaded fired"));
window.addEventListener("load", () => report("window load fired"));
```

The helper keeps the DOM update and the console output together. Each callback calls it after its own readiness condition is met.

```text
jQuery ready fired
DOMContentLoaded fired
window load fired
```

---
