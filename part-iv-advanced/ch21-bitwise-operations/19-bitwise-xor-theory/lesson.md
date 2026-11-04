## Using Bitwise XOR (`^`)

The bitwise XOR operator (`^`) compares two values and returns 1 in 
each position where the bits are not equal across the two values. That is, 
one or the other of the bits (but not both) contains a 1.

This *exclusive* OR operation follows the truth table below:

|$b_1$|^|$b_2$|
|:-|:-:|-:|
|$1$|$0$|$1$|
|$1$|$1$|$0$|
|$0$|$1$|$1$|
|$0$|$0$|$0$|

---

### An Example

Consider this scenario:

||
|-:|
|$a=1001~1100_2=156_{10}$|
|$b=0011~0100_2=~~52_{10}$|
|$a~~\text{\^{}}~~b=1010~1000_2=168_{10}$|

Any position where either value's bit is $1$ (excluding when both are set) 
will return a $1$.

As long as we understand that what's being compared are the individual
bits, we can express the values in any base with the same results



Output:

```
10101000
168
```

---

### A Simple Use-Case: Swapping Two Values

A simple example of using bitwise XOR is swapping two values without
creating a temp variable. JavaScript can also swap two values with `a, b = b, a`, but
the XOR method shows how the bits work.



Output:

```
a = 5, b = 8
a = 8, b = 5
```

---

Let's look at how this works.

At the start:

* $a=5_{10}=0101_2$
* $b=8_{10}=1000_2$

So, the swap process looks like this:

Step 1: ```a = a ^ b```

||
|-:|
|$0101_2$|
|$\underline{\text{\^{}}~~~1000_2}$|
|$1101_2$|

... now $a$ contains both values' bits

Step 2: ```b = b ^ a```

||
|-:|
|$1000_2$|
|$\underline{\text{\^{}}~~~1101_2}$|
|$0101_2$|

... now $b$ contains $a$'s original value

Step 3: ```a = a ^ b```

||
|-:|
|$1101_2$|
|$\underline{\text{\^{}}~~~0101_2}$|
|$1000_2$|

... now $a$ contains $b$'s original value

---

## JavaScript example

```javascript
const pairs = [[0, 0], [0, 1], [1, 0], [1, 1]];
for (const [left, right] of pairs) {
  console.log(`${left} ^ ${right} = ${left ^ right}`);
}
console.log("1010 ^ 0101 = " + (0b1010 ^ 0b0101).toString(2).padStart(4, "0"));
```

Expected output:

```text
0 ^ 0 = 0
0 ^ 1 = 1
1 ^ 0 = 1
1 ^ 1 = 0
1010 ^ 0101 = 1111
```

---
