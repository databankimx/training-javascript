# Recursing through nested arrays

Earlier we described nested arrays as arrays whose elements may themselves be arrays. Because each nested array has the same basic shape as the whole value, recursion gives us a direct way to visit every leaf.

```javascript
const names = ["Adam", ["Bob", ["Chet", "Dana"]], "Eve"];

function printLeaves(items) {
  for (const item of items) {
    if (Array.isArray(item)) printLeaves(item);
    else console.log(item);
  }
}

printLeaves(names);
```

```text
Adam
Bob
Chet
Dana
Eve
```

`Array.isArray(item)` distinguishes a branch from a leaf. An array is a branch, so the function visits it recursively. A string is a leaf, so the function prints it.

> This is the same pattern as a file system: folders are branches, and files are leaves. A real file-system walker should also handle permissions, symbolic links, and very deep paths.

---

## Try it Yourself

Change the function so it returns the number of leaves instead of printing them. Test an empty array and a structure with three nesting levels.
