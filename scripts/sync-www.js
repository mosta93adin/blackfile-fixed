#!/usr/bin/env node
/**
 * sync-www.js — Copies web assets from www/ into every platform target:
 *   - electron/app/        (Electron packaged app)
 *   - android/app/src/main/assets/public/  (Capacitor Android WebView)
 *
 * Usage:  node scripts/sync-www.js
 * Called automatically by npm scripts (electron:run, electron:build-*).
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const WWW = path.join(ROOT, 'www');

const TARGETS = [
  path.join(ROOT, 'electron', 'app'),
  path.join(ROOT, 'android', 'app', 'src', 'main', 'assets', 'public'),
];

// Per-target exclusions:
//  - Electron: the packaged app manages its own Firebase config
//    (electron/app/firebase-config.js is created separately from
//    electron-config.json / manual copy) — sync must never overwrite it,
//    and the www template is not needed in the bundle.
//  - Android: index.html loads firebase-config.js, so it MUST be copied
//    whenever it exists in www/ (only the template stays out of the APK).
const PLATFORM_EXCLUDES = new Map([
  [TARGETS[0], new Set(['firebase-config.js', 'firebase-config.example.js'])],
  [TARGETS[1], new Set(['firebase-config.example.js'])],
]);

function copyDir(src, dest, depth, exclude) {
  if (depth === 0) fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    if (exclude.has(entry.name)) continue;
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(s, d, depth + 1, exclude);
    } else {
      fs.copyFileSync(s, d);
    }
  }
}

if (!fs.existsSync(WWW)) {
  console.error(`ERROR: ${WWW} not found.`);
  process.exit(1);
}

for (const target of TARGETS) {
  if (!fs.existsSync(path.dirname(target))) {
    // Platform not added yet (e.g. android missing) — skip quietly
    console.log(`  skip (missing parent): ${path.relative(ROOT, target)}`);
    continue;
  }
  const exclude = PLATFORM_EXCLUDES.get(target) || new Set();
  copyDir(WWW, target, 0, exclude);
  console.log(`  synced www/ -> ${path.relative(ROOT, target)}`);
}
console.log('Web assets synced.');
