# S26 · Iterators and generators (itertools counterpart)

## Learning goal

S26 · Iterators and generators (itertools counterpart): by the end, we should be able to change the example and explain why it behaves as it does.

## Before you start

Keep the Source and Output panes handy, and work through the earlier lessons when a concept is unfamiliar. Everything we need for this example is already in the repository.

## Understand the idea

Sometimes we only need the next value. Building every possible value in advance can be a fairly expensive way to discover that we only wanted the first three.

An iterator produces values on demand; an iterable supplies an iterator through Symbol.iterator. A generator function uses yield to suspend and resume execution. Lazy sequences avoid constructing every value up front and can represent unbounded streams when consumers stop. Spreading an infinite generator never finishes, so bound consumption deliberately.

## Predict, then run

Before we press Run, read main.js and make a prediction. Include the order of the output. Use a quick trace on paper if that helps.

Expect [1,4,9,16], then values 10 and 11 with done false, followed by done true.

## Example code

```javascript
function* range(start,end){
  for(let i=start;i<end;i++)yield i;
}
function* squares(values){
  for(const value of values)yield value*value;
}
console.log([...squares(range(1,5))]);
const iterator=range(10,12);
console.log(iterator.next(),iterator.next(),iterator.next());
```

## Expected output

```text
1, 4, 9, 16
```

## Walk through the example

range yields one value each time its consumer asks. squares consumes those values and yields transformed values without building an intermediate array. Spread finally requests all remaining results in this bounded example. The explicit next calls show the iterator protocol, including its completed state.

## Try it yourself

Write take(iterable, n) as a generator that returns at most n items. Test n = 0 without reading the source.

Give this a try before opening Solution. Keep the changes in the editor, or download the source you want to save. Reset brings back the original selected file.

## Check your understanding

Point to the code that does the important work and explain it in your own words. Then choose a boundary case that makes the first solution uncomfortable. What happens, and what should we change?

## Completion checkpoint

We’re ready to move on when we can explain the example, complete the exercise, and show both an ordinary case and an edge case. Getting the output once is a start; knowing why it is right is the useful part.

## Further reading

[MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [Eloquent JavaScript](https://eloquentjavascript.net/). Use the section that matches this lesson. We do not need to finish two books before changing a button.
