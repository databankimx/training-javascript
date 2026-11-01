# Future lesson notes

## JavaScript in HTML and OnBase forms

When we reach browser-based lessons and form work, build a small debug channel into the examples. A `debug` variable or helper should send diagnostic messages and errors to both `console.log` and an on-page alert or debug area. This will matter when troubleshooting forms in systems such as OnBase, where the browser console may not be the most convenient place to inspect what happened.
## Recursive traversal of irregular collections and folder trees

The Chapter 4 traversal lesson introduces a deliberately asymmetric nested array:

```javascript
const fileTree = [
  "readme.txt",
  ["images", ["logo.svg", "photo.jpg"]],
  ["scripts", ["main.js"]]
];
```

Save the full implementation for the recursion lesson. Explain that fixed nested loops work for a known two-dimensional shape, but arbitrary nesting requires a function that processes a value and calls itself when it finds another array. Use a file system as the real-world model: folders are branches, files are leaves, and recursive traversal visits every descendant folder and file regardless of depth.
