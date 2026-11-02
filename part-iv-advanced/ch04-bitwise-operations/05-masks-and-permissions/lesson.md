# Masks and permission flags

A bit mask gives a name to one bit position. That lets us store several yes-or-no settings in one number while keeping the code readable.

```javascript
const READ = 1 << 0;
const WRITE = 1 << 1;
const EXECUTE = 1 << 2;

const permissions = READ | WRITE;
console.log("Initial: " + permissions);
console.log("Can read: " + Boolean(permissions & READ));
console.log("Can execute: " + Boolean(permissions & EXECUTE));
```

```text
Initial: 3
Can read: true
Can execute: false
```

OR combines READ and WRITE into binary `011`. AND with READ leaves a nonzero value, so Boolean reports true. AND with EXECUTE leaves zero, so the answer is false.

> A mask is a named bit pattern used to select, test, set, or clear part of a larger value. Naming masks is not decorative. It is how we avoid making the next person decode 4 from context.

## Try it Yourself

Add a DELETE mask, grant it, and test it. Print the decimal value and its binary representation after each change.

---

