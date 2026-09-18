#!/usr/bin/env node
/* ============================================================
   check-images.js — reconcile the data files against images/

   Run from the repo root:   node check-images.js

   GitHub Pages serves files case-sensitively; macOS and Windows do not.
   So "A-Balbo-Front.JPG" loads perfectly on your laptop and 404s on the
   live site. This finds every such mismatch, plus anything genuinely
   missing and anything in the folder nothing points at.

   Read-only. It never renames or deletes.
   ============================================================ */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const IMG = path.join(ROOT, 'images');
const STORY_IMG = path.join(IMG, 'stories');

/* ---------- load the data files the way a browser would ---------- */
global.window = {};
const DATA = ['reverso-reference.js', 'reverso-series.js', 'reverso-limited.js', 'reverso-stories.js'];
for (const f of DATA) {
  const p = path.join(ROOT, f);
  if (!fs.existsSync(p)) { console.error(`! missing data file: ${f}`); process.exit(1); }
  require(p);
}
const W = global.window;

/* ---------- build the expected list, tagged with where it came from ---------- */
const expected = new Map();           // filename -> source label
function want(dir, name, source) {
  const key = (dir ? dir + '/' : '') + name;
  if (!expected.has(key)) expected.set(key, source);
}

if (W.RR) {
  (W.RR.ARCHIVE || []).forEach(a => {
    const label = a.cat === 'unique' ? 'Archive · pièce unique' : 'Archive · artistic';
    want('', `${a.slot}-front.jpg`, label);
    want('', `${a.slot}-back.jpg`, label);
  });
  (W.RR.MODELS || []).forEach(m => want('', `${m.slot}.jpg`, 'Models'));
}
if (W.RSERIES) {
  (W.RSERIES.SERIES || []).forEach(s => {
    want('', `${s.slug}-cover.jpg`, `Series cover · ${s.name}`);
    (s.pieces || []).forEach(p => {
      want('', `${p.slot}-front.jpg`, `Series · ${s.name}`);
      want('', `${p.slot}-back.jpg`, `Series · ${s.name}`);
    });
  });
  (W.RSERIES.EDITIONS || []).forEach(e => {
    want('', `${e.slot}-front.jpg`, 'Archive · commemorative');
    want('', `${e.slot}-back.jpg`, 'Archive · commemorative');
  });
}
if (W.RLIMITED) {
  (W.RLIMITED.EDITIONS || []).forEach(e => {
    want('', `${e.slot}-front.jpg`, 'Limited editions');
    want('', `${e.slot}-back.jpg`, 'Limited editions');
  });
}
if (W.RSTORIES) {
  (W.RSTORIES.STORIES || []).forEach(s => {
    want('stories', `${s.id}-front.jpg`, 'Collector story');
    want('stories', `${s.id}-back.jpg`, 'Collector story');
  });
}

/* ---------- read what's actually on disk ---------- */
function listDir(dir, prefix) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => fs.statSync(path.join(dir, f)).isFile() && !f.startsWith('.'))
    .map(f => (prefix ? prefix + '/' : '') + f);
}
const onDisk = [...listDir(IMG, ''), ...listDir(STORY_IMG, 'stories')];
const byLower = new Map();
onDisk.forEach(f => {
  const k = f.toLowerCase();
  if (!byLower.has(k)) byLower.set(k, []);
  byLower.get(k).push(f);
});
const exactSet = new Set(onDisk);

/* base name without extension, for spotting wrong-extension files */
const byStem = new Map();
onDisk.forEach(f => {
  const stem = f.toLowerCase().replace(/\.[^.]+$/, '');
  if (!byStem.has(stem)) byStem.set(stem, []);
  byStem.get(stem).push(f);
});

/* ---------- classify ---------- */
const caseMismatch = [];   // right file, wrong capitalisation
const extMismatch = [];    // right name, wrong extension
const missing = [];        // nothing resembling it
const ok = [];

for (const [wantName, source] of expected) {
  if (exactSet.has(wantName)) { ok.push(wantName); continue; }

  const lowerHit = byLower.get(wantName.toLowerCase());
  if (lowerHit && lowerHit.length) {
    caseMismatch.push({ want: wantName, found: lowerHit[0], source });
    continue;
  }
  const stem = wantName.toLowerCase().replace(/\.[^.]+$/, '');
  const stemHit = byStem.get(stem);
  if (stemHit && stemHit.length) {
    extMismatch.push({ want: wantName, found: stemHit[0], source });
    continue;
  }
  missing.push({ want: wantName, source });
}

const referenced = new Set([...expected.keys()].map(s => s.toLowerCase()));
const orphans = onDisk.filter(f => !referenced.has(f.toLowerCase()));

/* ---------- report ---------- */
const pad = (s, n) => String(s).padEnd(n);
console.log('');
console.log('  My Reverso Story — image reconciliation');
console.log('  ' + '-'.repeat(60));
console.log(`  expected by the data files : ${expected.size}`);
console.log(`  files found in images/     : ${onDisk.length}`);
console.log('');
console.log(`  matched exactly            : ${ok.length}`);
console.log(`  WRONG CAPITALISATION       : ${caseMismatch.length}   <- breaks on GitHub Pages only`);
console.log(`  WRONG EXTENSION            : ${extMismatch.length}   <- breaks everywhere`);
console.log(`  missing entirely           : ${missing.length}`);
console.log(`  in folder, never referenced: ${orphans.length}`);
console.log('');

if (caseMismatch.length) {
  console.log('  Wrong capitalisation — these load on your machine and 404 on the live site:');
  caseMismatch.forEach(m => console.log(`    on disk: ${pad(m.found, 42)} data expects: ${m.want}`));
  console.log('');
  console.log('  Git does not notice a pure case rename. Force it, per file:');
  console.log('    git mv -f images/OLDNAME.jpg images/tmp && git mv -f images/tmp images/newname.jpg');
  console.log('');
}

if (extMismatch.length) {
  console.log('  Wrong extension:');
  extMismatch.forEach(m => console.log(`    on disk: ${pad(m.found, 42)} data expects: ${m.want}`));
  console.log('');
}

if (missing.length) {
  const bySource = new Map();
  missing.forEach(m => {
    if (!bySource.has(m.source)) bySource.set(m.source, []);
    bySource.get(m.source).push(m.want);
  });
  console.log(`  Missing (${missing.length}), grouped by section:`);
  [...bySource.entries()]
    .sort((a, b) => b[1].length - a[1].length)
    .forEach(([src, list]) => {
      console.log(`    ${pad(src, 34)} ${list.length}`);
      if (process.argv.includes('--all')) list.forEach(f => console.log(`        ${f}`));
    });
  if (!process.argv.includes('--all')) console.log('    (run with --all to list every filename)');
  console.log('');
}

if (orphans.length && process.argv.includes('--orphans')) {
  console.log(`  In images/ but referenced by nothing (${orphans.length}):`);
  orphans.forEach(f => console.log(`    ${f}`));
  console.log('');
}

const breaking = caseMismatch.length + extMismatch.length;
if (breaking) {
  console.log(`  ${breaking} file(s) would fail to load on the live site.`);
  process.exitCode = 1;
} else {
  console.log('  No case or extension problems. Anything not showing is genuinely missing.');
}
console.log('');
