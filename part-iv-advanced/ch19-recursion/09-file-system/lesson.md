# Walking a file system

A file system is a familiar tree. Folders are branches, and files are leaves. A folder may contain files and more folders, while a file does not contain children. That repeated shape is exactly the sort of structure recursion handles well.

This example uses an object to model the file system rather than reading the real disk. The shape is enough to demonstrate the algorithm without accidentally walking the training repository and printing several thousand files. The real `fs` module can supply a similar tree, but the recursive idea is the same.

```javascript
const fileSystem = {
  name: "project",
  kind: "folder",
  children: [
    {
      name: "src",
      kind: "folder",
      children: [
        { name: "index.js", kind: "file" },
        {
          name: "utils",
          kind: "folder",
          children: [{ name: "format.js", kind: "file" }]
        }
      ]
    },
    { name: "README.md", kind: "file" },
    { name: "package.json", kind: "file" }
  ]
};
```

The root is a folder. Each folder has a `children` array, and each child has the same basic properties: a `name` and a `kind`. A file has no children, so it is a leaf.

## Visit every node

```javascript
function printTree(node, depth = 0) {
  if (node.name !== "project") {
    console.log(`${"  ".repeat(depth - 1)}${node.name}`);
  }

  if (node.kind === "folder") {
    for (const child of node.children) {
      printTree(child, depth + 1);
    }
  }
}

printTree(fileSystem);
```

```text
src
  index.js
  utils
    format.js
README.md
package.json
```

The function prints the current node, then asks the same function to print each child. A file has no children to visit, so the function simply returns. A folder is a branch, so the recursive case walks its children.

The `depth` argument is not part of the tree data. It is bookkeeping for presentation. Each recursive level adds two spaces, making the output resemble the structure a person sees in a file browser.

> A tree traversal visits the nodes in a structured order. This example uses depth-first traversal: it follows one folder branch to its leaves before moving to the next sibling.

## Why recursion belongs here

We could manage the same traversal with an explicit stack, as we did for nested arrays. That can be useful for very deep trees or when we need fine-grained control over memory. The recursive version is often easier to read because the code follows the shape of the data directly.

In a real file-system walker, we would also handle permissions, symbolic links, missing folders, cycles created by links, and very deep paths. Recursion gives us the shape of the solution, not a free pass on all the production details.

---

## Try it Yourself

Add a `size` property to file nodes and return the total size beneath a folder. Then add a search function that returns every file whose name ends with `.js`. Test a folder with no children and a tree with three levels.

---

## More background

The Python reference uses a real file-system example. This JavaScript lesson keeps the data in memory so the recursive walk is visible and repeatable. Node's `fs.readdir()` and `fs.stat()` can provide the real data when an application needs to inspect a disk.

---
