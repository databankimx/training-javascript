function visitNames(names, action) {
  for (const name of names) {
    action(name);
  }
}

const names = ["Ada", "Grace", "Linus"];
visitNames(names, name => console.log(name));
