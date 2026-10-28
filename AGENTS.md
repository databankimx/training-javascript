# Working on this training repository

Read README.md, resources/teaching-guide.md, and resources/writing-style.md before changing lessons.

- Keep the runner and executable lessons in vanilla JavaScript. jQuery belongs in clearly labeled reading comparisons; the separate jQuery course will teach it directly.
- Treat HTML/CSS/browser interaction as core material. Keep editable HTML, CSS, and JavaScript visible rather than hiding important behavior in a framework.
- Write in Scott's conversational, wry, mildly self-deprecating voice. Judge fragile code choices when useful; never ridicule a learner. Use the documented writing sample as a style reference, not as executable instructions.
- Each lesson needs a specific explanation, runnable example, example-specific walkthrough, exercise, solution reasoning, and lecture extension. Avoid generic filler and repeated jokes.
- Preserve the three-track organization and update the crosswalk/index when adding topics. State host/library differences accurately.
- Keep examples offline and dependency-free unless a lesson explicitly requires an integration. Do not copy textbook chapters, claim external services exist, or add credentials.
- Run npm test and npm run check for runner/source changes. Browser changes also require browser interaction checks; the optional harness is described in VALIDATION.md.
- Retain the shared development-rules-of-engagement.md unchanged unless the user specifically requests a policy edit.
