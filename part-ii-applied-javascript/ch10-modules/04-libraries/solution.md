# Solution: modules and purpose-based libraries

```javascript
// currency.js
export function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}

// main.js
import { isCompletePerson } from "./validation.js";
import { displayName } from "./formatting.js";
import { formatCurrency } from "./currency.js";
```

```text
Valid
Ada Lovelace
$19.99
```

`currency.js` belongs with formatting because it turns a number into display text. It does not decide whether a person record is complete, so keeping that rule in `validation.js` leaves each module with one understandable responsibility.

The older `window.App` example exposes a global object, while the module version names its dependencies directly in `import` statements. That explicit boundary is the main reason modules are easier to maintain as an application grows.

---
