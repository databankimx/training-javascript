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

trace(3);
