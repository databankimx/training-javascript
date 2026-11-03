# Solution

The recursive function can be called from a loop without changing its definition:

```javascript
for (let n = 0; n <= 10; n += 1) {
  console.log(`${n}! = ${factorial(n)}`);
}
```

```text
0! = 1
1! = 1
2! = 2
3! = 6
4! = 24
5! = 120
6! = 720
7! = 5040
8! = 40320
9! = 362880
10! = 3628800
```

The function remains recursive, but the loop is responsible for asking for several separate results. The conservative upper bound keeps the example within JavaScript's reliably exact integer range.

For genuinely large factorials, use a loop and `BigInt` instead of relying on recursive calls and floating-point `number` values. The recursive version is here to make the pattern visible, not to win a performance award.
