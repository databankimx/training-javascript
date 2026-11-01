const $ = id => document.getElementById(id);
const katexStyles = document.createElement('link');
katexStyles.rel = 'stylesheet';
katexStyles.href = '/katex.css';
document.head.append(katexStyles);
const token = new URLSearchParams(location.search).get('token');
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
// Quotes are safe in text nodes. Escaping only markup characters keeps source
// code readable instead of showing the HTML entities used by the renderer.
const escapeHtml = value => value.replace(/[&<>]/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[character]));
function highlightSource(source) {
  const escaped = escapeHtml(source);
  const pattern = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/|&lt;!--[\s\S]*?--&gt;|'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|`(?:\\.|[^`\\])*`|&lt;\/?[A-Za-z][^\n]*?&gt;|\b(?:const|let|var|function|return|if|else|for|while|new|class|export|import|from|async|await|throw|try|catch|true|false|null|undefined)\b|\b\d+(?:\.\d+)?\b)/g;
  return escaped.replace(pattern, token => {
    const type = /^(\/\/|\/\*|&lt;!--)/.test(token) ? 'comment' : /^&lt;\/?[A-Za-z]/.test(token) ? 'tag' : /^(?:'|"|`)/.test(token) ? 'string' : /^(?:const|let|var|function|return|if|else|for|while|new|class|export|import|from|async|await|throw|try|catch|true|false|null|undefined)$/.test(token) ? 'keyword' : 'number';
    return `<span class="token-${type}">${token}</span>`;
  });
}
function updateHighlight() {
  $('highlight').querySelector('code').innerHTML = highlightSource($('source').value) + '\n';
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
function makeSplitter(id, target, minimum, maximum) {
  const grip = $(id);
  const element = $(target);
  let start = 0;
  let size = 0;
  grip.addEventListener('pointerdown', event => {
    event.preventDefault();
    grip.setPointerCapture(event.pointerId);
    start = event.clientY;
    size = element.getBoundingClientRect().height;
    grip.classList.add('dragging');
  });
  grip.addEventListener('pointermove', event => {
    if (!grip.hasPointerCapture(event.pointerId)) return;
    const next = Math.max(minimum, Math.min(maximum, size + event.clientY - start));
    element.style.flex = `0 0 ${next}px`;
  });
  const stopDragging = event => {
    if (!grip.hasPointerCapture(event.pointerId)) return;
    grip.releasePointerCapture(event.pointerId);
    grip.classList.remove('dragging');
  };
  grip.addEventListener('pointerup', stopDragging);
  grip.addEventListener('pointercancel', stopDragging);
  grip.addEventListener('keydown', event => {
    if (!['ArrowUp', 'ArrowDown'].includes(event.key)) return;
    event.preventDefault();
    const delta = event.key === 'ArrowDown' ? 24 : -24;
    const next = Math.max(minimum, Math.min(maximum, element.getBoundingClientRect().height + delta));
    element.style.flex = `0 0 ${next}px`;
  });
}
document.body.classList.toggle('light', theme === 'light');
const partNames = { 'part-i-basics': 'Part I · Fundamentals', 'part-ii-applied-javascript': 'Part II · Applied JavaScript', 'part-iii-beyond-the-book': 'Part III · Beyond the book' };
const chapterNames = {
  'ch13-browser': 'CH13 · JavaScript in HTML',
  'ch14-forms': 'CH14 · JavaScript in Forms'
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
  $('reading').querySelectorAll('code.language-javascript').forEach(code => {
    code.innerHTML = highlightSource(code.textContent);
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
  $('preview').srcdoc = '';
  $('preview').hidden = true;
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
      .replace(/<script\b[^>]*\bsrc=["'][^"']*main\.js["'][^>]*>\s*<\/script>/gi, '')
      .replace(/<link\b[^>]*\bhref=["'][^"']*style\.css["'][^>]*>/gi, '');
      const css = sourceFor('style.css') || '';
      
      
      // Opaque-origin sandbox: preview cannot read runner cookies, storage, or API responses.
      const bridge = `const send=(...args)=>parent.postMessage({trainingOutput:true,text:args.map(v=>typeof v==='string'?v:JSON.stringify(v)).join(' ')},'*');console.log=send;console.error=send;window.onerror=(message)=>send(message);window.onunhandledrejection=(event)=>send(String(event.reason));`;
      const script = `<script type="module">${bridge}\n${source.replace(/<\/script/gi, '<\\/script')}<` + '/script>';
      $('preview').hidden = false;
      $('preview').srcdoc = html.replace('</head>', `<style>${css}</style></head>`).replace('</body>', script + '</body>');
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
makeSplitter('nav-gripper', 'catalog', 120, 700);
makeSplitter('lab-gripper', 'code-editor', 180, 900);
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
