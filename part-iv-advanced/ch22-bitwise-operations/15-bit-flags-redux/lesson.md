## Bitwise OR - Real-World Example: Bit flags, revisited

Sometimes it is useful to have one value represented by more than one bit in a bit flag. Bitwise OR lets us combine those bits into a reusable package mask.

---

### Scenario

Back at MacroWare, your boss is pleased with the license checks for the individual programs. Now you are asked to handle packages that contain several programs as one license type.

* Personal: word processing and email client
* Work: word processing, email, spreadsheets, presentations, notebook, and collaboration
* Ultra Deluxe: all programs

---

### An obvious approach

Intuition might suggest adding new bits for each package:

```javascript
const ProductLicenses = Object.freeze({
  wordProcessing: 1,
  spreadsheets: 2,
  presentations: 4,
  emailClient: 8,
  notebook: 16,
  collaboration: 32,
  projectManagement: 64,
  publishing: 128,
  personal: 256,
  work: 512,
  ultraDeluxe: 1024
});
```

Then checking word processing would require a growing list of special cases:

```javascript
const licenses = ProductLicenses.work;
const wordProcessing =
  (licenses & ProductLicenses.wordProcessing) === ProductLicenses.wordProcessing ||
  (licenses & ProductLicenses.personal) === ProductLicenses.personal ||
  (licenses & ProductLicenses.work) === ProductLicenses.work ||
  (licenses & ProductLicenses.ultraDeluxe) === ProductLicenses.ultraDeluxe;

if (!wordProcessing) {
  throw new Error("Not licensed for word processing!");
}

console.log("Ready for word processing...");
```

Expected output:

```text
Ready for word processing...
```

### Obvious is not necessarily good

This implementation has several inefficiencies:

* The package values are not coupled to the products they include.
* The checking logic is unnecessarily complicated.
* A change to a package requires tracking down every product check that knows about that package.
* The same business rule is repeated in multiple places.

---

### An alternative approach: combined bit flags

Bitwise OR returns the union of the bits in its operands. Personal includes word processing and email, so we can combine those existing masks:

| License bit | Decimal | Binary |
| :- | -: | :-: |
| `wordProcessing` | `1` | `0000 0001` |
| `emailClient` | `8` | `0000 1000` |

```javascript
const personal = ProductLicenses.wordProcessing | ProductLicenses.emailClient;
console.log(personal.toString(2).padStart(8, "0"));
```

Expected output:

```text
00001001
```

The result is `9`, with both product bits set. This combined value is a bit mask representing a package.

We could write `personal: 9`, but composing it with OR makes the meaning visible and makes future changes easier:

```javascript
const ProductLicenses = Object.freeze({
  wordProcessing: 0b0000_0001,
  spreadsheets: 0b0000_0010,
  presentations: 0b0000_0100,
  emailClient: 0b0000_1000,
  notebook: 0b0001_0000,
  collaboration: 0b0010_0000,
  projectManagement: 0b0100_0000,
  publishing: 0b1000_0000
});

const personal = ProductLicenses.wordProcessing | ProductLicenses.emailClient;
```

---

### Getting more from what we already have

The Work package includes Personal plus spreadsheets, presentations, notebook, and collaboration. Ultra Deluxe includes Work plus project management and publishing:

```javascript
const personal = ProductLicenses.wordProcessing | ProductLicenses.emailClient;
const work = personal |
  ProductLicenses.spreadsheets |
  ProductLicenses.presentations |
  ProductLicenses.notebook |
  ProductLicenses.collaboration;
const ultraDeluxe = work |
  ProductLicenses.projectManagement |
  ProductLicenses.publishing;
```

The package definitions are now built from the product definitions. If a product moves into or out of a package, we update the package mask, not every license check in the application.

---

### Putting it together

Here is the complete JavaScript version. The product masks come first, the package masks are composed from them, and the ordinary product check remains unchanged:

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

const personal = ProductLicenses.wordProcessing | ProductLicenses.emailClient;
const work = personal |
  ProductLicenses.spreadsheets |
  ProductLicenses.presentations |
  ProductLicenses.notebook |
  ProductLicenses.collaboration;
const ultraDeluxe = work |
  ProductLicenses.projectManagement |
  ProductLicenses.publishing;

const packages = { personal, work, ultraDeluxe };
const licenses = packages.work;
const wordProcessing = licenses & ProductLicenses.wordProcessing;

if (!wordProcessing) {
  throw new Error("Not licensed for word processing!");
}

console.log("Ready for word processing...");
```

Expected output:

```text
Ready for word processing...
```

---

### We compared a bit mask against a bit flag

The Work package has several bits set. Its binary value is `0011 1111` in this example. When we AND it against the word-processing bit, we still get `0000 0001`:

| Work package | Word-processing bit | AND result |
| :-: | :-: | :-: |
| `0011 1111` | `0000 0001` | `0000 0001` |

That is the same result we got before packages existed. The license check does not need to know whether the value came from one product or a package. Only the mask definition changes.

---

### The full example

The runnable script uses the Work package and prints each product bit that is enabled:

```javascript
const ProductLicenses = Object.freeze({
  wordProcessing: 0b0000_0001,
  spreadsheets: 0b0000_0010,
  presentations: 0b0000_0100,
  emailClient: 0b0000_1000,
  notebook: 0b0001_0000,
  collaboration: 0b0010_0000,
  projectManagement: 0b0100_0000,
  publishing: 0b1000_0000
});

const personal = ProductLicenses.wordProcessing | ProductLicenses.emailClient;
const packages = {
  personal,
  work: personal |
    ProductLicenses.spreadsheets |
    ProductLicenses.presentations |
    ProductLicenses.notebook |
    ProductLicenses.collaboration,
  ultraDeluxe: 0xff
};

const licenses = packages.work;
for (const [product, mask] of Object.entries(ProductLicenses)) {
  if ((licenses & mask) === mask) {
    console.log(product);
  }
}
```

Expected output:

```text
wordProcessing
spreadsheets
presentations
emailClient
notebook
collaboration
```

Try changing `licenses` to `packages.personal` or `packages.ultraDeluxe` and see which products are enabled.

---
