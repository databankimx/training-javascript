# Solution: processing a collection of API results

```javascript
const popular = items.filter(item => item.stars >= 100);

for (const item of popular) {
  console.log(`${item.name}: ${item.stars}`);
}

console.log(`Average stars: ${totalStars / items.length}`);
```

```text
Ada: 120
Average stars: 107.5
```

The filtered loop answers “which records have at least 100 stars?” The average still uses the original collection, so it answers “what is the average across all returned records?” Keeping those questions separate avoids quietly changing the meaning of the summary.

---
