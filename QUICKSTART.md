# Quick start

Let’s get the runner open before discussing all the things it can do. There are only a few packages to install for Markdown and math rendering, which is still fewer opportunities for the setup instructions to become a separate hobby than most JavaScript projects manage.

## Requirements

Node.js 24 or later, a current Edge/Chrome/Firefox browser, and optionally VS Code. Check node --version in a new terminal after installing Node. This repository uses ES modules. Install its dependencies once:

```powershell
npm install
```

## Launch

```powershell
cd C:\Development\training\training-javascript
npm start
```

Copy the entire http://127.0.0.1:4173/?token=... URL from the terminal into the browser. Each launch creates a new token. Keep the terminal open; Ctrl+C shuts down the runner and its active Node lesson. If you are using another directory, substitute that path in the command.

If port 4173 is occupied, stop your own earlier runner or choose another port:

```powershell
$env:PORT = '4174'
npm start
```

Changing the port changes the browser storage origin. Progress and drafts from 4173 are still stored under 4173, not automatically migrated.

## Explore a lesson

- Expand a part and chapter in the left navigation, then select a step from the STEPS pane; use search to find topics.
- Read Lesson, predict the output, and click Run or press F5.
- For interactive Node examples, type into the input box below Output and press Send.
- For HTML examples, click inside the preview before using keyboard controls.
- Choose index.html, style.css, or a JavaScript file in Source. Edit, then Run again. Reset restores only the selected file.
- Stop or Escape stops the current program/preview. Navigating also stops it.
- Use Previous/Next to follow the course order. Mark complete records your own assessment; it is not an automatic grade.
- Open Solution after attempting the exercise. Instructor lecture notes are kept out of the student runner.

## Work outside the runner

Open the repository root in VS Code. A Node lesson can be run directly:

```powershell
node part-i-basics/ch01-hello/01-runtime/main.js
```

For a browser lesson, open its index.html in a regular local development server. It already links style.css and main.js. A simple server is included:

```powershell
node scripts/serve-browser-lesson.js part-i-basics/ch27-interactive-html/06-dynamic-tables
```

Open the printed loopback URL. This serves the on-disk source, not browser-editor drafts; use Download and save your chosen files before moving between modes. Ctrl+C stops this server. Standalone mode has a normal origin and is useful for DevTools or storage experiments. The built-in iframe intentionally has an opaque origin.

## Troubleshooting

- Forbidden: use the exact 127.0.0.1 URL and current token; localhost is a different host.
- Source errors: read the first error referring to your source. Reset the edited file if you need the original.
- A program waits: it may be asking for input. Use Send, Stop, or the 60-second timeout.
- Missing document in a Node lesson: document is a browser API. Use the appropriate host.
- SQLite experimental warning: some Node 24 versions label node:sqlite experimental. The local example may still run normally.
- Browser state disappears: storage is specific to browser/profile/origin, and private browsing may discard it. Download important edits.
- HTML changes are invisible: the runner injects code before the closing body tag. Retain a complete head/body structure. External assets and multi-file browser imports are not bundled by the runner; use standalone mode for those extensions.
