# Custom iterables

`for...of` does not require a plain array. It works with any value that follows JavaScript's iterable protocol. That is a useful distinction: the value can decide what iteration means instead of exposing its storage directly.

An array is iterable because JavaScript already knows how to visit its elements in order. A string is iterable because JavaScript can visit its characters. A `Set` is iterable because JavaScript can visit its members. We can give an ordinary object the same ability by adding a method with the special name `Symbol.iterator`.

```javascript
const guests = {
  names: ["Ada", "Grace", "Alan"],
  *[Symbol.iterator]() {
    for (const name of this.names) {
      yield name;
    }
  }
};

for (const guest of guests) {
  console.log(guest);
}

console.log("count: " + [...guests].length);
```

```text
Ada
Grace
Alan
count: 3
```

There are several ideas packed into this small example, so let us unpack them before blaming the punctuation.

1. `guests` is an ordinary object. Its `names` property is the storage we chose, and nothing about that property alone makes the object iterable.
2. `[Symbol.iterator]` is a computed method name. The square brackets mean, "use the value of `Symbol.iterator` as the property name." JavaScript looks for this property when `for...of`, spread, or `Array.from()` needs an iterator.
3. The `*` makes the method a generator. Calling `guests[Symbol.iterator]()` returns an iterator object instead of immediately running through every name.
4. The `for...of` inside the generator visits `this.names`. Each `yield` pauses the generator and hands one name to its caller. The next request resumes after that `yield`.
5. The outer `for...of` asks for those values one at a time and assigns each one to `guest`. It does not need to know whether the values came from an array, a generator, a database cursor, or our slightly overeducated object.
6. The spread expression `[...guests]` consumes the same iterable from the beginning and collects the yielded values into a new ordinary array. Its `.length` is therefore `3`.

The object can be iterated more than once because each use asks for a fresh iterator. The generator does not permanently remember that the previous loop reached the end.

If we wanted to see the protocol directly, we could write the equivalent in smaller steps:

```javascript
const iterator = guests[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
```

```text
{ value: 'Ada', done: false }
{ value: 'Grace', done: false }
{ value: 'Alan', done: false }
{ value: undefined, done: true }
```

`for...of` normally hides those calls for us. The final result has `done: true`, which tells the consumer to stop.

> An iterable is a value that can provide a fresh iterator through `Symbol.iterator`.
>
> An iterator is the stateful object that provides a `next()` method. Each call returns an object with a `value` and a `done` flag.
>
> Arrays, strings, maps, and sets are built-in iterables. Custom iterables let us expose a useful traversal without handing callers every internal detail.

## Try it Yourself

Change the iterator so it yields the names in reverse order. Then add a second property, such as `roles`, and decide whether the iterable should expose names, roles, or paired values. The storage and the public traversal do not have to be identical.

As a final check, call `guests[Symbol.iterator]()` yourself and print the results from `next()`. Notice that a new iterator starts at the beginning, while an existing iterator continues from its current position.

---
