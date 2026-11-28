# Quick start

Let’s get the runner open before discussing all the things it can do. There are only a few packages to install for Markdown and math rendering, which is still fewer opportunities for the setup instructions to become a separate hobby than most JavaScript projects manage.

## Quick setup with the script

### What gets installed

By default, the setup installs:

* Git
* PowerShell 7
* Node.js 24 or newer
* Microsoft Visual C++ runtime
* VS Code
* Notepad++

The C++ Build Tools aren't installed up front. The script installs them only if Electron's binary can't download.

The setup then runs these steps: npm packages; Course tests; Curriculum check. At the end it opens the repository in VS Code and starts the lesson runner window (Electron).

### Getting started

There are three methods available to set up this tutorial. They are currently Windows-only.

#### Full Automation (if you don't have Git currently set up)

This process will install Git and copy the repository to a subfolder of `C:\Development\training` and install all necessary software and extensions for the tutorial's lesson runner.

1. Obtain the tutorial's GitHub slug name, which is `training-javascript`
2. Open PowerShell using "Run as Administrator"
3. Run the script below

```pwsh
# Obtain the load tutorial script
irm https://raw.githubusercontent.com/databankimx/training-shared-template/main/load-tutorial.ps1 -OutFile "$env:TEMP\load-tutorial.ps1"

# Perform automated setup
powershell -NoProfile -ExecutionPolicy Bypass -File "$env:TEMP\load-tutorial.ps1" -RepoUrl https://github.com/databankimx/training-javascript.git
```

#### Automated Setup from Local Repo (assumes you already have Git installed and set up)

In this process, you pull the existing repository and then run its setup script, which installs all necessary software and extensions for the tutorial's lesson runner.

1. Obtain the tutorial's GitHub slug name, which is `training-javascript`
2. Open PowerShell using "Run as Administrator"
3. If you will use the default base directory `C:\Development\training`, run the following:

```pwsh
# Create the base folder if it doesn't exist yet
New-Item -ItemType Directory -Force -Path C:\Development\training | Out-Null
```

4. Clone the repository. If you're using a different base directory, replace `C:\Development\training` with your path:

```pwsh
# Go there and clone the tutorial
cd C:\Development\training
git clone https://github.com/databankimx/training-javascript.git
cd training-javascript
```

5. If desired, edit the setup configuration, which determines what software is installed automatically (see "Change what gets installed" below)

```pwsh
# Optional: edit setup.json before installations
notepad setup.json
```

6. Save the configuration if you edited it, then run the setup script

##### If using the default base path, run this:

```pwsh
# Run the setup
powershell -NoProfile -ExecutionPolicy Bypass -File .\setup.ps1
```

##### If using a different base path, replace `<BASE_DIR>` with your path and run this:

```pwsh
# Run the setup
powershell -NoProfile -ExecutionPolicy Bypass -File .\setup.ps1 -BaseDirectory <BASE_DIR>
```

#### Manual Setup from Local Repo

If you want to do everything manually, you can pull the repository and set up software on your own.

1. Obtain the tutorial's GitHub slug name, which is `training-javascript`
2. Run the script below

```pwsh
git clone https://github.com/databankimx/training-javascript.git
```

3. Review README.md and QUICKSTART.md in the repository for instructions for manual setup.

### Switches and notes

* `-SkipInstall` checks what's installed and installs nothing.
* `-NoLaunch` runs the setup but doesn't open VS Code or start the runner.
* `-SkipTests` skips the course tests, which the setup runs by default.
* Installing uses winget. If winget isn't available, install **App Installer** from the Microsoft Store first. Company policy can block installs, in which case the script stops and you'll need IT.
* If an install needs administrator rights, the script stops before installing anything and asks you to run it again from an Administrator PowerShell window.

### Change what gets installed

The settings are in `setup.json`, in the repository folder. Open it in any text editor:

* Set an install's `"install"` to `true` to include it, or `false` to skip it.
* `"pinned"` sets the version. `"extensions"` lists the VS Code extensions to add.
* Save the file, then run `setup.ps1` again. It skips what's already installed.

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
