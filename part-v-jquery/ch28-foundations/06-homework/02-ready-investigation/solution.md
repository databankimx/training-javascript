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
document.addEventListener("DOMContentLoaded", function () {
  report("DOMContentLoaded fired");
});
window.addEventListener("load", function () {
  report("window load fired");
});
```

The shared `report` function updates both output locations. The three callbacks wait for three different readiness conditions, so the page can show the timeline rather than hiding it in a lecture paragraph.

---
