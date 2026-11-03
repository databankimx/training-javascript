# Lists, units, and relative time

Internationalization is not limited to currency and dates. The Intl namespace also knows how to join names, format units, and describe a value relative to now.

```javascript
const names = ["Ada", "Grace", "Alan"];
const list = new Intl.ListFormat("en-US", {
  style: "long",
  type: "conjunction"
});
const count = 3;
const plural = new Intl.PluralRules("en-US");
const relative = new Intl.RelativeTimeFormat("en-US", {
  numeric: "always"
});

console.log(list.format(names));
console.log(count + " " + (plural.select(count) === "one" ? "item" : "items"));
console.log(relative.format(2, "day"));
```

```text
Ada, Grace, and Alan
3 items
in 2 days
```

ListFormat handles the final comma and the word and. PluralRules tells us whether a count should use the singular or plural label. RelativeTimeFormat supplies the natural phrase around the number.

The formatter options are data, not grammar that we should assemble by hand. A hand-built string may look fine in English and become awkward or incorrect in another locale.

## Try it Yourself

Format the names with an or list. Format 1 item and 5 items. Try a negative relative value and explain the resulting phrase.

---

