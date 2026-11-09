# Quick start

Let’s get the runner open before discussing all the things it can do. There are only a few packages to install for Markdown and math rendering, which is still fewer opportunities for the setup instructions to become a separate hobby than most JavaScript projects manage.

## Quick setup with the script

`setup.ps1` checks for Git and Node.js, clones the repository if you don't have it yet, installs the npm packages exactly as recorded in `package-lock.json`, and runs the course checks. It's safe to run more than once.

Open **PowerShell as Administrator**, go to the folder where you saved `setup.ps1`, and run:

```pwsh
powershell -ExecutionPolicy Bypass -File .\setup.ps1
```

The `-ExecutionPolicy Bypass` part lets this one script run. It doesn't change any setting on your machine.

By default, the script:

- installs **Git**, **Node.js LTS**, and **VS Code** with winget, if they're missing
- clones the repository into `C:\Development\training\training-javascript`, if the script isn't already inside it, and continues from the clone
- checks that Node.js is version 24 or later
- runs `npm ci`, and then the course's tests and curriculum check

An Administrator window is needed, because the script installs by default. To check only, without installing anything, run `powershell -ExecutionPolicy Bypass -File .\setup.ps1 -InstallMissing:$false`. It stops and shows what's missing, and the command to fix it. Winget must be available. If it isn't, install **App Installer** from the Microsoft Store first. Company policy can block installs, in which case the script says so, and you'll need IT.

When the script finishes, it prints a summary and the command to start the runner. **Check:** every line of the summary says `ok`.

## Requirements

Node.js 24 or later, a current Edge/Chrome/Firefox browser, and VS Code. The setup script installs VS Code if it's missing. Check `node --version` in a new terminal after installing Node. This repository uses ES modules.

If you installed Node.js yourself, instead of using the script, install the dependencies once:

```powershell
npm install
```

## Launch the Electron app (recommended)

```powershell
cd C:\Development\training\training-javascript
npm start
```

The Electron app window opens automatically with the first lesson loaded. The app reads your progress from disk and restores the last lesson you opened on the next run. Close the window normally to stop.

## Alternative: Launch the web-based runner

If you prefer a browser-based interface, use the web training runner instead:

```powershell
.\start-training-web.ps1
```

This starts the web server in the background, automatically opens it in your default browser, and prints the runner PID. The URL includes a security token.

To stop the web server:

```powershell
.\stop-training-web.ps1
```

Startup and error output is written to `%TEMP%\javascript-training-<PID>.out.log` and `.err.log`.

## Background execution (Electron app only)

To run the Electron app in the background without a visible window:

```powershell
.\start-training.ps1
```

To stop it:

```powershell
.\stop-training.ps1
```

Progress is automatically saved to disk in `~\.config\training-javascript\progress.json` (Windows path varies by OS).

If you want to reset your progress, delete the progress.json file:

```powershell
Remove-Item $env:APPDATA\..\Local\training-javascript\progress.json -ErrorAction SilentlyContinue
```


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

For a browser lesson, open its `index.html` in a regular local development server. It already links `style.css` and `main.js`. A simple server is included:

```powershell
node scripts/serve-browser-lesson.js part-iii-working-with-html/ch18-dynamic-forms/01-dynamic-table
```

Open the printed loopback URL. This serves the on-disk source, not browser-editor drafts; use Download and save your chosen files before moving between modes. Ctrl+C stops this server. Standalone mode has a normal origin and is useful for DevTools or storage experiments. The built-in iframe intentionally has an opaque origin.

## Troubleshooting

- Setup says Node.js is too old: install the current LTS release from [nodejs.org](https://nodejs.org), open a new terminal, and run the script again. The course needs Node.js 24 or later.
- Setup says `npm ci` failed: check your network access to the npm registry, then run the script again. Don't delete `package-lock.json` to get past the error.
- Setup says the repository has no `setup.ps1` yet: the clone is from a version of the repository without the script. The setup carries on with the clone's files, so the summary is still valid. Pull the latest repository to get the script itself.
- Setup says the tests or the curriculum check failed: the message names the failing check. Report it with the full output, since it means the course's own files need attention.
- Forbidden: use the exact 127.0.0.1 URL and current token; localhost is a different host.
- Source errors: read the first error referring to your source. Reset the edited file if you need the original.
- A program waits: it may be asking for input. Use Send, Stop, or the 60-second timeout.
- Missing document in a Node lesson: document is a browser API. Use the appropriate host.
- SQLite experimental warning: some Node 24 versions label node:sqlite experimental. The local example may still run normally.
- Browser state disappears: storage is specific to browser/profile/origin, and private browsing may discard it. Download important edits.
- HTML changes are invisible: the runner injects code before the closing body tag. Retain a complete head/body structure. External assets and multi-file browser imports are not bundled by the runner; use standalone mode for those extensions.
- The browser opens but the runner is stale: stop the background process with `.\stop-training.ps1`, then start it again. If the stop script cannot find its PID file, inspect the launcher log files under `%TEMP%` and check port 4173 with `netstat`.

## Reset local progress

The runner stores progress, drafts, and the last location in browser storage for the local origin. A new token does not clear it. For instructor or test resets, press Ctrl+Alt+Shift+Backspace. A small toast reports `progress reset`, and revealed homework spoilers are reset as well.
