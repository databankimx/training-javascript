function xhrStyle(callback) {
  callback(null, "XHR result");
}

xhrStyle((error, value) => console.log(error ? error.message : value));
Promise.resolve("fetch result").then(value => console.log(value));
