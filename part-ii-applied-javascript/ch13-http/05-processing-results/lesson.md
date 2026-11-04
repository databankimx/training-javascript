# Processing a collection of API results

Once we know the shape of one API record, the next step is usually to process every record in the returned collection. The service may return an array of repositories, people, invoices, or messages. We can loop over that array, display selected fields, and calculate a summary for the user.

```javascript
const items = [
  { name: "Ada", stars: 120 },
  { name: "Grace", stars: 95 }
];

let totalStars = 0;

for (const item of items) {
  console.log(`${item.name}: ${item.stars}`);
  totalStars += item.stars;
}

console.log(`Average stars: ${totalStars / items.length}`);
```

The local array stands in for the `items` property from a parsed JSON response. The loop prints one line for each record, while `totalStars` acts as an accumulator for the final average.

> API results are often paged. Processing the records in `items` does not necessarily process every record that matched the search.
>
> An accumulator is a variable declared outside a loop and updated when the loop executes that keeps a running result.

```text
Ada: 120
Grace: 95
Average stars: 107.5
```

In a real client, the loop might use `responseData.items`, and the summary might feed a table or chart instead of the console. The code is the same basic movement: select the collection, read each record, and produce a useful result.

## Try it Yourself

Add a third record. Print only records with at least 100 stars, then calculate the average for all records. Explain why filtering before averaging would answer a different question.

## More background

See [MDN: Array iteration methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

---
