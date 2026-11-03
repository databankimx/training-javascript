function makeSaver(label) {
  return function save() {
    return label + ": saved";
  };
}

const saveAda = makeSaver("Ada");
const saveGrace = makeSaver("Grace");

console.log(saveAda());
console.log(saveGrace());
