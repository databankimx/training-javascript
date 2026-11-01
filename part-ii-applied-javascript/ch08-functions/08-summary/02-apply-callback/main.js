function visitNames(names, action) {
  for (const name of names) {
    action(name);
  }
}

visitNames(["Ada", "Grace", "Linus"], name => console.log(name.toUpperCase()));
