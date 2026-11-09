## Using Bitwise OR (`|`)

The bitwise OR operator (`|`) is used to compare two values and return
the union of their set ($1$) bits.

This operation is an *inclusive* OR, meaning that the result bit will be 
set to $1$ any time a $1$ is found in either value, irrespective of the 
other value.

This can be seen by observing the truth table we previously laid out for 
the bitwise OR operation.

|$b_1$|\||$b_2$|
|:-|:-:|-:|
|$1$|$1$|$1$|
|$1$|$1$|$0$|
|$0$|$1$|$1$|
|$0$|$0$|$0$|

---

Consider this scenario:

> ||
> |-:|
> |$a=1001~1100_2=156_{10}$|
> |$b=0011~0100_2=~~52_{10}$|
> |$a~\mid~b=1011~1100_2=188_{10}$|

Any position where either value's bit is $1$ (including when both are set) 
will return a $1$.

As long as we understand that what's being compared are the individual
bits, we can express the values in any base with the same results



Output:

```
10111100
188
```

---

### A Simple Example: Adding a Permission

In many languages, when accessing a file, you sometimes need to specify the
permissions with which you're opening the file. Can you read, write, or 
both?

In JavaScript, this isn't the case. Instead, we use one or more of a set of
strings representing the permissions we want to use.

But let's imagine a scenario where we did have file permission values as
integers.



Your first thought upon seeing this example is that $3$ ($0011$) is not 
a power of two, so it cannot be represented by setting a single bit.

Worse, it uses both of the bits already in use by read ($0001$) and write 
($0010$).

We can use the bitwise OR operator (in this case, the combined assignment
operator) to apply the permissions we need.



Output:

```
0011 = 3
Success!
```

Using a bitwise OR added on the `write` permission while retaining the 
`read` permission, resulting in the `read_write` permission.

> Note: the code file turns off a Sonar warning on the `if need_to_write:`
> line. That comment stays in the code file.

The full script runs both examples. It prints the first example's output, then a
separator line, then the permissions example's output.

---

## JavaScript example

```javascript
const pairs = [[0, 0], [0, 1], [1, 0], [1, 1]];
for (const [left, right] of pairs) {
  console.log(`${left} | ${right} = ${left | right}`);
}
console.log("1010 | 0101 = " + (0b1010 | 0b0101).toString(2).padStart(4, "0"));
```

Expected output:

```text
0 | 0 = 0
0 | 1 = 1
1 | 0 = 1
1 | 1 = 1
1010 | 0101 = 1111
```

---
