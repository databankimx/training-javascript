## Solution

```javascript
function ClassicTimer(label) {
  this.label = label;
}
ClassicTimer.prototype.describe = function () { return `Classic: ${this.label}`; };

class ModernTimer {
  constructor(label) { this.label = label; }
  describe() { return `Modern: ${this.label}`; }
}

const classic = new ClassicTimer("legacy code");
const modern = new ModernTimer("new code");
console.log(Object.getPrototypeOf(classic) === ClassicTimer.prototype);
console.log(Object.getPrototypeOf(modern) === ModernTimer.prototype);
```

Each instance stores its own `label`. The methods live on the corresponding prototype and are shared by instances.

```text
true
true
```

---
