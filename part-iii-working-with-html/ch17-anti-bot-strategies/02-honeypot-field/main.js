const form = document.getElementById("comment-form");
const comment = document.getElementById("comment");
const honeypot = document.getElementById("website");
const list = document.getElementById("saved");
const status = document.getElementById("status");
const botButton = document.getElementById("bot");

const saved = [];

function save(text) {
    saved.push(text);
    const item = document.createElement("li");
    item.textContent = text;
    list.append(item);
}

form.addEventListener("submit", event => {
    event.preventDefault();
    const text = comment.value.trim();
    if (text === "") {
        status.textContent = "Write something first.";
        return;
    }

    // People never see the honeypot, so they never fill it in. If it has any text, a script filled in every field.
    // We drop the comment, but we give the same reply a person would get, so the trap stays hidden.
    if (honeypot.value !== "") {
        status.textContent = "Thanks for your comment.";
        comment.value = "";
        honeypot.value = "";
        return;
    }

    save(text);
    status.textContent = "Thanks for your comment.";
    comment.value = "";
});

botButton.addEventListener("click", () => {
    comment.value = "Cheap watches, click here";
    honeypot.value = "https://spam.example";
    form.requestSubmit();
});
