import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
const PART_FOLDER = /^part-[ivx]+-/;
const CHAPTER_FOLDER = /^ch\d{2}-/;
const STEP_FOLDER = /^\d{2}-/;
const HOMEWORK_STEP = /-homework$/;
function requireString(obj, key, source) {
    const value = obj[key];
    if (typeof value !== "string" || value.trim() === "") {
        throw new Error(`${source}: "${key}" must be a non-empty string`);
    }
    return value;
}
function optionalStrings(obj, key, source) {
    const value = obj[key];
    if (value === undefined) {
        return [];
    }
    if (!Array.isArray(value) || !value.every((item) => typeof item === "string")) {
        throw new Error(`${source}: "${key}" must be an array of strings`);
    }
    return value;
}
// Checks a parsed lesson.json and returns it in a typed form. Any problem names the file and the field.
export function parseLessonMeta(raw, source) {
    if (typeof raw !== "object" || raw === null || Array.isArray(raw)) {
        throw new Error(`${source}: expected a JSON object`);
    }
    const obj = raw;
    const runtime = requireString(obj, "runtime", source);
    if (runtime !== "node" && runtime !== "browser") {
        throw new Error(`${source}: "runtime" must be "node" or "browser", not "${runtime}"`);
    }
    const minutes = obj["minutes"];
    if (typeof minutes !== "number" || !Number.isFinite(minutes) || minutes <= 0) {
        throw new Error(`${source}: "minutes" must be a positive number`);
    }
    const objective = obj["objective"] ?? obj["subtitle"] ?? "";
    if (typeof objective !== "string") {
        throw new Error(`${source}: "objective" or "subtitle" must be a string when provided`);
    }
    const expected = obj["expected"];
    if (expected !== undefined && typeof expected !== "string") {
        throw new Error(`${source}: "expected" must be a string when it's given`);
    }
    const visualizerAlgorithm = obj["visualizerAlgorithm"];
    if (visualizerAlgorithm !== undefined && typeof visualizerAlgorithm !== "string") {
        throw new Error(`${source}: "visualizerAlgorithm" must be a string when provided`);
    }
    const meta = {
        title: requireString(obj, "title", source),
        runtime,
        minutes,
        objective,
        prerequisites: optionalStrings(obj, "prerequisites", source),
        verify: optionalStrings(obj, "verify", source),
    };
    if (expected !== undefined) {
        meta.expected = expected;
    }
    if (visualizerAlgorithm !== undefined) {
        meta.visualizerAlgorithm = visualizerAlgorithm;
    }
    return meta;
}
// Words that keep their own capitals in titles, wherever they appear.
const SPECIAL_WORDS = {
    api: "API",
    dom: "DOM",
    html: "HTML",
    http: "HTTP",
    javascript: "JavaScript",
    json: "JSON",
    xss: "XSS",
};
function titleWord(word) {
    return SPECIAL_WORDS[word] ?? word.charAt(0).toUpperCase() + word.slice(1);
}
// Turns a part folder into a title: part-i-foundations becomes "Part I - Foundations".
export function partTitle(folder) {
    const match = /^part-([ivx]+)-(.*)$/.exec(folder);
    if (match === null) {
        return folder;
    }
    const words = match[2].split("-").filter((word) => word !== "");
    return `Part ${match[1].toUpperCase()} - ${words.map(titleWord).join(" ")}`;
}
// Turns a chapter folder into a short name, as the window shows it: ch01-getting-started becomes "Ch01 - Getting started".
export function chapterTitle(folder) {
    const match = /^ch(\d{2})-(.*)$/.exec(folder);
    if (match === null) {
        return folder;
    }
    const words = match[2].split("-").map((word, index) => (index === 0 ? titleWord(word) : (SPECIAL_WORDS[word] ?? word)));
    return `Ch${match[1]} - ${words.join(" ")}`;
}
function isMissingFile(err) {
    return typeof err === "object" && err !== null && "code" in err && err.code === "ENOENT";
}
async function listFolders(path, pattern) {
    return (await readdir(path, { withFileTypes: true }))
        .filter((entry) => entry.isDirectory() && pattern.test(entry.name))
        .map((entry) => entry.name)
        .sort();
}
// Reads one lesson folder. Returns undefined when the folder has no lesson.json.
async function readLesson(stepPath, chapterName, step, homework) {
    const metaPath = join(stepPath, "lesson.json");
    const source = `${chapterName}/${step}/lesson.json`;
    let text;
    try {
        text = await readFile(metaPath, "utf8");
    }
    catch (err) {
        if (isMissingFile(err)) {
            return undefined;
        }
        throw err;
    }
    let raw;
    try {
        raw = JSON.parse(text);
    }
    catch (err) {
        const reason = err instanceof Error ? err.message : String(err);
        throw new Error(`${source}: not valid JSON (${reason})`);
    }
    try {
        return {
            chapter: chapterName,
            step,
            path: stepPath,
            homework,
            meta: parseLessonMeta(raw, source),
        };
    } catch (err) {
        // Skip lessons with unsupported runtimes or other metadata errors
        if (err instanceof Error && err.message.includes("runtime")) {
            return undefined;
        }
        throw err;
    }
}
// Reads one chapter's steps in order. A homework step is a folder whose name ends in -homework; its exercises are the
// lesson folders inside it. Regular steps come first, then the homework.
async function loadChapter(chapterPath, chapterName) {
    const regular = [];
    const homework = [];
    for (const stepName of await listFolders(chapterPath, STEP_FOLDER)) {
        const stepPath = join(chapterPath, stepName);
        if (HOMEWORK_STEP.test(stepName)) {
            for (const exerciseName of await listFolders(stepPath, STEP_FOLDER)) {
                const lesson = await readLesson(join(stepPath, exerciseName), chapterName, `${stepName}/${exerciseName}`, true);
                if (lesson !== undefined) {
                    homework.push(lesson);
                }
            }
            continue;
        }
        const lesson = await readLesson(stepPath, chapterName, stepName, false);
        if (lesson !== undefined) {
            regular.push(lesson);
        }
    }
    return [...regular, ...homework];
}
// Reads every part under root, in folder-name order. A part with no chapters that have lessons is left out.
export async function loadParts(root) {
    const parts = [];
    for (const partFolder of await listFolders(root, PART_FOLDER)) {
        const partPath = join(root, partFolder);
        const chapters = [];
        for (const chapterName of await listFolders(partPath, CHAPTER_FOLDER)) {
            const chapterPath = join(partPath, chapterName);
            const lessons = await loadChapter(chapterPath, chapterName);
            if (lessons.length > 0) {
                chapters.push({ name: chapterName, path: chapterPath, lessons });
            }
        }
        if (chapters.length > 0) {
            parts.push({ folder: partFolder, title: partTitle(partFolder), chapters });
        }
    }
    return parts;
}
// Every chapter in every part, in course order.
export async function loadCatalog(root) {
    return (await loadParts(root)).flatMap((part) => part.chapters);
}
