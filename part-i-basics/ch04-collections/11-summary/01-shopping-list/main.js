const list = ["bread", "milk", "eggs"];
list.push("coffee");
const withoutEggs = list.toSpliced(list.indexOf("eggs"), 1);

console.log(withoutEggs.join(", "));
console.log(withoutEggs.includes("milk"));
