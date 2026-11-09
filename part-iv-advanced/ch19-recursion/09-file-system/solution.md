# Solution

The solution adds file sizes and recursively totals every file beneath a folder. A file returns its own size. A folder adds the totals returned by its children.

```javascript
const project = {
  name: "project",
  kind: "folder",
  children: [
    {
      name: "src",
      kind: "folder",
      children: [
        { name: "index.js", kind: "file", size: 1200 },
        { name: "format.js", kind: "file", size: 800 }
      ]
    },
    { name: "README.md", kind: "file", size: 400 }
  ]
};

function totalSize(node) {
  if (node.kind === "file") {
    return node.size;
  }

  return node.children.reduce((total, child) => {
    return total + totalSize(child);
  }, 0);
}

function findJavaScriptFiles(node, matches = []) {
  if (node.kind === "file" && node.name.endsWith(".js")) {
    matches.push(node.name);
  }

  if (node.kind === "folder") {
    node.children.forEach(child => findJavaScriptFiles(child, matches));
  }

  return matches;
}

console.log(`Total size: ${totalSize(project)}`);
console.log(`JavaScript files: ${findJavaScriptFiles(project).join(", ")}`);
```

```text
Total size: 2400
JavaScript files: index.js, format.js
```

The same recursive shape supports both calculations. The base case handles one file, and the recursive case combines the results from a folder's children.

---
