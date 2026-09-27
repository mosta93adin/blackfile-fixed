#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const ROOT = path.resolve(__dirname, '..');
const WWW = path.join(ROOT, 'www');
const ANDROID = path.join(ROOT, 'android', 'app', 'src', 'main', 'assets', 'public');
const EXCLUDED = new Set(['firebase-config.example.js']);
function files(dir, prefix = '') {
  const out = []; if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = path.join(prefix, entry.name); const abs = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...files(abs, rel)); else out.push(rel);
  } return out;
}
function hash(file) { return crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex'); }
if (!fs.existsSync(ANDROID)) { console.error('ANDROID_WEB_ASSETS_MISSING'); process.exit(1); }
const expected = files(WWW).filter(p => !EXCLUDED.has(p)).sort();
const missing = [], different = [];
for (const rel of expected) { const a=path.join(WWW,rel), b=path.join(ANDROID,rel);
  if (!fs.existsSync(b)) missing.push(rel); else if (hash(a)!==hash(b)) different.push(rel); }
if (missing.length || different.length) {
  console.error('ANDROID_WWW_PARITY_FAIL');
  if (missing.length) console.error('Missing:', missing.join(', '));
  if (different.length) console.error('Different:', different.join(', '));
  process.exit(1);
}
console.log('ANDROID_WWW_PARITY_PASS (' + expected.length + ' web assets verified; generated Capacitor-only extras are allowed)');