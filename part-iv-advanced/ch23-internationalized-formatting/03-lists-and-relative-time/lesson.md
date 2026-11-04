# Lists, units, plural words, and relative time

Internationalization is not limited to currency and dates. The `Intl` namespace also knows how to join names, attach units, choose singular or plural words, and describe a value relative to now. These are small details in English, but they are exactly the details that become inexplicably fuzzy when we try to assemble every sentence by hand.

```javascript
const names = ["Ada", "Grace", "Alan"];
const list = new Intl.ListFormat("en-US", {
  style: "long",
  type: "conjunction"
});
const count = 3;
const plural = new Intl.PluralRules("en-US");
const speed = new Intl.NumberFormat("en-US", {
  style: "unit",
  unit: "kilometer-per-hour",
  unitDisplay: "long"
});
const relative = new Intl.RelativeTimeFormat("en-US", {
  numeric: "always"
});

console.log(list.format(names));
console.log(count + " " + (plural.select(count) === "one" ? "item" : "items"));
console.log(speed.format(88));
console.log(relative.format(2, "day"));
```

```text
Ada, Grace, and Alan
3 items
88 kilometers per hour
in 2 days
```

Here is a brief explanation of the formatters in the example:

| Formatter | Purpose | Output here |
| --- | --- | --- |
| `Intl.ListFormat` | Join several values using locale rules | `Ada, Grace, and Alan` |
| `Intl.PluralRules` | Choose a plural category for a count | `other` for `3` |
| `Intl.NumberFormat` with `style: "unit"` | Attach a localized unit to a number | `88 kilometers per hour` |
| `Intl.RelativeTimeFormat` | Describe a value relative to now | `in 2 days` |

`ListFormat` handles the final comma and the word `and`. `PluralRules` does not supply the word itself. It tells us which grammatical category applies, so our code can choose the matching label. `NumberFormat` handles the spacing and wording around the unit. `RelativeTimeFormat` supplies the natural phrase around the number.

The formatter options are data, not grammar that we should assemble by hand. A hand-built string may look fine in English and become awkward or incorrect in another locale.

## Try it Yourself

Format the names with an or list. Format 1 item and 5 items. Try a negative relative value and explain the resulting phrase.

---

