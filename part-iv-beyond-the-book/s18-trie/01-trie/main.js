const root = {children:new Map(),end:false};
function insert(word) {
  let node=root;
  for(const char of word) {
    if(!node.children.has(char)) node.children.set(char,{children:new Map(),end:false});
    node=node.children.get(char);
  }
  node.end=true;
}
function has(word) {
  let node=root;
  for(const char of word) {
    node=node.children.get(char);
    if(!node) return false;
  }
  return node.end;
}
insert('cat');
insert('car');
console.log(has('cat'),has('ca'),has('dog'));
