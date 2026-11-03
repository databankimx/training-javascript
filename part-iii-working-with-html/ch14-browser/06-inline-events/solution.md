## Solution

```javascript
document.querySelector("#bound-button").addEventListener("click", () => {
  showMessage("bound click");
});

document.querySelector("#bound-input").addEventListener("focus", () => showMessage("bound focus"));
document.querySelector("#bound-input").addEventListener("blur", () => showMessage("bound blur"));
document.querySelector("#bound-select").addEventListener("change", () => showMessage("bound change"));
```

```text
Click, focus, blur, and change all update the message.
```

The behavior moved out of the HTML and into one script. That is the important change. The browser still receives the same events, but the code is easier to read, replace, and test.

---
