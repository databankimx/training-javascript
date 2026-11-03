# Solution

The solution keeps the base case visible and logs both directions of the call. The `enter` messages show the descent, while the `return` messages show the stack unwinding.

```javascript
function trace(value) {
  console.log(`enter ${value}`);

  if (value === 1) {
    console.log("return 1");
    return 1;
  }

  const result = trace(value - 1) + 1;
  console.log(`return ${result}`);
  return result;
}

trace(5);
```

```text
enter 5
enter 4
enter 3
enter 2
enter 1
return 1
return 2
return 3
return 4
return 5
```

The recursive call happens before the addition, so each outer call waits for the inner call to return. That is why the return messages appear in the opposite order from the entry messages.

---
