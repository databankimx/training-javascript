# Solution

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

The license value `11` contains the word-processing, spreadsheet, and email bits. AND tests each product mask independently.

---
