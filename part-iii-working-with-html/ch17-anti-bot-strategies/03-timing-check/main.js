const form = document.getElementById("comment-form");
const comment = document.getElementById("comment");
const list = document.getElementById("saved");
const status = document.getElementById("status");
const botButton = document.getElementById("bot");
const slowButton = document.getElementById("slow");

// The moment this page started. A person needs time to read the form and type, so a submission this soon is suspicious.
const MIN_MILLISECONDS = 3000;
const openedAt = Date.now();

const saved = [];

function wait(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

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

    const elapsed = Date.now() - openedAt;
    if (elapsed < MIN_MILLISECONDS) {
        // Same neutral reply as before. The timing rule stays inside the script.
        status.textContent = "Thanks for your comment.";
        comment.value = "";
        return;
    }

    save(text);
    status.textContent = "Thanks for your comment.";
    comment.value = "";
});

botButton.addEventListener("click", () => {
    comment.value = "Cheap watches, click here";
    form.requestSubmit();
});

// Waits long enough to look like someone who read the form and typed a reply.
slowButton.addEventListener("click", async () => {
    comment.value = "Thanks, this is useful.";
    await wait(MIN_MILLISECONDS + 500);
    form.requestSubmit();
});
