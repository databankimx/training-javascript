## Solution

```javascript
function greet(name) {
  console.log(`Hello, ${name}`);
}

greet("Ada");
greet("Grace");
```

```text
Hello, Ada
Hello, Grace
```

The signature begins with the `function` keyword, followed by the function name, the parameter list, and the function body. The declaration creates the reusable action. Each call supplies an argument for `name`, so the same body produces two different greetings.

Function declarations are available before their position in the file, but keeping the declaration above the calls is the clearer convention for a lesson and for most everyday code.

---

