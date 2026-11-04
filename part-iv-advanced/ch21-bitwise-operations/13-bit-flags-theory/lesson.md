## Bitwise AND - Real-World Example: Bit flags

One example where we commonly use bitwise AND is when checking a bit flag.

### Scenario

You are employed by a large company called MacroWare. One of the company's flagship software products is an office product suite containing several different programs.

For a number of reasons, including simplifying delivery by packaging only one installer and providing an easy path to post-purchase upsells, the installation package installs all of the programs, regardless of which have been purchased by the user.

You are tasked with creating a mechanism that allows the software to check the licensed state of each program before allowing that program to run.

---

### An obvious approach

You might intuitively default to using boolean values to enable or disable each feature:

```javascript
const licenses = {
  wordProcessing: false,
  spreadsheets: false,
  presentations: false,
  emailClient: false,
  notebook: false,
  collaboration: false,
  projectManagement: false,
  publishing: false
};
```

Then, when accessing a feature, you could check its boolean value to determine whether it launches:

```javascript
if (!licenses.wordProcessing) {
  throw new Error("Not licensed for Word Processing!");
}
```

### What's wrong with this approach?

This approach works, but it is not very mindful of memory usage. Each boolean value consumes storage, and a database representation could require eight separate columns for this information.

That may not matter on a modern desktop, but MacroWare sells a billion copies. Even a byte per setting would add up to roughly 8 GB of license data before we account for column and row overhead.

---

### An alternative approach: bit flags

Suppose, instead of using one byte per product, we used one bit. That would reduce the size of the licensing data eightfold. The database licensing data would be closer to 1 GB.

The idea sounds great, but how do we do it?

JavaScript does not have Python's `IntFlag` type or a native enum that behaves like a bit mask, so we define a frozen object whose values are powers of two. Each value has one bit set:

```javascript
const ProductLicenses = Object.freeze({
  unlicensed: 0b0000_0000,
  wordProcessing: 0b0000_0001,
  spreadsheets: 0b0000_0010,
  presentations: 0b0000_0100,
  emailClient: 0b0000_1000,
  notebook: 0b0001_0000,
  collaboration: 0b0010_0000,
  projectManagement: 0b0100_0000,
  publishing: 0b1000_0000
});
```

The binary literals make the bit-position choice visible. `wordProcessing` uses the first bit, `spreadsheets` uses the second, and so on. No two products share a bit.

---

### Checking a license with AND

When you need to check whether a product is licensed, use bitwise AND (`&`) with that product's one-bit mask:

```javascript
const licenses = 11;
const wordProcessing = ProductLicenses.wordProcessing;

if ((licenses & wordProcessing) !== wordProcessing) {
  throw new Error("Not licensed for Word Processing!");
}
```

The parentheses are intentional. They make the order of operations obvious and keep this example readable when someone later changes the mask to contain more than one bit.

> With a single-bit mask, `Boolean(licenses & wordProcessing)` is enough. Comparing the result with the mask is more explicit and remains correct when the mask contains several required bits.

---

### Explanation

How does that work?

Each product value has exactly one bit set to `1`. When we AND the stored license value with that product's mask, the result can contain that bit only if both values contain it.

Imagine that the stored license value is `11`, which is `0000 1011` in binary. We are checking the word-processing mask, `0000 0001`:

| License value | Word-processing mask | AND result |
| :-: | :-: | :-: |
| `0000 1011` | `0000 0001` | `0000 0001` |

The rightmost bit is `1` in both values, so the result is `1`. Word processing is licensed.

If the stored value is `10`, the comparison changes:

| License value | Word-processing mask | AND result |
| :-: | :-: | :-: |
| `0000 1010` | `0000 0001` | `0000 0000` |

The rightmost bit is not set in the license value, so the result is zero. Word processing is not licensed.

---

### The full example

The runnable script stores the license value `11`, then checks every product mask and prints the names of the enabled products:

```javascript
const ProductLicenses = Object.freeze({
  unlicensed: 0b0000_0000,
  wordProcessing: 0b0000_0001,
  spreadsheets: 0b0000_0010,
  presentations: 0b0000_0100,
  emailClient: 0b0000_1000,
  notebook: 0b0001_0000,
  collaboration: 0b0010_0000,
  projectManagement: 0b0100_0000,
  publishing: 0b1000_0000
});

const licenses = 11;
for (const [name, mask] of Object.entries(ProductLicenses)) {
  if (mask !== 0 && (licenses & mask) === mask) {
    console.log(name);
  }
}
```

Expected output:

```text
wordProcessing
spreadsheets
emailClient
```

Try varying the value of `licenses` and see which products are enabled. The value `11` is `0000 1011`, so bits 1, 2, and 8 are set.

---

### Putting it to use

This technique works with any collection of settings whose values are enumerated as powers of two. The bit-size of the integer in which you store the settings determines how many independent values you can represent.

It is a compact representation, but compact is not automatically better. Use named constants, document the masks, and make the checks obvious. A clever-looking integer that nobody can decode six months later is just a tiny database with an attitude.

---
