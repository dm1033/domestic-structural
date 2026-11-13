import { cp, mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { beamStory } from '../src/beam-story.mjs';
import { plotStory } from '../src/plot-story.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = resolve(root, 'components-dist');
const assets = resolve(out, 'assets');
await mkdir(assets, {recursive: true});
for (const name of ['site.css', 'story.css', 'story.js', 'archivo.woff2', 'archivo-semibold.woff2', 'bodoni.woff2', 'LICENSE-Archivo.txt', 'LICENSE-BodoniModa.txt', 'vendor']) {
  await cp(resolve(root, 'public/assets', name), resolve(assets, name), {recursive: true});
}

const stories = [
  ['from-sum-to-steel', 'From sum to steel', beamStory()],
  ['from-plot-to-plan-to-home', 'From plot to plan to home', plotStory()],
];
for (const [file, title, markup] of stories) {
  await writeFile(resolve(out, `${file}.html`), `<!doctype html>
<html lang="en-GB"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>${title} | Beam &amp; Plan</title><link rel="stylesheet" href="./assets/site.css"><link rel="stylesheet" href="./assets/story.css"><script src="./assets/story.js" defer></script><style>.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}</style></head><body class="bp-standalone"><main><h1 class="sr-only">Beam &amp; Plan design story</h1>${markup}</main></body></html>`);
  await writeFile(resolve(out, `${file}.fragment.html`), markup.trim() + '\n');
}
console.log('Built two standalone animation components and their HTML fragments.');
