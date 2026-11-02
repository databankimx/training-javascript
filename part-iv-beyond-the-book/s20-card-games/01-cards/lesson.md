# S20 · Cards and unbiased shuffling

## Learning goal

S20 · Cards and unbiased shuffling: by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

We need to shuffle a deck. Sorting with a random comparator looks wonderfully convenient, which is a shame, because it does not give us the shuffle we intended.

A deck is a product of ranks and suits. Fisher–Yates shuffles by swapping each remaining position with a uniformly selected earlier position, including itself. Sorting with a random comparator does not give a reliable uniform shuffle. Math.random is suitable for a classroom game, not security-sensitive randomness. Copy before shuffling if callers need the original order.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

The first line is 52 52. The five-card hand varies on each run.

## Example code

```javascript
const deck = ['♣','♦','♥','♠'].flatMap(suit => ['A','2','3','4','5','6','7','8','9','10','J','Q','K'].map(rank => rank+suit));
const shuffled=[...deck];
for(let i=shuffled.length-1;i>0;i--){
  const j=Math.floor(Math.random()*(i+1));
  [shuffled[i],shuffled[j]]=[shuffled[j],shuffled[i]];
}
console.log(deck.length, new Set(shuffled).size);
console.log(shuffled.slice(0,5).join(' '));
```

## Expected output

```text
52 52
```

## Walk through the example

flatMap forms every rank/suit pairing. The shuffle walks backward and chooses an index from zero through the current position, including both ends. Swapping keeps the collection a permutation. The count checks uniqueness of this generated deck; it does not establish the distribution of many random shuffles.

## Try it yourself

Extract shuffle(array, random) so a test can inject a deterministic random function. Verify the result is a permutation.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.
