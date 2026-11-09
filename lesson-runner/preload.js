"use strict";
// The preload script. A sandboxed preload runs as plain JavaScript, so this file has no import or export statements.
// It exposes a small, fixed set of functions to the window, and nothing else from Node or Electron.
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("runner", {
    listParts: () => electron.ipcRenderer.invoke("catalog:list"),
    refreshParts: () => electron.ipcRenderer.invoke("catalog:refresh"),
    openLesson: (id) => electron.ipcRenderer.invoke("lesson:open", id),
    openChapter: (name) => electron.ipcRenderer.invoke("chapter:open", name),
    highlight: (code, label) => electron.ipcRenderer.invoke("code:highlight", code, label),
    solution: (id) => electron.ipcRenderer.invoke("lesson:solution", id),
    run: (id, files) => electron.ipcRenderer.invoke("run:start", id, files),
    sendInput: (text) => electron.ipcRenderer.invoke("run:input", text),
    stopRun: () => electron.ipcRenderer.invoke("run:stop"),
    check: (id, files) => electron.ipcRenderer.invoke("check:run", id, files),
    codeFile: (id, name) => electron.ipcRenderer.invoke("lesson:file", id, name),
    popOutLesson: (id) => electron.ipcRenderer.invoke("lesson:popout", id),
    syncPopout: (id) => electron.ipcRenderer.invoke("popout:sync", id),
    redock: () => electron.ipcRenderer.invoke("popout:redock"),
    popoutState: () => electron.ipcRenderer.invoke("popout:state"),
    closePage: () => electron.ipcRenderer.invoke("page:close"),
    showVisualization: (id) => electron.ipcRenderer.invoke("visualization:show", id),
    getState: () => electron.ipcRenderer.invoke("state:get"),
    saveProgress: (id, progress) => electron.ipcRenderer.invoke("state:saveProgress", id, progress),
    saveLast: (id) => electron.ipcRenderer.invoke("state:saveLast", id),
    resetProgress: () => electron.ipcRenderer.invoke("state:reset"),
    onProgressReset: (callback) => {
        electron.ipcRenderer.on("progress:reset", () => callback());
    },
    onRunEvent: (callback) => {
        electron.ipcRenderer.on("run:event", (_event, value) => callback(value));
    },
    onPopoutState: (callback) => {
        electron.ipcRenderer.on("popout:state", (_event, state) => callback(state));
    },
    onShowLesson: (callback) => {
        electron.ipcRenderer.on("lesson:show", (_event, id) => callback(id));
    },
});
