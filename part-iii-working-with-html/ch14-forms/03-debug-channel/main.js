const debugOutput = document.querySelector("#debug");
const debugEnabled = true;

function debug(message, error = false) {
  console[error ? "error" : "log"](message);
  if (!debugEnabled) return;
  debugOutput.hidden = false;
  debugOutput.textContent += `${error ? "ERROR: " : ""}${message}\n`;
}

debug("Form script ready");
debug("Example validation failure", true);
