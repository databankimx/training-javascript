const debugOutput = document.querySelector("#debug");
const debug = message => { console.log(message); debugOutput.textContent += `${message}\n`; };
document.querySelector("#run").addEventListener("click", () => debug("Validation ran"));
