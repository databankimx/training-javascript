## Truth Tables ##

### Refresher: Logic Operators ###

When working with Boolean (logical) operators, we compare the values
`true` and `false`

As a refresher, here are the truth tables for the common logical 
operations:

---

Negation (NOT)

|!|p|
|:-|-:|
|F|t|
|T|f|

---

Conjunction (AND)

|p|and|q|
|:-|:-:|-:|
|t|T|t|
|t|F|f|
|f|F|t|
|f|F|f|

---

Disjunction (OR)

|p|or|q|
|:--|:-:|--:|
|t|T|t|
|t|T|f|
|f|T|t|
|f|F|f|

---

Exclusive Disjunction (XOR)

Note: I'll use ⊕ as the XOR symbol, since this operator typically doesn't 
exist in most programming languages.

|p|⊕|q|
|:--|:-:|--:|
|t|F|t|
|t|T|f|
|f|T|t|
|f|F|f|

---

### Bitwise Operators ###

When performing bitwise operations, we compare $0$ and $1$ at 
each bit position instead of `true` and `false`.

In JavaScript, the bitwise operators are `~` (complement), `&` (AND), `|` (OR), and
`^` (XOR). JavaScript's `not`, `and`, and `or` are the logical operators from the
first part of this lesson, not the bitwise ones.

---

Complement (Negation)

|~|b|
|:--|--:|
|$0$|$1$|
|$1$|$0$|

---

Conjunction (AND)

|b1|&|b2|
|:---|:-:|---:|
|$1$|$1$|$1$|
|$1$|$0$|$0$|
|$0$|$0$|$1$|
|$0$|$0$|$0$|

---

Disjunction (OR)

|b1|$\mid$|b2|
|:---|:-:|---:|
|$1$|$1$|$1$|
|$1$|$1$|$0$|
|$0$|$1$|$1$|
|$0$|$0$|$0$|

---

Exclusive Disjunction (XOR)

|b1|^|b2|
|:---|:-:|---:|
|$1$|$0$|$1$|
|$1$|$1$|$0$|
|$0$|$1$|$1$|
|$0$|$0$|$0$|

---

### Remember ###

These truth tables just show what would happen at a single bit position.
When we implement these processes using byte or multiple-byte sized types, 
any of these operations will be performed for every bit position across 
both operands.

---

## JavaScript example

```javascript
const pairs = [[0, 0], [0, 1], [1, 0], [1, 1]];

for (const [left, right] of pairs) {
  console.log("AND " + left + "," + right + ": " + (left & right));
}
for (const [left, right] of pairs) {
  console.log("OR " + left + "," + right + ": " + (left | right));
}
for (const [left, right] of pairs) {
  console.log("XOR " + left + "," + right + ": " + (left ^ right));
}
```

Expected output:

```text
AND 0,0: 0
AND 0,1: 0
AND 1,0: 0
AND 1,1: 1
OR 0,0: 0
OR 0,1: 1
OR 1,0: 1
OR 1,1: 1
XOR 0,0: 0
XOR 0,1: 1
XOR 1,0: 1
XOR 1,1: 0
```

---
