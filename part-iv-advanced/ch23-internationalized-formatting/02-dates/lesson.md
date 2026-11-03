# Dates, time zones, and calendars

A JavaScript Date represents an instant, not a local calendar date. The same instant can be Tuesday in one time zone and Wednesday in another. That is why formatting a date without naming the time zone can produce a result that is correct for one computer and surprising on another.

```javascript
const instant = new Date("2026-01-15T02:30:00Z");

const format = timeZone => new Intl.DateTimeFormat("en-US", {
  timeZone,
  dateStyle: "full",
  timeStyle: "short"
}).format(instant);

console.log("Chicago: " + format("America/Chicago"));
console.log("Tokyo: " + format("Asia/Tokyo"));
```

```text
Chicago: Wednesday, January 14, 2026 at 8:30 PM
Tokyo: Thursday, January 15, 2026 at 11:30 AM
```

The stored instant is identical in both calls. Only the display time zone changes. The Chicago result falls on the previous calendar date because Chicago is behind UTC. The Tokyo result remains on January 15.

| Option | Purpose |
| --- | --- |
| timeZone | Choose the local zone used for display |
| dateStyle | Choose a complete date presentation |
| timeStyle | Choose a complete time presentation |
| year, month, day | Build a more specific custom format |

> Store timestamps in a standard form, usually UTC, and format them at the boundary where a person will read them. Do not store a locale-specific display string as if it were an instant.

## Try it Yourself

Change the instant to one near midnight UTC. Format it in New York, Chicago, London, and Tokyo. Which zones show a different calendar date?

---

