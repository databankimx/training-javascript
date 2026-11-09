const names = ["Adam", ["Bob", ["Chet", "Dana"]], "Eve"];

function printLeaves(items) {
  for (const item of items) {
    if (Array.isArray(item)) printLeaves(item);
    else console.log(item);
  }
}

printLeaves(names);
