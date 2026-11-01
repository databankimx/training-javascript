## Solution

```javascript
const signedIn = true;

if (signedIn) {
  console.log("Access granted");
}
```

```text
Access granted
```

The `if` statement owns the block between its braces. When `signedIn` is truthy, JavaScript runs the block. When it is falsy, JavaScript skips the block and continues after it. That silent path is sometimes exactly what we want, and sometimes it is a missing message waiting to be noticed.

JavaScript also permits `if (signedIn) console.log("Access granted");` when there is only one statement, but braces make the intended scope easier to see and extend safely.

---
