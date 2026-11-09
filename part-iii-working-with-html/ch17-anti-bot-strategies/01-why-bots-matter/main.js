const form = document.getElementById("comment-form");
const comment = document.getElementById("comment");
const list = document.getElementById("saved");
const status = document.getElementById("status");
const botButton = document.getElementById("bot");

const saved = [];

function save(text) {
    saved.push(text);
    const item = document.createElement("li");
    item.textContent = text;
    list.append(item);
    status.textContent = `Saved ${saved.length} comment(s).`;
}

form.addEventListener("submit", event => {
    event.preventDefault();
    const text = comment.value.trim();
    if (text === "") {
        status.textContent = "Write something first.";
        return;
    }
    save(text);
    comment.value = "";
});

// A script that fills in the form and submits it. The submit handler above cannot tell it apart from a person.
botButton.addEventListener("click", () => {
    comment.value = "Cheap watches, click here";
    form.requestSubmit();
});
