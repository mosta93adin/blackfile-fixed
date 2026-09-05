#!/usr/bin/env node
/**
 * build-electron.js — Packages the Electron app for Windows (.exe) and/or macOS (.dmg)
 * using electron-builder. Handles the config that electron-builder cannot merge:
 * it copies electron/electron-builder.config.json -> electron/electron-builder.json
 * (electron-builder's config layering only merges some fields).
 *
 * Usage:
 *   node scripts/build-electron.js --win       Windows NSIS installer + portable
 *   node scripts/build-electron.js --mac       macOS dmg
 *   node scripts/build-electron.js --win --mac both
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const ELECTRON_DIR = path.join(ROOT, 'electron');

const args = process.argv.slice(2);
const doWin = args.includes('--win');
const doMac = args.includes('--mac');
if (!doWin && !doMac) {
  console.error('Usage: node scripts/build-electron.js --win --mac');
  process.exit(1);
}

// electron-builder reads electron-builder.json / .yml / .json5, but NOT .config.json,
// so we materialize the config under the name it expects.
const src = path.join(ELECTRON_DIR, 'electron-builder.config.json');
const dst = path.join(ELECTRON_DIR, 'electron-builder.json');
fs.copyFileSync(src, dst);
console.log('electron-builder config staged: electron/electron-builder.json');

const targets = [];
if (doWin) targets.push('--win');
if (doMac) targets.push('--mac');

// Friendly pre-flight check: the Firebase web config is gitignored, so it must
// be placed manually into electron/app/ (copy www/firebase-config.js there).
// Without it the packaged app builds fine but Firebase never initializes.
const firebaseCfg = path.join(ELECTRON_DIR, 'app', 'firebase-config.js');
if (!fs.existsSync(firebaseCfg)) {
  console.warn('WARNING: electron/app/firebase-config.js is missing.');
  console.warn('         Copy www/firebase-config.js into electron/app/ — otherwise');
  console.warn('         Firebase (login, cloud progress, leaderboard) will not work');
  console.warn('         in the packaged desktop app.');
}

try {
  execSync(`npx electron-builder ${targets.join(' ')}`, {
    cwd: ELECTRON_DIR,
    stdio: 'inherit',
  });
} catch (err) {
  console.error('\nBuild failed. See output above.');
  process.exit(err.status || 1);
}
console.log('\nDone. Installers are in electron/dist/.');
