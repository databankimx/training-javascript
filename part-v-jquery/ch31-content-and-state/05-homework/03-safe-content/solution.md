# Solution

```javascript
const userInput = "<em>User supplied text</em>";
const applicationMarkup = "<strong>Trusted heading</strong>";

$("#user-output").text(userInput);
$("#app-output").html(applicationMarkup);
```

The source variables make the trust decision visible. `.text(...)` is the safe default for user input; `.html(...)` is reserved for markup the application controls or has safely sanitized.

---
