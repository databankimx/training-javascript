# Solution: inspecting JSON response data

```javascript
const second = responseData.items[1];
console.log(`Name: ${second.name}`);
console.log(`Owner: ${second.owner.login}`);
console.log(`Stars: ${second.stars}`);
```

```text
Name: Grace
Owner: grace-hopper
Stars: 95
```

The second record is at index `1` because JavaScript arrays start at zero. The nested owner value still requires two property accesses, just like the first record.

---
