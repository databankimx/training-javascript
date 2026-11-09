import HighlightJS from '/vendor/highlight/es/core.js';
import javascript from '/vendor/highlight/es/languages/javascript.js';
import xml from '/vendor/highlight/es/languages/xml.js';
import css from '/vendor/highlight/es/languages/css.js';
import json from '/vendor/highlight/es/languages/json.js';
import bash from '/vendor/highlight/es/languages/bash.js';
import c from '/vendor/highlight/es/languages/c.js';

HighlightJS.registerLanguage('javascript', javascript);
HighlightJS.registerLanguage('xml', xml);
HighlightJS.registerLanguage('css', css);
HighlightJS.registerLanguage('json', json);
HighlightJS.registerLanguage('bash', bash);
HighlightJS.registerLanguage('c', c);
const $ = id => document.getElementById(id);
const katexStyles = document.createElement('link');
katexStyles.rel = 'stylesheet';
katexStyles.href = '/katex.css';
document.head.append(katexStyles);
const token = new URLSearchParams(location.search).get('token');
const previousRunnerToken = sessionStorage.getItem('js-training-runner-token');
if (token && previousRunnerToken !== token) {
  // Browser lessons may use localStorage for demonstrations, but those demo
  // records belong to one runner session rather than the user's curriculum.
  ['training-xss-comments', 'training-xss-comments-fixed', 'xssDemoNotes_vulnerable', 'xssDemoNotes_fixed']
    .forEach(key => localStorage.removeItem(key));
  sessionStorage.setItem('js-training-runner-token', token);
}
const heartbeat = () => {
  if (!token) return;
  fetch(`/api/heartbeat?token=${encodeURIComponent(token)}`, { method: 'POST', keepalive: true }).catch(() => {});
};
heartbeat();
setInterval(heartbeat, 5000);
const api = async (url, data) => {
  const response = await fetch(url, { method: data === undefined ? 'GET' : 'POST', headers: { 'X-Runner-Token': token, 'Content-Type': 'application/json' }, body: data === undefined ? undefined : JSON.stringify(data) });
  const payload = await response.json();
  if (!response.ok) throw new Error(payload.error || 'Request failed');
  return payload;
};
const report = error => {
  $('status').textContent = error.message;
};
const guarded = fn => (...args) => Promise.resolve().then(() => fn(...args)).catch(report);
let catalog = [], current = null, selectedPart = null, selectedChapter = null, showHomework = false, tab = 'lesson', poll = null, generation = 0, busy = false;
let completed = new Set(), revealed = new Set(), drafts = {}, readingState = {}, viewedLessons = new Set(), theme = '';
const resumeCookie = 'js-training-last-lesson';
const getResumeLesson = () => {
  const entry = document.cookie.split('; ').find(value => value.startsWith(`${resumeCookie}=`));
  return entry ? decodeURIComponent(entry.split('=').slice(1).join('=')) : '';
};
const rememberResumeLesson = id => { document.cookie = `${resumeCookie}=${encodeURIComponent(id)}; max-age=31536000; path=/; SameSite=Lax`; };
try {
  completed = new Set(JSON.parse(localStorage.getItem('js-training-complete') || '[]'));
  revealed = new Set(JSON.parse(localStorage.getItem('js-training-revealed') || '[]'));
  drafts = JSON.parse(localStorage.getItem('js-training-drafts') || '{}');
  readingState = JSON.parse(localStorage.getItem('js-training-reading-state') || '{}');
  viewedLessons = new Set(JSON.parse(localStorage.getItem('js-training-viewed') || '[]'));
  theme = localStorage.getItem('js-training-theme');
}catch {
  
   /* Storage can be unavailable. */
}
const save = () => {
  try {
    localStorage.setItem('js-training-complete', JSON.stringify([...completed]));
    localStorage.setItem('js-training-revealed', JSON.stringify([...revealed]));
    localStorage.setItem('js-training-drafts', JSON.stringify(drafts));
    localStorage.setItem('js-training-reading-state', JSON.stringify(readingState));
    localStorage.setItem('js-training-viewed', JSON.stringify([...viewedLessons]));
  }catch {
    $('status').textContent = 'Browser storage full or unavailable; download edits to keep them.';
  }
};
const editsFor = () => typeof drafts[current.id] === 'string' ? {'main.js':drafts[current.id]} : drafts[current.id] || {};
const sourceFor = name => editsFor()[name] ?? current.contents[name];
const modifiedIndicator = () => {
  let indicator = $('modified');
  if (!indicator) {
    indicator = document.createElement('span');
    indicator.id = 'modified';
    indicator.textContent = 'Modified';
    indicator.hidden = true;
    $('filename').after(indicator);
  }
  return indicator;
};
function updateModified() {
  if (!current) return;
  const name = $('file').value;
  modifiedIndicator().hidden = sourceFor(name) === current.contents[name];
}
function languageForFile(name = '') {
  if (name.endsWith('.html')) return 'html';
  if (name.endsWith('.css')) return 'css';
  if (name.endsWith('.json')) return 'json';
  if (name.endsWith('.sh')) return 'bash';
  return 'javascript';
}
function highlightSource(source, language = 'javascript') {
  return HighlightJS.highlight(source, { language }).value;
}
function updateHighlight() {
  const source = $('source').value;
  $('highlight').querySelector('code').innerHTML = highlightSource(source, languageForFile($('file').value)) + '\n';
  $('line-numbers').textContent = Array.from({ length: Math.max(1, source.split('\n').length) }, (_, index) => index + 1).join('\n');
}
function addCopyButtons() {
  $('reading').querySelectorAll('pre > code').forEach(code => {
    const pre = code.parentElement;
    if (pre.querySelector('.copy-code')) return;
    const button = document.createElement('button');
    button.className = 'copy-code';
    button.type = 'button';
    button.setAttribute('aria-label', 'Copy code');
    button.title = 'Copy code';
    button.textContent = '⧉';
    button.onclick = async () => {
      try {
        await navigator.clipboard.writeText(code.textContent);
        button.textContent = '✓';
        button.setAttribute('aria-label', 'Code copied');
        setTimeout(() => {
          button.textContent = '⧉';
          button.setAttribute('aria-label', 'Copy code');
        }, 1200);
      } catch {
        $('status').textContent = 'Copy unavailable; select the code manually.';
      }
    };
    pre.append(button);
  });
}
function paneButton(label, glyph, action) {
  const button = document.createElement('button');
  button.className = 'glyph-button';
  button.type = 'button';
  button.textContent = glyph;
  button.title = label;
  button.setAttribute('aria-label', label);
  button.onclick = action;
  return button;
}
async function copyPaneText(text, button) {
  try {
    await navigator.clipboard.writeText(text);
    const original = button.textContent;
    button.textContent = '✓';
    setTimeout(() => { button.textContent = original; }, 1200);
  } catch {
    $('status').textContent = 'Copy unavailable; select the text manually.';
  }
}
function installPaneActions() {
  const tablist = document.querySelector('[role="tablist"]');
  if (!tablist.querySelector('.pane-copy-lesson')) {
    const button = paneButton('Copy lesson Markdown', '⧉', () => {
      const filename = tab === 'solution' ? 'solution.md' : 'lesson.md';
      copyPaneText(current?.contents?.[filename] || '', button);
    });
    button.classList.add('pane-copy-lesson');
    tablist.append(button);
  }
  const editorbar = document.querySelector('.editorbar');
  if (!editorbar.querySelector('.pane-copy-source')) {
    const button = paneButton('Copy source', '⧉', () => copyPaneText($('source').value, button));
    button.classList.add('pane-copy-source');
    editorbar.append(button);
  }
  const label = $('console-label');
  if (!label.querySelector('.pane-actions')) {
    const actions = document.createElement('span');
    actions.className = 'pane-actions';
    const copy = paneButton('Copy console output', '⧉', () => copyPaneText($('output').textContent, copy));
    const clear = paneButton('Clear console output', '⌫', () => { $('output').textContent = ''; });
    actions.append(copy, clear);
    label.append(actions);
  }
}
function colorTruthTables() {
  $('reading').querySelectorAll('table').forEach(table => {
    const headers = [...table.querySelectorAll('thead th')].map(cell => cell.textContent.trim());
    const operatorIndex = headers.findIndex(header => ['&&', '||', '!p', 'XOR', 'xor'].includes(header));
    if (operatorIndex < 0) return;
    table.classList.add('truth-table');
    table.querySelectorAll('tbody tr').forEach(row => {
      const cell = row.children[operatorIndex];
      if (!cell) return;
      const value = cell.textContent.trim().toLowerCase();
      cell.classList.toggle('truth-true', value === 't' || value === 'true');
      cell.classList.toggle('truth-false', value === 'f' || value === 'false');
    });
  });
}
function makeSplitter(id, target, minimum, maximum, axis = 'vertical') {
  const grip = $(id);
  const element = $(target);
  const horizontal = axis === 'horizontal';
  const parent = grip.parentElement;
  const getMaximum = () => {
    if (horizontal) return maximum;
    const gripWidth = grip.getBoundingClientRect().width;
    const minimumSibling = 330;
    return Math.max(minimum, Math.min(maximum, parent.getBoundingClientRect().width - gripWidth - minimumSibling));
  };
  let start = 0;
  let size = 0;
  grip.addEventListener('pointerdown', event => {
    event.preventDefault();
    grip.setPointerCapture(event.pointerId);
    start = horizontal ? event.clientY : event.clientX;
    size = horizontal ? element.getBoundingClientRect().height : element.getBoundingClientRect().width;
    grip.classList.add('dragging');
  });
  grip.addEventListener('pointermove', event => {
    if (!grip.hasPointerCapture(event.pointerId)) return;
    const current = horizontal ? event.clientY : event.clientX;
    const next = Math.max(minimum, Math.min(getMaximum(), size + current - start));
    if (horizontal) {
      element.style.flex = `0 0 ${next}px`;
    } else {
      parent.style.gridTemplateColumns = `${next}px 8px minmax(330px, 1fr)`;
    }
  });
  const stopDragging = event => {
    if (!grip.hasPointerCapture(event.pointerId)) return;
    grip.releasePointerCapture(event.pointerId);
    grip.classList.remove('dragging');
  };
  grip.addEventListener('pointerup', stopDragging);
  grip.addEventListener('pointercancel', stopDragging);
  grip.addEventListener('keydown', event => {
    const keys = horizontal ? ['ArrowUp', 'ArrowDown'] : ['ArrowLeft', 'ArrowRight'];
    if (!keys.includes(event.key)) return;
    event.preventDefault();
    const positive = horizontal ? event.key === 'ArrowDown' : event.key === 'ArrowRight';
    const delta = positive ? 24 : -24;
    const current = horizontal ? element.getBoundingClientRect().height : element.getBoundingClientRect().width;
    const next = Math.max(minimum, Math.min(getMaximum(), current + delta));
    if (horizontal) {
      element.style.flex = `0 0 ${next}px`;
    } else {
      parent.style.gridTemplateColumns = `${next}px 8px minmax(330px, 1fr)`;
    }
  });
}
document.body.classList.toggle('light', theme === 'light');
const partNames = { 'part-i-basics': 'Part I · Fundamentals', 'part-ii-applied-javascript': 'Part II · Applied JavaScript', 'part-iii-working-with-html': 'Part III · Working with HTML', 'part-iv-advanced': 'Part IV · Advanced JavaScript', 'part-v-jquery': 'Part V · jQuery' };
const chapterNames = {
  'ch14-browser': 'CH14 · JavaScript in HTML',
  'ch15-forms': 'CH15 · JavaScript in Forms',
  'ch16-xss': 'CH16 · Cross-site scripting',
  'ch17-anti-bot-strategies': 'CH17 · Anti-bot strategies',
  'ch18-dynamic-forms': 'CH18 · Dynamic forms'
};
const chapterLabel = id => chapterNames[id] || id.replace(/^(ch|p|s)(\d+)-/, (_, prefix, number) => `${prefix.toUpperCase()}${number} · `).replaceAll('-', ' ');
const stepLabel = title => title.replace(/^(?:\d+|S\d+|Project\s+\d+(?:\.\d+)?)[\s·.-]+/i, '');
function renderSteps() {
  $('steps').replaceChildren();
  if (!selectedPart || !selectedChapter) return;
  const lessons = catalog.filter(item => item.chapter === selectedChapter && item.part === selectedPart);
  const regularLessons = showHomework ? lessons.filter(lesson => lesson.section) : lessons.filter(lesson => !lesson.section);
  for (const lesson of regularLessons) {
    const button = document.createElement('button');
    button.textContent = `${completed.has(lesson.id) ? '✓ ' : ''}${stepLabel(lesson.title)}`;
    button.classList.toggle('active', current?.id === lesson.id);
    if (current?.id === lesson.id) button.setAttribute('aria-current', 'step');
    button.onclick = guarded(() => select(lesson.id));
    $('steps').append(button);
  }
}
function navigation() {
  const query = $('search').value.toLowerCase();
  $('catalog').replaceChildren();
  for (const [part, title] of Object.entries(partNames)) {
    const group = document.createElement('details');
    group.open = selectedPart === part || Boolean(query);
    const summary = document.createElement('summary');
    summary.textContent = title;
    summary.addEventListener('click', () => {
      for (const other of $('catalog').querySelectorAll(':scope > details')) if (other !== group) other.open = false;
    });
    group.append(summary);
    const chapters = [...new Set(catalog.filter(item => item.part === part && `${item.title} ${item.chapter}`.toLowerCase().includes(query)).map(item => item.chapter))];
    for (const chapter of chapters) {
      const chapterGroup = document.createElement('details');
      chapterGroup.open = (selectedPart === part && selectedChapter === chapter) || Boolean(query);
      const chapterSummary = document.createElement('summary');
      chapterSummary.textContent = chapterLabel(chapter);
      chapterSummary.classList.toggle('active', selectedPart === part && selectedChapter === chapter && !showHomework);
      chapterSummary.addEventListener('click', () => {
        selectedPart = part;
        selectedChapter = chapter;
        showHomework = false;
        document.querySelectorAll('#catalog details details > summary').forEach(summary => summary.classList.toggle('active', summary === chapterSummary));
        navigation();
      });
      chapterGroup.append(chapterSummary);
      const homework = catalog.filter(item => item.part === part && item.chapter === chapter && item.section);
      if (homework.length) {
        const homeworkButton = document.createElement('button');
        homeworkButton.className = 'homework-link';
        homeworkButton.textContent = 'Homework';
        homeworkButton.classList.toggle('active', selectedPart === part && selectedChapter === chapter && showHomework);
        homeworkButton.onclick = guarded(() => {
          selectedPart = part;
          selectedChapter = chapter;
          showHomework = true;
          renderSteps();
          navigation();
        });
        chapterGroup.append(homeworkButton);
      }
      group.append(chapterGroup);
    }
    $('catalog').append(group);
  }
  renderSteps();
  $('progress').textContent = `${catalog.filter(l => completed.has(l.id)).length} / ${catalog.length} lessons complete`;
}
function reading() {
  const wasViewed = Boolean(current && viewedLessons.has(current.id));
  const blocked = Boolean(current?.spoiler && !revealed.has(current.id));
  $('reading').innerHTML = blocked && tab === 'solution'
    ? '<div class="spoiler-reading"><p>The worked solution is behind the spoiler gate. Try the assignment first, then use <strong>Show example (spoiler)</strong> beside the editor when you are ready.</p></div>'
    : current?.[tab === 'lesson' ? 'html' : 'solution'] || '<p>No material yet.</p>';
  $('reading').scrollTop = wasViewed ? Number(readingState[current.id]?.[tab] || 0) : 0;
  $('reading').querySelectorAll('code[class*="language-"]').forEach(code => {
    const language = [...code.classList].find(name => name.startsWith('language-'))?.slice('language-'.length) || 'javascript';
    if (['javascript', 'js', 'html', 'css', 'c'].includes(language)) code.innerHTML = highlightSource(code.textContent, language === 'js' ? 'javascript' : language);
  });
  addCopyButtons();
  colorTruthTables();
  if (current) viewedLessons.add(current.id);
  document.querySelectorAll('[data-tab]').forEach(button => button.setAttribute('aria-selected', String(button.dataset.tab === tab)));
}
function updateSpoiler() {
  const blocked = Boolean(current?.spoiler && !revealed.has(current.id));
  $('spoiler').hidden = !blocked;
  $('code-editor').hidden = blocked;
  $('runbar').hidden = blocked;
  $('lab-gripper').hidden = blocked;
  $('output').hidden = blocked;
  $('input-form').hidden = blocked;
  $('reset').disabled = blocked;
  $('download').disabled = blocked;
  reading();
}
function loadFile() {
  const name = $('file').value;
  $('source').value = sourceFor(name);
  $('source').readOnly = !name.endsWith('.js') && !(current.runtime === 'browser' && /\.(html|css)$/.test(name));
  updateHighlight();
  updateModified();
}
async function stop() {
  generation++;
  clearTimeout(poll);
  poll = null;
  await api('/api/stop', {});
  $('preview').removeAttribute('srcdoc');
  if ($('preview-dialog').open) $('preview-dialog').close();
  $('run').disabled = false;
  $('status').textContent = 'Stopped';
}
async function select(id) {
  if (current) {
    readingState[current.id] ||= {};
    readingState[current.id][tab] = $('reading').scrollTop;
    viewedLessons.add(current.id);
    save();
  }
  await stop();
  tab = 'lesson';
  current = await api(`/api/lesson?id=${encodeURIComponent(id)}`);
  selectedPart = current.part;
  selectedChapter = current.chapter;
  showHomework = Boolean(current.section);
  document.querySelector('.lab').dataset.runtime = current.runtime;
  $('title').textContent = current.title;
  $('breadcrumb').textContent = `${partNames[current.part]} · ${chapterLabel(current.chapter).replace(/^CH\d+ · /, '')}`;
  $('meta').textContent = `${current.minutes} minutes · ${current.objective}`;
  $('complete').checked = completed.has(id);
  $('file').replaceChildren();
  const sourceFiles = Object.keys(current.contents).filter(name => /\.(js|json|html|css|csv)$/.test(name) && name !== 'lesson.json');
  for (const name of sourceFiles) {
    const option = document.createElement('option');
    option.value = option.textContent = name;
    $('file').append(option);
  }
  $('file').value = 'main.js';
  $('visualize').hidden = !Object.keys(current.contents).some(name => name.endsWith('/visualizer.html'));
  $('file').hidden = sourceFiles.length === 1;
  $('filename').hidden = sourceFiles.length !== 1;
  $('filename').textContent = sourceFiles.length === 1 ? sourceFiles[0] : '';
  loadFile();
  updateSpoiler();
  reading();
  navigation();
  $('output').textContent = '';
  $('status').textContent = 'Ready';
  $('previous').disabled = catalog[0].id === id;
  $('next').disabled = catalog.at(-1).id === id;
  rememberResumeLesson(id);
  location.hash = encodeURIComponent(id);
}
async function run() {
  if (!current || busy || (current.spoiler && !revealed.has(current.id))) return;
  busy = true;
  $('run').disabled = true;
  try {
    await stop();
    $('run').disabled = true;
    const source = sourceFor('main.js');
    const runGeneration = generation;
    $('output').textContent = '';
    $('status').textContent = 'Running';
    if (current.runtime === 'browser') {
      const html = sourceFor('index.html')
      .replace(/<link\b[^>]*\bhref=["'][^"']*style\.css["'][^>]*>/gi, '');
      const css = sourceFor('style.css') || '';
      
      
      // The preview is sandboxed, but keeps its same-origin storage available for
      // lessons that demonstrate persistence with localStorage.
      const bridge = `const send=(...args)=>parent.postMessage({trainingOutput:true,text:args.map(v=>typeof v==='string'?v:JSON.stringify(v)).join(' ')},'*');console.log=send;console.error=send;window.onerror=(message)=>send(message);window.onunhandledrejection=(event)=>send(String(event.reason));`;
      const sourceTag = html.match(/<script\b([^>]*?)\bsrc=["'][^"']*main\.js["']([^>]*)>\s*<\/script>/i);
      const defer = sourceTag && /\bdefer\b/i.test(`${sourceTag[1]} ${sourceTag[2]}`) ? ' defer' : '';
      const script = `<script${defer}>${bridge}\n${source.replace(/<\/script/gi, '<\\/script')}<` + '/script>';
      const scriptPattern = /<script\b[^>]*\bsrc=["'][^"']*main\.js["'][^>]*>\s*<\/script>/i;
      const page = defer
        ? html.replace(scriptPattern, '').replace('</body>', script + '</body>')
        : html.replace(scriptPattern, script);
      $('preview').srcdoc = page.replace('</head>', `<style>${css}</style></head>`);
      if (!$('preview-dialog').open) $('preview-dialog').showModal();
      $('status').textContent = 'Browser preview running';
      $('run').disabled = false;
      return;
    }
    await api(`/api/run?id=${encodeURIComponent(current.id)}`, { source, edits: editsFor() });
    const tick = async () => {
      if (runGeneration !== generation) return;
      const result = await api('/api/status');
      if (runGeneration !== generation) return;
      $('output').textContent = result.output;
      $('output').scrollTop = $('output').scrollHeight;
      $('status').textContent = result.done ? `Finished · ${result.code === null ? result.signal || 'stopped' : 'exit ' + result.code}` : 'Running · input available below';
      $('run').disabled = !result.done;
      if (!result.done) poll = setTimeout(guarded(tick), 250);
    };
    await tick();
  }catch (error) {
    $('run').disabled = false;
    throw error;
  }finally {
    busy = false;
  }
}
window.addEventListener('message', event => {
  if (event.source === $('preview').contentWindow && event.data?.trainingOutput) $('output').textContent = ($('output').textContent + String(event.data.text) + '\n').slice(-200000);
});
$('preview').addEventListener('load', () => {
  try { $('preview').contentWindow.scrollTo(0, 0); } catch { /* sandbox navigation can briefly be unavailable */ }
});
$('close-preview').addEventListener('click', () => $('preview-dialog').close());
$('visualize').addEventListener('click', () => {
  const visualizer = Object.keys(current?.contents || {}).find(name => name.endsWith('/visualizer.html'));
  if (!visualizer) return;
  $('preview-title').textContent = 'Algorithm visualizer';
  $('preview').removeAttribute('srcdoc');
  const assetId = btoa(current.id).replaceAll('+', '-').replaceAll('/', '_').replaceAll('=', '');
  const algorithm = current.visualizerAlgorithm || 'linear-search';
  $('preview').src = `/api/lesson-asset/${assetId}/${visualizer}?algo=${encodeURIComponent(algorithm)}`;
  if (!$('preview-dialog').open) $('preview-dialog').showModal();
});
let draggingPreview = false;
let previewDragOffset = { x: 0, y: 0 };
$('preview-dialog').querySelector('.preview-dialog-bar').addEventListener('pointerdown', event => {
  if (event.target.closest('button')) return;
  const dialog = $('preview-dialog');
  const rect = dialog.getBoundingClientRect();
  draggingPreview = true;
  previewDragOffset = { x: event.clientX - rect.left, y: event.clientY - rect.top };
  dialog.style.margin = '0';
  dialog.style.left = `${rect.left}px`;
  dialog.style.top = `${rect.top}px`;
  event.currentTarget.setPointerCapture(event.pointerId);
});
$('preview-dialog').querySelector('.preview-dialog-bar').addEventListener('pointermove', event => {
  if (!draggingPreview) return;
  const dialog = $('preview-dialog');
  dialog.style.left = `${Math.max(0, event.clientX - previewDragOffset.x)}px`;
  dialog.style.top = `${Math.max(0, event.clientY - previewDragOffset.y)}px`;
});
$('preview-dialog').querySelector('.preview-dialog-bar').addEventListener('pointerup', () => { draggingPreview = false; });
$('source').addEventListener('input', () => {
  if (current && !$('source').readOnly) {
    drafts[current.id] = {...editsFor(),[$('file').value]:$('source').value};
     save();
  }
  updateHighlight();
  updateModified();
});
$('source').addEventListener('scroll', () => {
  $('highlight').scrollTop = $('source').scrollTop;
  $('highlight').scrollLeft = $('source').scrollLeft;
  $('line-numbers').scrollTop = $('source').scrollTop;
});
$('file').onchange = loadFile;
$('search').oninput = navigation;
$('run').onclick = guarded(run);
$('stop').onclick = guarded(stop);
$('reset').onclick = () => {
  const edits={...editsFor()};
  delete edits[$('file').value];
  drafts[current.id]=edits;
  save();
  loadFile();
};
$('download').onclick = () => {
  const url = URL.createObjectURL(new Blob([$('source').value], { type: 'text/plain' }));
  const a = document.createElement('a');
  a.href = url;
  a.download = $('file').value;
  a.click();
  URL.revokeObjectURL(url);
};
$('complete').onchange = () => {
  if ($('complete').checked) completed.add(current.id);
  else completed.delete(current.id);
  save();
  navigation();
};
$('reveal').onclick = () => {
  if (!current) return;
  guarded(async () => {
    current = await api(`/api/lesson?id=${encodeURIComponent(current.id)}&reveal=1`);
    revealed.add(current.id);
    save();
    updateSpoiler();
    loadFile();
    $('status').textContent = 'Example revealed';
  })();
};
for (const [id, delta] of [['previous', -1], ['next', 1]]) $(id).onclick = guarded(() => select(catalog[catalog.findIndex(item => item.id === current.id) + delta].id));
document.querySelectorAll('[data-tab]').forEach(button => {
  button.onclick = () => {
    if (current) {
      readingState[current.id] ||= {};
      readingState[current.id][tab] = $('reading').scrollTop;
      viewedLessons.add(current.id);
      save();
    }
    tab = button.dataset.tab;
     reading();
  };
});
$('reading').addEventListener('scroll', () => {
  if (!current) return;
  readingState[current.id] ||= {};
  readingState[current.id][tab] = $('reading').scrollTop;
  viewedLessons.add(current.id);
  save();
});
$('input-form').onsubmit = guarded(async event => {
  event.preventDefault();
   await api('/api/input', { text: $('stdin').value });
   $('stdin').value = '';
});


