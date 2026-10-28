import MarkdownIt from 'markdown-it';
import texmath from 'markdown-it-texmath';
import katex from 'katex';

export const escape = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// Keep raw HTML disabled. Markdown syntax, safe links, hard line breaks, tables,
// nested lists, fenced code, and optional TeX math are handled by established parsers.
const renderer = new MarkdownIt({ html: false, breaks: false, linkify: false, typographer: false })
  .use(texmath, {
    engine: katex,
    delimiters: ['dollars', 'brackets'],
    katexOptions: { throwOnError: false, strict: false }
  });

export function markdown(source) {
  return renderer.render(String(source));
}
