import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { services, projects } from '../src/content.mjs';
import { layout, quoteForm, esc } from '../src/templates.mjs';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const dist=resolve(root,'dist');
async function files(dir){let result=[];for(const entry of await readdir(dir,{withFileTypes:true})){const p=resolve(dir,entry.name);result.push(...(entry.isDirectory()?await files(p):[p]));}return result;}

test('all project recommendations point to an existing service',()=>{
  for(const p of projects){assert.ok(p.steps.length>=3,p.id);for(const slug of p.services)assert.ok(services.some(s=>s.slug===slug),`${p.id}: ${slug}`);}
});
test('all built pages have unique metadata, one heading and working local destinations',async()=>{
  const pages=(await files(dist)).filter(f=>f.endsWith('.html'));assert.equal(pages.length,25);
  const titles=new Set();
  for(const page of pages){
    const html=await readFile(page,'utf8');assert.equal((html.match(/<h1[ >]/g)||[]).length,1,page);
    const title=html.match(/<title>(.*?)<\/title>/)[1];assert.ok(!titles.has(title),`duplicate ${title}`);titles.add(title);
    assert.match(html,/<meta name="description" content="[^"]{40,}"/);
    for(const match of html.matchAll(/(?:href|src)="(\/[^"]*)"/g)){
      const url=new URL(match[1].replaceAll('&amp;','&'),'https://test.invalid');
      let target=resolve(dist,'.'+decodeURIComponent(url.pathname));
      if(url.pathname.endsWith('/'))target=resolve(target,'index.html');
      assert.ok(await stat(target).then(s=>s.isFile()).catch(()=>false),`${page}: broken ${url.pathname}`);
      if(url.hash&&target.endsWith('.html')){const content=await readFile(target,'utf8');assert.ok(content.includes(`id="${url.hash.slice(1)}"`),`missing fragment ${url.href}`);}
    }
    for(const match of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs))assert.doesNotThrow(()=>JSON.parse(match[1]));
  }
});
test('both design stories show their final drawing before JavaScript runs', async () => {
  const html = await readFile(resolve(dist, 'index.html'), 'utf8');
  const stories = [...html.matchAll(/<section[^>]+data-bp-story="[^"]+"[^>]*>(.*?)<\/section>/gs)];
  assert.equal(stories.length, 2);
  for (const [, story] of stories) {
    const frames = [...story.matchAll(/<div[^>]+data-bp-frame="[^"]+"[^>]*>/g)].map(([tag]) => tag);
    assert.equal(frames.length, 7);
    assert.ok(frames.slice(0, -1).every(tag => /\shidden(?:[\s=>])/.test(tag)));
    assert.doesNotMatch(frames.at(-1), /\shidden(?:[\s=>])/);
  }
});
test('email fallback explicitly prepares a draft; Netlify markup remains discoverable',()=>{
  assert.match(quoteForm('email'),/Prepare my enquiry/);assert.match(quoteForm('netlify'),/Send my enquiry/);
  assert.match(quoteForm('email'),/type="submit" disabled/);assert.ok(!quoteForm('netlify').includes('type="submit" disabled'));
  const names = html => [...html.matchAll(/(?:input|select|textarea)[^>]* name="([^"]+)"/g)].map(m=>m[1]).sort();
  assert.deepEqual(names(quoteForm('netlify')),names(quoteForm('netlify',true)));
  for(const html of [quoteForm('email'),quoteForm('netlify')]){assert.match(html,/name="beam-plan-enquiry"/);assert.match(html,/data-netlify="true"/);assert.match(html,/netlify-honeypot="website"/);assert.match(html,/action="\/thanks\/"/);assert.match(html,/name="email"[^>]*required/);}
});
test('unconfigured pages are not indexed, preview sitemap omits the origin',async()=>{
  const result=spawnSync(process.execPath,['scripts/build.mjs'],{cwd:root,env:{...process.env,SITE_URL:'https://beamandplan.com',CONTEXT:'deploy-preview',FORM_BACKEND:'netlify'},encoding:'utf8'});assert.equal(result.status,0,result.stderr);
  const html=await readFile(resolve(dist,'index.html'),'utf8');assert.match(html,/noindex, follow/);assert.match(html,/data-form-backend="netlify"/);assert.match(await readFile(resolve(dist,'robots.txt'),'utf8'),/Disallow: \//);assert.ok(!(await readFile(resolve(dist,'sitemap.xml'),'utf8')).includes('<loc>'));
  const restore=spawnSync(process.execPath,['scripts/build.mjs'],{cwd:root,env:process.env,encoding:'utf8'});assert.equal(restore.status,0,restore.stderr);
});
test('production metadata includes all public routes, while confirmations stay noindex',async()=>{
 const result=spawnSync(process.execPath,['scripts/build.mjs'],{cwd:root,env:{...process.env,SITE_URL:'https://beamandplan.com',CONTEXT:'production',FORM_BACKEND:'netlify'},encoding:'utf8'});assert.equal(result.status,0,result.stderr);
 const sitemap=await readFile(resolve(dist,'sitemap.xml'),'utf8');assert.equal((sitemap.match(/<loc>/g)||[]).length,23);assert.ok(!sitemap.includes('/thanks/'));assert.match(await readFile(resolve(dist,'thanks/index.html'),'utf8'),/noindex, follow/);
 for (const path of ['/services/steel-beam-calculations/','/projects/wall-removal/','/projects/extension/','/structural-engineer-norwich-norfolk/']) assert.ok(sitemap.includes('https://beamandplan.com'+path),path);
 assert.doesNotMatch(await readFile(resolve(dist,'_headers'),'utf8'),/X-Robots-Tag: noindex/);
 assert.match(await readFile(resolve(dist,'robots.txt'),'utf8'),/Allow: \/\nSitemap: https:\/\/beamandplan.com\/sitemap.xml/);
 assert.match(await readFile(resolve(dist,'index.html'),'utf8'),/rel="canonical" href="https:\/\/beamandplan.com\/"/);
 const restore=spawnSync(process.execPath,['scripts/build.mjs'],{cwd:root,env:process.env,encoding:'utf8'});assert.equal(restore.status,0,restore.stderr);
});
test('HTML escapes enquiry/metadata content and rejects an unsafe deployment origin',()=>{
 assert.equal(esc('<script>"&'), '&lt;script&gt;&quot;&amp;');
 const html=layout({title:'<img onerror="bad">',description:'<unsafe>',body:'<h1>Safe</h1>'});assert.ok(!html.includes('<title><img'));assert.match(html,/noindex, follow/);
 const result=spawnSync(process.execPath,['scripts/build.mjs'],{cwd:root,env:{...process.env,SITE_URL:'http://example.com'},encoding:'utf8'});assert.notEqual(result.status,0);assert.match(result.stderr,/clean HTTPS origin/);
});