// Prevent default synchronously, including when the API is unavailable.
$('input-form').addEventListener('submit', event => event.preventDefault());
function findInSource() {
  const source = $('source');
  const input = $('source-find-input');
  const status = $('source-find-status');
  const term = input.value;
  if (!term) {
    status.textContent = '';
    return;
  }
  const text = source.value.toLocaleLowerCase();
  const query = term.toLocaleLowerCase();
  const from = source.selectionEnd > source.selectionStart ? source.selectionEnd : source.selectionStart;
  let index = text.indexOf(query, from);
  if (index < 0) index = text.indexOf(query, 0);
  if (index < 0) {
    status.textContent = 'Not found';
    return;
  }
  status.textContent = 'Found';
  source.focus();
  source.setSelectionRange(index, index + term.length);
  const line = source.value.slice(0, index).split('\n').length;
  const lineHeight = Number.parseFloat(getComputedStyle(source).lineHeight) || 21;
  source.scrollTop = Math.max(0, (line - 2) * lineHeight);
}
function openSourceFind() {
  $('source-find').hidden = false;
  const input = $('source-find-input');
  input.focus();
  input.select();
}
function closeSourceFind() {
  $('source-find').hidden = true;
  $('source').focus();
}
$('source-find-input').addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    event.preventDefault();
    findInSource();
  }
  if (event.key === 'Escape') {
    event.preventDefault();
    closeSourceFind();
  }
});
$('source-find-next').addEventListener('click', findInSource);
$('source-find-close').addEventListener('click', closeSourceFind);
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !$('source-find').hidden) {
    event.preventDefault();
    closeSourceFind();
    return;
  }
  const sourceFocused = document.activeElement === $('source');
  if (sourceFocused && (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'f') {
    event.preventDefault();
    openSourceFind();
  }
});
document.addEventListener('keydown', event => {
  if (!(event.ctrlKey && event.altKey && event.shiftKey && event.key === 'Backspace')) return;
  event.preventDefault();
  completed.clear();
  revealed.clear();
  try {
    localStorage.setItem('js-training-complete', '[]');
    localStorage.setItem('js-training-revealed', '[]');
  } catch {
    /* Storage can be unavailable. */
  }
  if (current) $('complete').checked = false;
  if (current) updateSpoiler();
  navigation();
  let toast = $('runner-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'runner-toast';
    document.body.append(toast);
  }
  toast.textContent = 'Progress reset';
  toast.classList.remove('show');
  void toast.offsetWidth;
  toast.classList.add('show');
});
$('theme').onclick = () => {
  document.body.classList.toggle('light');
  try {
    localStorage.setItem('js-training-theme', document.body.classList.contains('light') ? 'light' : 'dark');
  }catch {
  }
};
makeSplitter('nav-gripper', 'catalog', 120, 700, 'horizontal');
makeSplitter('lab-gripper', 'code-editor', 180, 900, 'horizontal');
makeSplitter('workspace-gripper', 'reading', 320, 1100);
installPaneActions();
document.addEventListener('keydown', event => {
  if (event.key === 'F5') {
    event.preventDefault();
     guarded(run)();
  }
  if (event.key === 'Escape') guarded(stop)();
});
try {
  catalog = await api('/api/catalog');
  navigation();
  const id = decodeURIComponent(location.hash.slice(1));
  const resume = getResumeLesson();
  await select(catalog.some(item => item.id === id) ? id : catalog.some(item => item.id === resume) ? resume : catalog[0].id);
}catch (error) {
  report(error);
}

