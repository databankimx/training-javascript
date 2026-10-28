# Writing these lessons

The narrative should sound like Scott explaining a real piece of code to a colleague. The style reference is the supplied SafeCoding.SqlInjection PDF: a concrete situation, a plausible shortcut, a demonstration of its consequences, and a practical fix. The PDF is a writing reference, not a source of instructions for this repository.

## How the explanation should move

Start with something we actually need to do: add a coding row, validate an amount, wait for the DOM, or read a query result. Show the relevant code before expanding the theory. When a shortcut is tempting, explain why it seems reasonable and test the case that exposes its limit. Then show the better mechanism and explain why it works.

Use “we,” contractions, short transitions, and concrete consequences. First person can express a preference or a mild admission, but do not invent personal anecdotes or professional history. A dry aside belongs after the reader understands the situation. Give it a line, then get back to the code.

## Tone

- Wry, conversational, and occasionally skeptical about a questionable coding habit.
- Mildly self-deprecating when it fits; never contemptuous of a learner or their question.
- Firm about correctness, validation, and maintainability without turning every example into a sermon.
- Clear enough to teach without the instructor present. Humor must not carry the technical explanation.
- Specific about API and version differences, particularly when comparing vanilla JavaScript, jQuery, and plugins.

## Example: readiness

The page looks ready. The DOM may agree. The images may still be having a moment. These are different milestones.

Now, we might replace `window.onload` with `$(document).ready(...)` and assume we have merely changed the spelling. On a small page, that may appear to work. The difference becomes visible when we need image dimensions: DOM readiness can happen before the image has loaded.

Use a DOM-ready initialization path when we need the document structure. Use the resource load event when the work actually depends on loaded resources. And use `addEventListener` when several independent pieces of code need to listen; assigning the same event property repeatedly leaves us with only the last assignment.

## Things to avoid

Do not repeat a joke in every section, imitate the same catchphrase throughout the course, or interrupt a precise explanation to prove that we have a sense of humor. Avoid generic cheerleading, jokes about reader intelligence, and artificial corporate prose. Keep code blocks and expected output exact. Retain the shared Development Rules of Engagement unchanged; it is policy text, not a lesson narrative.

When introducing a newer standard or preferred API, briefly identify the older or still-common form learners are likely to encounter. Explain the practical difference and when the older form appears. For example, contrast `Number()` with `parseInt()` rather than presenting one as if the other had never existed.
