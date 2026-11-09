# Shell sort

Shell sort is insertion sort with a useful change: it first compares values that are far apart. Those long-distance moves help a small value travel toward its final position faster than ordinary insertion sort allows. The gap gradually shrinks until the final pass uses a gap of `1`, which is ordinary insertion sort.

```javascript
function shellSort(items) {
  const result = [...items];

  for (
    let gap = Math.floor(result.length / 2);
    gap > 0;
    gap = Math.floor(gap / 2)
  ) {
    for (let index = gap; index < result.length; index += 1) {
      const value = result[index];
      let position = index;

      while (
        position >= gap &&
        result[position - gap] > value
      ) {
        result[position] = result[position - gap];
        position -= gap;
      }

      result[position] = value;
    }
  }

  return result;
}
```

The inner loop is insertion sort with `gap` replacing `1`. When the gap is large, a value can move a long distance in one pass. When the gap reaches `1`, the collection is already partly organized, so the final insertion pass has less work.

## Complexity review

Shell sort does not have one universal Big-O result. Its performance depends on the sequence of gaps. The simple halving sequence used here can still approach `O(n²)`, while better researched sequences perform much better in practice. When you quote a complexity for Shell sort, name the gap sequence or say that the answer depends on the variant.

```text
Shell sort: 1000 values, time 0.0xx ms
```

Shell sort is valuable because it shows that an algorithm can improve another algorithm without abandoning its basic idea. It is also a reminder that a name alone does not tell us the complete performance story.

---

## Try it Yourself

Print each gap before its pass. Then compare the halving sequence with a sequence that uses `3 * gap + 1` values. Record the time and explain why the gap sequence is part of the algorithm's definition.

---

## More background

[Wikipedia: Shellsort](https://en.wikipedia.org/wiki/Shellsort)

---
