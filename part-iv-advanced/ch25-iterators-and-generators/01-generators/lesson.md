# Iterators and generators

# Iterators and generators

Sometimes we only need the next value. Building every possible value in advance can be a fairly expensive way to discover that we only wanted the first three. JavaScript gives us iterators and generators for this one-value-at-a-time style of work.

> An **iterable** is a value that can provide an iterator. An **iterator** remembers where it is and supplies a `next()` method. A **generator** is a convenient way to write an iterator because `yield` pauses the function and resumes it on the next request.

Lazy sequences avoid constructing every value up front. That can save memory and lets us represent an unbounded sequence, provided the consumer stops. Spreading an infinite generator never finishes, so bound consumption deliberately. The computer is obedient rather than psychic.

## Example: a range and its squares

```javascript
function* range(start, end) {
  for (let i = start; i < end; i += 1) {
    yield i;
  }
}
function* squares(values) {
  for (const value of values) {
    yield value * value;
  }
}
console.log([...squares(range(1, 5))]);
const iterator = range(10, 12);
const first = iterator.next();
const second = iterator.next();
const finished = iterator.next();

console.log("value: " + first.value + ", done: " + first.done);
console.log("value: " + second.value + ", done: " + second.done);
console.log("value: " + finished.value + ", done: " + finished.done);
```

## Expected output

```text
1,4,9,16
value: 10, done: false
value: 11, done: false
value: undefined, done: true
```

`range(1, 5)` does not build `[1, 2, 3, 4]`. It pauses at each `yield`. `squares()` asks for one value from `range`, squares it, and yields the result. The spread expression asks for every remaining result in this bounded example and collects them into an ordinary array.

The explicit `next()` calls show the iterator protocol. The first two calls return values with `done: false`. The third call has no value left, so it returns `done: true`. Calling `next()` again would continue returning the completed state.

## The important syntax

| Syntax | What it does |
| --- | --- |
| `function*` | Declares a generator function |
| `yield value` | Sends one value to the consumer and pauses |
| `iterator.next()` | Requests the next result |
| `{ value, done }` | Reports the value and whether iteration is finished |
| `for...of` | Requests values until the iterator is done |
| `[...iterable]` | Consumes all values into a new array |

## Try it Yourself

Write take(iterable, n) as a generator that returns at most n items. Test n = 0 without reading the source.

Write `take(iterable, n)` as a generator that returns at most `n` items. Test `n = 0` without reading the source. Then call your function with a generator that could continue forever and prove that `take` stops.

---

