// The learner's progress, kept between runs of the runner: the last lesson they were on, and for each lesson, the quiz
// answers and whether a homework example has been revealed. The state is stored as one JSON file in the user's data
// folder, outside the repository, so it's never committed.
export function emptyState() {
    return { progress: {} };
}
function isObject(value) {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}
// Reads the saved state. A missing or damaged file gives an empty state, so the runner always starts. Only the parts
// the runner understands are kept.
export function parseState(text) {
    if (text === undefined) {
        return emptyState();
    }
    let raw;
    try {
        raw = JSON.parse(text);
    }
    catch {
        return emptyState();
    }
    if (!isObject(raw)) {
        return emptyState();
    }
    const state = emptyState();
    if (typeof raw["last"] === "string") {
        state.last = raw["last"];
    }
    const progress = raw["progress"];
    if (isObject(progress)) {
        for (const [id, value] of Object.entries(progress)) {
            if (isObject(value)) {
                state.progress[id] = value;
            }
        }
    }
    return state;
}
export function serialiseState(state) {
    return JSON.stringify(state, null, 2);
}
