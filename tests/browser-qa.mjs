import { createRequire } from 'node:module';
import { createRunner } from '../lesson-runner/server.js';
import { discover } from '../lesson-runner/catalog.js';
import { once } from 'node:events';
import { writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const qaWork=path.join(root,'.training-work','browser-qa');
await (await import('node:fs/promises')).mkdir(qaWork,{recursive:true});
const runner=await createRunner(root);runner.server.listen(0,'127.0.0.1');await once(runner.server,'listening');
const browser=await chromium.launch({headless:true, channel:process.env.QA_BROWSER_CHANNEL || 'msedge'});
const context=await browser.newContext({viewport:{width:1600,height:1100}});const page=await context.newPage();
const failures=[],passed=[];page.on('pageerror',error=>failures.push(error.message));
const lessons=await discover(root);
async function select(fragment){const l=lessons.find(l=>l.id.includes(fragment));assert.ok(l,fragment);const stepTitle=l.title.replace(/^(?:\d+|S\d+|Project\s+\d+(?:\.\d+)?)[\s·.-]+/i,'');await page.locator('#search').fill(l.title);await page.locator('#catalog details details > summary').first().click();await page.locator('#steps button').filter({hasText:stepTitle}).click();await page.locator('#title').filter({hasText:l.title}).waitFor();return l;}
async function run(){await page.locator('#run').click();await page.waitForFunction(()=>document.querySelector('#status').textContent.includes('Browser preview running'));await page.locator('#preview').scrollIntoViewIfNeeded();await page.waitForTimeout(150);await page.screenshot();return page.frameLocator('#preview');}
try{
 await page.goto(`http://127.0.0.1:${runner.server.address().port}/?token=${runner.token}`);await page.locator('#source').waitFor();
 for(const l of lessons.filter(l=>l.runtime==='browser')){
  await select(l.id);await run();
  const output=await page.locator('#output').innerText();
  if(/ReferenceError|TypeError|SyntaxError|SecurityError|is not defined/.test(output))failures.push(l.id+': '+output);
  passed.push('Browser smoke: '+l.title);
 }
 await select('02-hide-show');let frame=await run();assert.equal(await frame.locator('#details').isVisible(),false);await frame.locator('#toggle').click();assert.equal(await frame.locator('#details').isVisible(),true);assert.equal(await frame.locator('#toggle').getAttribute('aria-expanded'),'true');
 await select('03-accordion');frame=await run();await frame.locator('summary').nth(0).click();await frame.locator('summary').nth(1).click();await page.waitForTimeout(100);assert.equal(await frame.locator('details').nth(0).getAttribute('open'),null);assert.notEqual(await frame.locator('details').nth(1).getAttribute('open'),null);
 await select('04-conditional-fields');frame=await run();assert.equal(await frame.locator('[name=reference]').isDisabled(),true);await frame.locator('#payment').selectOption('wire');assert.equal(await frame.locator('[name=reference]').isDisabled(),false);await frame.locator('[name=reference]').fill('W123');await frame.locator('button').click();assert.match(await frame.locator('#result').innerText(),/W123/);
 await select('05-validation');frame=await run();await frame.locator('button').click();assert.match(await frame.locator('#result').innerText(),/7475/);await frame.locator('[name=allocation]').fill('101.00');await frame.locator('button').click();assert.equal(await frame.locator('[name=allocation]').evaluate(node=>node.validity.valid),false);
 await select('06-dynamic-tables');frame=await run();await frame.locator('[data-amount]').fill('0.10');await frame.locator('#add').click();await frame.locator('[data-amount]').nth(1).fill('0.20');assert.match(await frame.locator('#total').innerText(),/\$0.30/);await frame.locator('[data-remove]').first().click();assert.equal(await frame.locator('#rows tr').count(),1);assert.match(await frame.locator('#total').innerText(),/\$0.20/);
 await select('07-sort-filter');frame=await run();await frame.locator('#sort').selectOption('hours');assert.equal(await frame.locator('tbody tr').first().locator('td').first().innerText(),'Grace');await frame.locator('#filter').fill('nobody');assert.match(await frame.locator('#count').innerText(),/No matches/);
 await select('08-templates');frame=await run();await frame.locator('#add').click();await frame.locator('#add').click();assert.equal(await frame.locator('#entries input').count(),2);const ids=await frame.locator('#entries input').evaluateAll(nodes=>nodes.map(n=>n.id));assert.equal(new Set(ids).size,2);
 await select('09-dialogs');frame=await run();await frame.locator('#open').click();await frame.locator('textarea').fill('<script>literal note</script>');await frame.locator('button[value=save]').click();assert.equal(await frame.locator('#notes li').innerText(),'<script>literal note</script>');assert.equal(await frame.locator('dialog').isVisible(),false);
 await select('10-coding-form');frame=await run();await frame.locator('[data-amount]').fill('100.00');await frame.locator('#review').click();assert.match(await frame.locator('#review-result').innerText(),/Ready for review/);await frame.locator('[data-amount]').fill('99.99');await frame.locator('#review').click();assert.match(await frame.locator('#review-result').innerText(),/must equal/);
 await select('06-delegation');frame=await run();await frame.locator('#add').click();await frame.locator('button.remove').last().click();assert.equal(await frame.locator('button.remove').count(),1);await frame.locator('button.remove span').click();assert.equal(await frame.locator('button.remove').count(),0);
 await select('p03-learning-log/03-deletion');frame=await run();await frame.locator('[name=entry]').fill('Closures');await frame.locator('form button').click();assert.equal(await frame.locator('li').count(),1);await frame.locator('li button').click();assert.match(await frame.locator('ul').innerText(),/No learning entries/);
 await select('p03-learning-log/02-persistence');frame=await run();await frame.locator('[name=entry]').fill('Saved entry');await frame.locator('form button').click();const download=page.waitForEvent('download');await frame.getByRole('button',{name:'Export JSON'}).click();await (await download).saveAs(path.join(qaWork,'qa-log.json'));await page.locator('#run').click();await page.waitForTimeout(150);frame=page.frameLocator('#preview');await frame.locator('input[type=file]').setInputFiles(path.join(qaWork,'qa-log.json'));await page.waitForTimeout(150);assert.match(await frame.locator('li').innerText(),/Saved entry/);
 // Editing HTML and CSS must affect the preview, and Reset restores the selected file only.
 await select('01-script-integration');await page.locator('#file').selectOption('index.html');const original=await page.locator('#source').inputValue();await page.locator('#source').fill(original.replace('A connected page','Edited HTML'));frame=await run();assert.equal(await frame.locator('h1').innerText(),'Edited HTML');await page.locator('#file').selectOption('style.css');await page.locator('#source').fill('h1 { color: rgb(255, 0, 0); }');frame=await run();assert.equal(await frame.locator('h1').evaluate(node=>getComputedStyle(node).color),'rgb(255, 0, 0)');await page.locator('#reset').click();await page.locator('#file').selectOption('index.html');assert.match(await page.locator('#source').inputValue(),/Edited HTML/);await page.locator('#reset').click();
 // Support-module editing, completion persistence, and stdin through the UI.
 await select('02-modules');await page.locator('#file').selectOption('temperature.js');await page.locator('#source').fill('export const celsiusToFahrenheit = c => 42;');await page.locator('#run').click();await page.waitForFunction(()=>document.querySelector('#status').textContent.includes('exit 0'));assert.equal((await page.locator('#output').innerText()).trim(),'42\n42');await page.locator('#reset').click();
 await select('01-input');await page.locator('#run').click();await page.waitForFunction(()=>document.querySelector('#output').textContent.includes('How many'));await page.locator('#stdin').fill('9');await page.locator('#input-form button').click();await page.waitForFunction(()=>document.querySelector('#status').textContent.includes('exit 0'));assert.match(await page.locator('#output').innerText(),/Plan: 9 lessons/);
 await page.locator('#complete').check();await page.reload();await page.waitForFunction(()=>document.querySelector('#complete').checked);await page.locator('#complete').uncheck();
 await select('06-dynamic-tables');frame=await run();await frame.locator('[data-amount]').fill('25.00');await frame.locator('#add').click();await frame.locator('[data-amount]').nth(1).fill('75.00');await page.locator('#search').fill('');await page.evaluate(()=>window.scrollTo(0,0));await page.screenshot({path:path.join(root,'runner-preview.png'),fullPage:false});
 await page.setViewportSize({width:680,height:1000});await page.screenshot({path:path.join(qaWork,'mobile-preview.png'),fullPage:false});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
 passed.push('Functional checks: disclosure, accordion, conditional fields, validation, dynamic rows/currency, sorting/filtering, template IDs, dialogs/safe text, coding reconciliation, delegated events, Learning Log deletion/import/export, HTML/CSS edits/reset, support module edits, stdin, completion persistence, narrow layout.');
 assert.deepEqual(failures,[]);
 await writeFile(path.join(qaWork,'results.json'),JSON.stringify({passed,failures},null,2));console.log(`${passed.length} browser checks passed; no page errors.`);
}finally{await browser.close();await runner.jobs.close();await new Promise(resolve=>runner.server.close(resolve));}
