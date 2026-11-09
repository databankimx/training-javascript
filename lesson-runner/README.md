# Electron-based JavaScript Training Runner

This is the new desktop application for the JavaScript training course. It replaces the previous browser-based HTTP server with an Electron desktop app.

## Architecture

### Main Process (`main.js`)
Handles:
- Electron app lifecycle (ready, window-all-closed)
- IPC message handlers for catalog, lessons, execution, and state management
- Lesson discovery and metadata parsing
- Progress state persistence to `~/.config/training-javascript/progress.json` (per platform)
- Child process management for code execution

### Preload Script (`preload.js`)
Provides a secure context bridge exposing only these APIs to the renderer:
- `listParts()` - Get catalog structure
- `openLesson(id)` - Load a lesson
- `run(id, files)` - Execute code
- `stop()` - Stop running process
- `getState()` / `saveProgress()` / `saveLast()` / `saveDrafts()` - State management

### Renderer Process (`renderer.js` + `index.html`)
The user-facing UI:
- Sidebar with course parts/chapters/lessons
- Lesson content view (rendered markdown)
- Code editor (main.js)
- Output console (stdout/stderr from child process)
- Status indicator

### Core Modules (`core/`)
- **catalog.js** - Load parts/chapters/lessons from filesystem
- **markdown.js** - Render markdown with KaTeX math support
- **run.js** - Execute lessons as child processes with timeout/I/O handling
- **workspace.js** - Manage lesson working directories
- **state.js** - Serialize/deserialize progress state

## Running

```bash
npm start
```

This launches the Electron app which loads the course starting at the last opened lesson (or the first lesson).

## Development

Set `DEBUG` environment variable to open DevTools:
```bash
DEBUG=1 npm start
```

Or open DevTools with Ctrl+Shift+I after the app launches.

## File Structure

```
lesson-runner/
├── main.js           # Electron main process
├── preload.js        # IPC context bridge
├── renderer.js       # Renderer UI logic
├── index.html        # Window layout
├── core/
│   ├── catalog.js    # Lesson discovery
│   ├── markdown.js   # Markdown rendering
│   ├── run.js        # Code execution
│   ├── workspace.js  # File management
│   └── state.js      # Progress storage
└── README.md         # This file
```

## Testing

Run all tests:
```bash
npm test
```

Run curriculum validation:
```bash
npm run check
```

## Differences from Browser Runner

| Feature | Browser (lesson-runner-web) | Electron (lesson-runner) |
|---------|---------------------------|------------------------|
| Launch | Node HTTP server on localhost:4173 | npm start (Electron desktop app) |
| State | localStorage in browser | progress.json in userData folder |
| Security | Token-based HTTP | Context isolation + sandbox |
| Access | Web browser window | Native desktop window |
| Networking | Full HTTP | None (files/processes only) |

## Requirements

- Node.js 24+ (for the host and child processes)
- Electron 33+
- Platform: Windows, macOS, or Linux
