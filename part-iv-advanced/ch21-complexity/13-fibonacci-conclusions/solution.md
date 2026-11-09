# Solution

One defensible set of choices is:

| Situation | Choice | Reason |
| --- | --- | --- |
| Explain the definition | Naive recursion | It mirrors the formula directly |
| Compute `F(40)` repeatedly | Memoization | It reuses values during the run |
| Compute a very large exact value | Iteration with `BigInt` | It avoids recursion depth and floating-point rounding |
| Compute one small value | Iteration or naive recursion | The input is small enough that clarity matters more than optimization |

There is no universal winner. The requirements decide which trade-off is acceptable.

---
