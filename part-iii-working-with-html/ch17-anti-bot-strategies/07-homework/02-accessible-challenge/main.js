const form = document.getElementById("challenge-form");
const answer = document.getElementById("answer");
const feedback = document.getElementById("feedback");

// The question is fixed here so the exercise is predictable. The answer is 12.
const EXPECTED = 12;

form.addEventListener("submit", event => {
    event.preventDefault();

    // TODO: link the answer field to the hint with aria-describedby, in the HTML or from this script.
    // TODO: announce the wrong-answer message to screen readers. Keep the focus in the answer field.

    if (Number(answer.value.trim()) === EXPECTED) {
        feedback.textContent = "Correct. Thank you.";
    } else {
        feedback.textContent = "That answer is not right. Try again.";
    }
});
