# Teaching and extending the course

## Audience and pacing

The course suits developers who know some programming or HTML but are new to modern JavaScript. New programmers should spend additional time on the early exercises. Lesson estimates describe an initial pass, not mastery; project integration and review can take several sessions.

Use fundamentals in order, complete the three guided projects, then select supplemental lessons according to team needs. For a browser-focused cohort, pair early language lessons with the HTML chapter: strings with textContent, conditions with hide/show, arrays with dynamic rows, objects with table records, and closures with event listeners. Do not require every Node supplemental lesson before building forms.

## Self-teaching contract

Each lesson supplies a goal, explanation, prediction task, executable example, exercise, worked reasoning, and completion checkpoint. Learners should keep a short learning log with their prediction, observed result, and one explanation in their own words. Solutions are learning aids, not a scoring key; review boundary cases as well as the nominal output.

## Lecture augmentation

Edit the local lecture.md alongside a lesson. Add diagrams, slide links, examples drawn from approved work, and discussion questions. The runner reads saved files when a lesson is selected again. Content or source changes are picked up on reselection; adding a new lesson requires restarting the runner.

A useful session is: predict individually, run once, explain in pairs, live-code one extension, compare vanilla and familiar jQuery idioms, then review one failure case. Lecture material should deepen the self-contained lesson instead of containing the only explanation required to complete it.

## Author a lesson

Create a new numbered folder under a chapter with:

```text
lesson.json
lesson.md
main.js
solution.md
lecture.md
```

Browser lessons also include index.html and style.css. Use the HTML script tag `<script type="module" src="./main.js"></script>` and stylesheet `<link rel="stylesheet" href="./style.css">`; the runner substitutes the current editor contents for these exact tags in its preview. Keep inline scripts out of lesson HTML so code stays visible in the JavaScript source file.

The metadata must include title and runtime (node or browser). Add minutes, objective, expected, optional input text for automated Node execution, and verify (an array of output fragments) for regression checks. Set prerequisites when they matter. The folder location supplies ordering and grouping. Navigation discovers lesson.json; helper scripts are not accidentally treated as lessons.

Support files are readable in Source. JavaScript support modules are editable in Node lessons and are copied into the execution workspace. The browser preview bundles index.html, style.css, and main.js only; use standalone mode for browser module graphs, assets, or network integration. Keep examples deterministic and offline unless network setup is the point of the lesson.

Run npm test and npm run check after changes. Verify browser interactions manually or with an approved browser test harness. Update the curriculum index and crosswalk when adding topics.

When a lesson introduces a newer standard or preferred API, always point out the older or still-common form as well. Give learners the practical distinction and a reason for choosing the newer form. This prepares them for existing code without turning the lesson into a history lecture.

## Future jQuery course

Preserve the same HTML fixtures and behavioral acceptance criteria so learners can implement familiar features again using jQuery. Compare behavior and return types, not just character counts. Cover core APIs before plugins; verify the actual library version used by the target DataBank application. Potential follow-on modules include Deferred/jqXHR semantics, event namespaces, plugin design, jQuery UI, DataTables, and application-specific integration. This repository does not implement that separate course.
