function* windows(values, size) {
  for (let start = 0; start + size <= values.length; start += 1) {
    yield values.slice(start, start + size);
  }
}

for (const window of windows([1, 2, 3, 4, 5], 3)) {
  console.log(window.join(","));
}
