// Parses the body of a quiz fence, using the same syntax as the Rust course:
//
//   Question text, which can run over several lines.
//   ○ A wrong choice
//   → Feedback for the choice above it
//   ◉ The right choice
//   → Feedback for the right choice
//
// A fill-in question puts the answer in square brackets on its own line, with optional feedback after it:
//
//   Question text.
//   [ answer ]
//   → Feedback
const WRONG = "○ ";
const RIGHT = "◉ ";
const FEEDBACK = "→ ";
const FILL = /^\[\s*(.+?)\s*\]$/;
export function parseQuiz(source) {
    const questionLines = [];
    const choices = [];
    let fillAnswer;
    let fillFeedback;
    let lastChoice;
    for (const rawLine of source.split("\n")) {
        const line = rawLine.trim();
        if (line === "") {
            continue;
        }
        if (line.startsWith(WRONG) || line.startsWith(RIGHT)) {
            lastChoice = { text: line.slice(2).trim(), correct: line.startsWith(RIGHT) };
            choices.push(lastChoice);
            continue;
        }
        if (line.startsWith(FEEDBACK)) {
            const text = line.slice(FEEDBACK.length).trim();
            if (lastChoice !== undefined) {
                lastChoice.feedback = text;
            }
            else {
                fillFeedback = text;
            }
            continue;
        }
        const fillMatch = FILL.exec(line);
        if (fillMatch !== null && choices.length === 0) {
            fillAnswer = fillMatch[1];
            continue;
        }
        if (choices.length > 0 || fillAnswer !== undefined) {
            throw new Error(`Unexpected line in quiz: "${line}"`);
        }
        questionLines.push(line);
    }
    const question = questionLines.join(" ");
    if (question === "") {
        throw new Error("A quiz needs question text before its answers");
    }
    if (fillAnswer !== undefined) {
        const quiz = { kind: "fill", question, answer: fillAnswer };
        if (fillFeedback !== undefined) {
            quiz.feedback = fillFeedback;
        }
        return quiz;
    }
    if (choices.length < 2) {
        throw new Error("A choice quiz needs at least two choices");
    }
    const correctCount = choices.filter((choice) => choice.correct).length;
    if (correctCount !== 1) {
        throw new Error(`A choice quiz needs exactly one right answer, but this one has ${correctCount}`);
    }
    return { kind: "choice", question, choices };
}
