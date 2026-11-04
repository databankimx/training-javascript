# Typed arrays

Ordinary JavaScript arrays are flexible containers. They can hold mixed values, grow as needed, and store numbers without asking us to choose a width. Sometimes that flexibility is not what a program needs.

Typed arrays store fixed-width numeric values in a binary buffer. They are useful for image data, audio samples, network packets, WebGL, and other work where the representation matters.

> A typed array is not a faster spelling of every ordinary array. It is a view that says, "interpret this storage as values of this particular width and type." That promise is useful when another system expects bytes or fixed-width numbers.

```javascript
const values = new Float64Array([1, 2, 3]);
const view = values.subarray(0, 2);

view[0] = 10;

console.log([...values]);
const sum = values.reduce((total, value) => total + value, 0);
console.log(sum / values.length);
```

```text
[ 10, 2, 3 ]
5
```

`Float64Array` stores each value as a 64-bit floating-point number. `subarray()` creates a view over the same memory, so changing `view[0]` changes `values[0]`. The mean is calculated from the modified values.

Typed arrays also apply the limits of their element type. Assigning `128` to an `Int8Array` does not create a magical ninth bit. The value wraps into the signed 8-bit range. That behavior can be useful when reading binary data, but it is a poor substitute for validating ordinary user input.

| Type | Storage | Typical use |
| --- | --- | --- |
| `Int8Array` | Signed 8-bit integers | Small signed samples |
| `Uint8Array` | Unsigned 8-bit integers | Bytes and color channels |
| `Int32Array` | Signed 32-bit integers | Fixed-width whole numbers |
| `Float32Array` | 32-bit floating point | Graphics and audio data |
| `Float64Array` | 64-bit floating point | Numeric buffers needing more precision |

> A typed array is a view over binary storage with a fixed element type. It is still an array-like object, but it does not have the unrestricted type and resizing behavior of an ordinary Array.

## Views versus copies

`subarray()` creates another view over the same buffer. `slice()` creates a new typed array with copied values.

```javascript
const original = new Uint8Array([10, 20, 30, 40]);
const shared = original.subarray(1, 3);
const copied = original.slice(1, 3);

shared[0] = 99;
copied[1] = 88;

console.log([...original]);
console.log([...shared]);
console.log([...copied]);
```

```text
[ 10, 99, 30, 40 ]
[ 99, 30 ]
[ 20, 88 ]
```

The shared view changes the original. The copied array does not. That distinction matters when a function receives a region of a large buffer and is expected either to edit the source or to work independently.

## Try it Yourself

Use an `Int16Array` and try assigning a value outside its range. Then replace `subarray()` with `slice()` and predict which values change. Compute the mean of an empty typed array safely instead of returning `NaN`.

---
