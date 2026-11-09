## Using Bitwise NOT (`~`)

The bitwise NOT operator (`~`) is used with a single value and returns the
one's complement of the original value (reverses the values of each bit).

You can see the per-bit behavior in the truth table we created previously.

|~|$b$|
|:-:|:-:|
|$0$|$1$|
|$1$|$0$|

---

### An Example

Consider this scenario:

||
|-:|
|$b=1001~1100_2=156_{10}$|
|$\sim b=0110~0011_2=~~99_{10}$|



Output:

```
b = 10011100
n = 10011101 *wrong
```

The minus sign is lost here. `split('b')` keeps only the digits after the `b`, so
`-0b10011101` prints as `10011101`, which looks like a positive number.

---

### A Word of Warning

In JavaScript, all integers are signed. 

Additionally, integers are of arbitrary size.

Because of this, the bitwise NOT operation is going to return unexpected 
results if you're treating a bitwise value as unsigned.

For example, when JavaScript processes the following, it yields the wrong answer.

|||
|:-|-:|
|$~~~~b=~~~1001~1100_2=~~~156_{10}$||
|$\sim b=-1001~1101_2=-157_{10}$|(*wrong answer)|

JavaScript prints this as `-10011101`, which is $-157$. Read as an unsigned 8-bit value,
the same bit pattern would be $157$, which is why the result looks wrong.



---

### Oh No! Can We Fix It?

However, we can create a function to perform the bitwise NOT operation and
yield the expected result.



This works because the value of `(1 << num_bits) - 1` (with an 8-bit 
value) will be `1111 1111`

The `&` operation in `~n & ((1 << num_bits) - 1)` discards the leading ones that
JavaScript's sign extension adds, keeping only the low `num_bits` bits. That gives the
correct 8-bit answer.

For wider values, pass a larger `num_bits`, since the mask is what limits the
result to that width.

---

### Real-World Applications

Outside of systems level programming, bitwise NOT doesn't have a ton of 
uses, but it is used (under the covers) in:

* Several encryption algorithms
* High-performance mathematical algorithms
* Bit-masking for IP address computations
* And others

One example where bitwise NOT can be used is when implementing a function 
to set an arbitrary bit in an integer "word"



Output:

```
1
2
4
8
16
32
64
128
```

---

## JavaScript example

```javascript
const value = 0b00001111;
const result = (~value) & 0xff;
console.log(`NOT 00001111 (low 8 bits): ${result.toString(2).padStart(8, "0")}`);
```

Expected output:

```text
NOT 00001111 (low 8 bits): 11110000
```

---
