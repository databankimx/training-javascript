# Classic and modern patterns compared

The two styles solve the same broad problem. A constructor function plus prototype methods is the older spelling. A `class` declaration is the newer, clearer spelling. Existing applications may use either, so the practical skill is recognizing both without assuming the older code is broken merely because it has more punctuation.

```javascript
function ClassicTimer(label) {
  this.label = label;
}
ClassicTimer.prototype.describe = function () { return `Classic: ${this.label}`; };

class ModernTimer {
  constructor(label) { this.label = label; }
  describe() { return `Modern: ${this.label}`; }
}
```

```text
Classic: legacy code
Modern: new code
```

| Question | Constructor function | `class` |
| --- | --- | --- |
| How is the constructor written? | Function body | `constructor()` method |
| Where are methods declared? | On `.prototype` | Inside the class body |
| How is an instance created? | `new ClassicTimer()` | `new ModernTimer()` |
| What should new code usually prefer? | Recognize it in legacy code | Usually use this clearer syntax |

Both still use prototypes under the hood. The modern syntax improves readability, but it does not turn JavaScript into a class-based language in the same way as C# or Java.

---

## Try it Yourself

Rewrite the classic timer as a modern class, then inspect `Object.getPrototypeOf()` for both instances. Explain what is shared and what belongs to each instance.

---
