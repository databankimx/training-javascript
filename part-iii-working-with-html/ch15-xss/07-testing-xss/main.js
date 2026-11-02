const value = document.querySelector("#test-value");
document.querySelector("#show").addEventListener("click", () => {
  document.querySelector("#unsafe").innerHTML = value.value;
  document.querySelector("#safe").textContent = value.value;

  // Deliberately unsafe: model the historical jQuery/server-rendered path
  // where script elements from the inserted HTML execute.
  document.querySelectorAll("#unsafe script").forEach(script => {
    const executable = document.createElement("script");
    executable.textContent = script.textContent;
    script.replaceWith(executable);
  });
});
document.querySelector("#show").click();
