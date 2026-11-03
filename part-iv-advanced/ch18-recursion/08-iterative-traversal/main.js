const names = ["Adam", ["Bob", ["Chet", "Dana"]], "Eve"];

function printWithStack(items) {
  const pending = [...items].reverse();

  while (pending.length > 0) {
    const item = pending.pop();

    if (Array.isArray(item)) {
      pending.push(...[...item].reverse());
    } else {
      console.log(`Loop: ${item}`);
    }
  }
}

function printRecursively(items) {
  for (const item of items) {
    if (Array.isArray(item)) {
      printRecursively(item);
    } else {
      console.log(`Recursive: ${item}`);
    }
  }
}

printWithStack(names);
printRecursively(names);
