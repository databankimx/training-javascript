const params = new URLSearchParams(window.location.search);
const message = params.get("message") || "<strong>Safe-looking markup</strong>";

function sanitize(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

document.querySelector("#message").innerHTML = sanitize(message);
