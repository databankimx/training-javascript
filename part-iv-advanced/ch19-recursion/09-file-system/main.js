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
