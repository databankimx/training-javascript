const form = document.getElementById("comment-form");
const comment = document.getElementById("comment");
const list = document.getElementById("saved");
const status = document.getElementById("status");

form.addEventListener("submit", event => {
    event.preventDefault();
    const text = comment.value.trim();
    if (text === "") {
        status.textContent = "Write something first.";
        return;
    }

    // TODO: allow at most two submissions in thirty seconds. Keep the timestamps in a list, as the server did.

    const item = document.createElement("li");
    item.textContent = text;
    list.append(item);
    comment.value = "";
    status.textContent = "Thanks for your comment.";
});
