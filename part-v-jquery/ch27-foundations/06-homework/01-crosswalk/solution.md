# Solution

```javascript
const status = document.querySelector("#status");

document.querySelector("#native").addEventListener("click", () => {
  status.textContent = "Native JavaScript updated the page.";
  console.log("native handler ran");
});

$("#jquery").on("click", function () {
  $("#status").text("jQuery updated the page.");
  console.log("jQuery handler ran");
});
```

The native handler changes the DOM element's `textContent`. The jQuery handler wraps the matching element and uses `.text(...)`. The two console messages make the distinction visible without pretending the page has two separate universes.

---
