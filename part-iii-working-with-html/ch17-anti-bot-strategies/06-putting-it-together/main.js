const form = document.getElementById("comment-form");
const comment = document.getElementById("comment");
const honeypot = document.getElementById("website");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const list = document.getElementById("saved");
const status = document.getElementById("status");
const botButton = document.getElementById("bot");
const carefulButton = document.getElementById("careful");

const MIN_MILLISECONDS = 3000;
const openedAt = Date.now();
let expected = 0;

function wait(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function newQuestion() {
    const first = Math.floor(Math.random() * 18) + 2;
    const second = Math.floor(Math.random() * 18) + 2;
    expected = first + second;
    question.textContent = `What is ${first} + ${second}?`;
    answer.value = "";
}

// Neutral reply for the silent checks, so a trapped bot learns nothing about which check caught it.
function neutral() {
    status.textContent = "Thanks for your comment.";
    comment.value = "";
}

form.addEventListener("submit", event => {
    event.preventDefault();
    const text = comment.value.trim();
    if (text === "") {
        status.textContent = "Write something first.";
        return;
    }

    // 1. The honeypot. Cheap, and silent. A filled honeypot means a script filled in every field.
    if (honeypot.value !== "") {
        neutral();
        return;
    }

    // 2. The timing check. Also silent, because a fast submission proves nothing to the visitor.
    if (Date.now() - openedAt < MIN_MILLISECONDS) {
        neutral();
        return;
    }

    // 3. The challenge. This is the one check that speaks, because a person who got the sum wrong needs to know.
    const given = answer.value.trim();
    if (given === "" || Number(given) !== expected) {
        status.textContent = "That answer is not right. Try again.";
        return;
    }

    const item = document.createElement("li");
    item.textContent = text;
    list.append(item);
    neutral();
    newQuestion();
});

botButton.addEventListener("click", () => {
    comment.value = "Cheap watches, click here";
    honeypot.value = "https://spam.example";
    form.requestSubmit();
});

// A script that reads the question off the page and types the answer. It gets past the challenge, which is the lesson:
// a question printed on the page is a question a script can read. It still waits long enough to pass the timing check.
carefulButton.addEventListener("click", async () => {
    comment.value = "Thanks, this is useful.";
    await wait(MIN_MILLISECONDS + 500);
    const numbers = question.textContent.match(/\d+/g).map(Number);
    answer.value = String(numbers[0] + numbers[1]);
    form.requestSubmit();
});

newQuestion();
