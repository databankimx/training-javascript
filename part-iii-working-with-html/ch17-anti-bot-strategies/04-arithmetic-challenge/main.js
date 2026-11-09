const form = document.getElementById("comment-form");
const comment = document.getElementById("comment");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const newQuestionButton = document.getElementById("new-question");
const list = document.getElementById("saved");
const status = document.getElementById("status");
const botButton = document.getElementById("bot");

// The answer to the question on screen. It lives in the script, not in the HTML.
let expected = 0;

// A whole number from min to max, inclusive.
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function newQuestion() {
    const first = randomInt(2, 19);
    const second = randomInt(2, 19);
    expected = first + second;
    question.textContent = `What is ${first} + ${second}?`;
    answer.value = "";
}

function save(text) {
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

    // Number("") is 0, so an empty answer must be refused before we compare.
    const given = answer.value.trim();
    if (given === "" || Number(given) !== expected) {
        status.textContent = "That answer is not right. Try again.";
        return;
    }

    save(text);
    comment.value = "";
    status.textContent = "Thanks for your comment.";
    // Each challenge answers once. Reusing an answer is how a recorded solution would get through.
    newQuestion();
});

newQuestionButton.addEventListener("click", newQuestion);

botButton.addEventListener("click", () => {
    comment.value = "Cheap watches, click here";
    form.requestSubmit();
});

newQuestion();
