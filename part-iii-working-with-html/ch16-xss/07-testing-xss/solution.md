## Solution

```javascript
document.querySelector("#unsafe").innerHTML = value.value;
document.querySelector("#safe").textContent = value.value;
```

```text
The left panel interprets markup. The right panel displays the same value as text.
```

The example intentionally keeps both lines visible. Seeing the unsafe and safe sinks together makes the distinction easier to remember when an older form presents the same construction in the wild.

---
