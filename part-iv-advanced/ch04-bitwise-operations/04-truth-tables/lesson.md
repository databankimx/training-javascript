# Bitwise truth tables

A truth table keeps us honest. Instead of relying on a vague feeling that an operator “looks right,” we list every possible pair of input bits and record the result.

| p | q | p & q | p \| q | p ^ q |
| ---: | ---: | ---: | ---: | ---: |
| `0` | `0` | `0` | `0` | `0` |
| `0` | `1` | `0` | `1` | `1` |
| `1` | `0` | `0` | `1` | `1` |
| `1` | `1` | `1` | `1` | `0` |

AND requires both inputs. OR accepts either input. XOR accepts exactly one input, so its final row is 0 when both bits are on.

```javascript
const pairs = [[0, 0], [0, 1], [1, 0], [1, 1]];

for (const [left, right] of pairs) {
  console.log("AND " + left + "," + right + ": " + (left & right));
}
```

The complete script repeats the loop for OR and XOR. The output begins like this:

```text
AND 0,0: 0
AND 0,1: 0
AND 1,0: 0
AND 1,1: 1
```

## Try it Yourself

Add a NOT section that prints `~0` and `~1`. Explain why those values are not simply 1 and 0. The answer is the signed 32-bit representation, not a broken truth table.

---

