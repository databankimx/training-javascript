# DataBank IMX  -  JavaScript Developer Training

A self-teaching repository for developers learning modern JavaScript, with optional lecture support. All executable examples and the lesson runner use vanilla JavaScript. jQuery comparisons help DataBank developers connect familiar code to language and browser fundamentals; jQuery is not a runtime dependency. A separate jQuery course is planned.

We’ll start with the language, then make it do useful things in HTML: show a section, validate an amount, add a coding row, and keep the totals honest. If a convenient shortcut produces a less convenient surprise, we’ll stop and explain it. The aim is to understand the code well enough to change it, rather than persuade it to run once and quietly move on.

## Start here

Install Node.js 24 or later and a current browser. From this directory:

```powershell
node --version
npm start
```

Open the complete local URL printed in the terminal, including its session token. The default port is 4173. The runner uses a few small npm packages for Markdown and math rendering; install them once with `npm install`. No Python, build tool, account, or internet connection is needed after that. See [QUICKSTART.md](QUICKSTART.md) for details.

## Learning workflow

1. Expand a part and chapter, select a step from the STEPS pane, and read the goal and explanation. Predict the example output before running it.
2. Run the example. Browser lessons show a live HTML preview; Node lessons show terminal output and accept input.
3. Change the source and explain why the result changes. Browser lessons expose index.html, style.css, and main.js; Node support modules are editable too.
4. Attempt Try it yourself before opening Solution. Test a normal case and an edge case.
5. Mark complete only when you can explain the behavior. Instructor lecture notes live in the repository for course preparation but are deliberately absent from the student-facing runner.

The editor saves drafts in this browser's storage for this local origin. Reset restores the selected source file. Download saves the current file. Browser data is not a substitute for version control: export important edits before clearing storage or changing browsers or ports. The runner does not overwrite original lesson files.

## Curriculum

There are 96 lesson packages, each with notes, runnable source, a worked exercise explanation, and optional lecture notes. This is an initial curriculum with deliberately small examples and substantial extension exercises, rather than a line-for-line port of every Python lesson.

| Track | Coverage |
|---|---|
| Part I  -  Fundamentals (60) | Values, strings, numbers, arrays, collections, conditions, input, functions, modules, classes, files, tests, promises, HTTP, DOM readiness, selection, delegation, and practical HTML interaction |
| Part II  -  Guided projects (9 stages) | Canvas game, data visualization, and Learning Log; independently runnable stages with extension exercises |
| Part III  -  Beyond the Book (27) | CLI, recursion, regex, complexity, bitwise flags, records, formatting, closures, states, extraction, arrow functions, SQL, packaging, numeric/tabular methods, documents, tries, browser forms, games, codecs, built-ins, HTTP, generators, composition |

The HTML chapter covers script integration, hide/show, accordions, conditional controls, validation, dynamic tables, sorting/filtering, templates, dialogs, and an invoice coding form. It draws on patterns inspected in EForms.TrainingNavigator/wwwroot while remaining independent of OnBase, jQuery, jQuery UI, Bootstrap, and Vue.

See [the Python topic crosswalk](resources/python-topic-crosswalk.md), [the jQuery comparison guide](resources/jquery-comparisons.md), [the teaching guide](resources/teaching-guide.md), and [the writing-style guide](resources/writing-style.md).

## Textbook and references

The recommended companion is [Eloquent JavaScript, 4th edition](https://eloquentjavascript.net/). This repository follows its own sequence so it can parallel training-python and emphasize DataBank's HTML form work. The lessons are original material, not copied textbook chapters or exercise answers.

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)  -  language explanations.
- [MDN DOM documentation](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)  -  browser APIs.
- [Node.js 24 documentation](https://nodejs.org/docs/latest-v24.x/api/)  -  Node APIs.
- [jQuery API](https://api.jquery.com/)  -  comparison reference. Confirm the version used by your application; older DataBank forms may have different library or plugin behavior.

## Verification

```powershell
npm test
npm run check
```

The tests exercise discovery, local API access controls, scratch execution, interactive input, errors, cancellation, and path boundaries. The curriculum check parses every JavaScript file and executes every Node example in a disposable directory. Expected-output fragments supplement process exit checks for selected examples. Browser interactions require browser QA; see [VALIDATION.md](VALIDATION.md) for the initial run.

The GitHub workflow runs these checks on Windows and Linux. It has not been run on a remote CI service. Enterprise policy/security scanning is not configured here; use the organization's required workflows before any client delivery.

## Runner design and limits

The runner is a Node HTTP server bound to 127.0.0.1, with a dependency-free browser interface. Node examples execute in child processes from copies under .training-work; output is capped and runs stop after 60 seconds. Only one Node run is active at a time. Stop, lesson navigation, and Ctrl+C stop the active example. Browser previews run in an opaque-origin iframe with script, form, dialog, and download support. They cannot use localStorage or make same-origin calls to the runner API. These examples do not spawn descendant processes; process-tree management for arbitrary learner programs is outside this runner's scope.

Node execution uses your account and is **not an operating-system sandbox**. Run trusted lesson code. The runner does not need elevated privileges and is intended for one local learner, not network hosting or multi-user deployment. Its Markdown renderer supports headings, paragraphs, bullets, fenced code, simple emphasis, and HTTP links; it escapes raw HTML. It does not include mathematical typesetting, a debugger, full editor completion, or the Python runner's full desktop feature set.

External MySQL/MongoDB services and scientific libraries are not prerequisites. SQLite demonstrates SQL; document queries and numeric/tabular examples are local concept labs. They are explicitly not replacements for MongoDB, NumPy, pandas, or SciPy. Follow-on integrations need their own drivers, setup, licensing review, and tests.

## License and responsibilities

Provided under the [MIT License](LICENSE). See [Development Rules of Engagement](development-rules-of-engagement.md) for DataBank custom-code responsibilities. That shared policy is retained unchanged from training-python. This repository is training/reference material and carries no warranty or support commitment. Runtime dependencies are listed in `package.json` and installed with `npm install`.
