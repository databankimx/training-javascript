# Solution

The important part is formatting one stored instant with different explicit time zones.

```javascript
const instant = new Date("2026-01-15T02:30:00Z");
const chicago = new Intl.DateTimeFormat("en-US", { timeZone: "America/Chicago", dateStyle: "full", timeStyle: "short" });
console.log(chicago.format(instant));
```

The instant does not change. Only its local presentation changes.

---
