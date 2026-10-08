// i18n regression guard — catches text that looks untranslated (not just missing keys).
// Usage: node scripts/check-untranslated.js      (exit code 1 if problems are found)
//  1. English function-words left inside fr/es/it/pt/de strings (e.g. "…à the lock-trick tools")
//  2. Latin words left inside ar/ary strings (ignoring {placeholders}, CASE-XXX, VIP, CCTV…)
//  3. Arabic script inside a Latin-language string (a value pasted in the wrong language block)
//  4. Every txx('key') / setText(id,'key') used in app.js must exist in EXTRA_TRANGS or TRANSLATIONS
const fs = require('fs'), vm = require('vm'), path = require('path');
const ROOT = path.resolve(__dirname, '..');
const read = f => fs.readFileSync(path.join(ROOT, f), 'utf8');

const ctx = {}; vm.createContext(ctx);
vm.runInContext(read('www/translations.js') + '\n;this.T=TRANSLATIONS;', ctx);
const T = ctx.T;

function grab(src, name) {                       // extracts `const NAME = {...}` as an object
  const s = src.indexOf('const ' + name), o = src.indexOf('{', s);
  let d = 0, q = null, esc = false;
  for (let i = o; i < src.length; i++) {
    const ch = src[i];
    if (q) { if (esc) esc = false; else if (ch === '\\') esc = true; else if (ch === q) q = null; continue; }
    if (ch === '"' || ch === "'" || ch === '`') { q = ch; continue; }
    if (ch === '/' && src[i + 1] === '/') { while (src[i] !== '\n') i++; continue; }
    if (ch === '{') d++; else if (ch === '}' && --d === 0) return vm.runInNewContext('(' + src.slice(o, i + 1) + ')');
  }
}
const app = read('www/app.js');
const EX = grab(app, 'EXTRA_TRANGS'), GU = grab(app, 'GUIDE_TRANGS'); GU.ary = GU.ar;
for (const l of Object.keys(GU)) if (EX[l]) Object.assign(EX[l], GU[l]);

const flat = (o, p = '', out = {}) => {
  if (typeof o === 'string') out[p] = o;
  else if (Array.isArray(o)) o.forEach((v, i) => flat(v, `${p}[${i}]`, out));
  else if (o && typeof o === 'object') for (const k in o) flat(o[k], p ? `${p}.${k}` : k, out);
  return out;
};
const ENG = new Set('the and was were with his her their they that this did not you your from have been into about after before because which who when where there would could should than just also very him them its our what'.split(' '));
const DROP = { de: ['was', 'her', 'also', 'has', 'had', 'who', 'when', 'where', 'not', 'this'], es: ['has'], pt: ['for'] };
const LATIN_OK = new Set(['The', 'Black', 'File', 'PeerJS', 'Google', 'Firebase', 'ID', 'PIN', 'AM', 'PM', 'VIP', 'CCTV', 'CASE', 'XXX', 'code', 'email', 'Othmane', 'Ettoumi']);

let problems = 0;
const report = (where, key, why, v) => { problems++; console.log(`  ${where} ${key} — ${why}: ${String(v).slice(0, 100)}`); };
for (const [name, D] of [['TRANSLATIONS', T], ['EXTRA_TRANGS', EX]]) {
  console.log(`\n== ${name}`);
  for (const l of ['fr', 'es', 'it', 'pt', 'de']) {
    const drop = new Set(DROP[l] || []);
    for (const [k, v] of Object.entries(flat(D[l]))) {
      if (/culpritHash/.test(k)) continue;
      if (/[\u0600-\u06FF]/.test(v)) { report(`[${l}]`, k, 'Arabic script in a Latin-language string', v); continue; }
      const hits = (v.toLowerCase().match(/[a-zà-ÿ']+/g) || []).filter(w => ENG.has(w) && !drop.has(w));
      if (hits.length && !/^guideSubtitle$/.test(k)) report(`[${l}]`, k, 'English words (' + [...new Set(hits)].join(',') + ')', v);
    }
  }
  for (const l of ['ar', 'ary']) {
    for (const [k, v] of Object.entries(flat(D[l]))) {
      if (/culpritHash|difficulty$/.test(k)) continue;
      const lat = (v.replace(/\{[^}]+\}/g, '').match(/[A-Za-z]{3,}/g) || []).filter(w => !LATIN_OK.has(w));
      if (lat.length) report(`[${l}]`, k, 'Latin words (' + lat.join(',') + ')', v);
    }
  }
}
console.log('\n== Keys used in app.js but undefined');
const defined = new Set([...Object.keys(T.en), ...Object.keys(EX.en)]);
const used = new Set();
for (const m of app.matchAll(/\btxx\(\s*['"`]([A-Za-z0-9_.]+)['"`]/g)) used.add(m[1]);
for (const m of app.matchAll(/setText\(\s*['"`][^'"`]+['"`]\s*,\s*['"`]([A-Za-z0-9_]+)['"`]/g)) used.add(m[1]);
for (const k of used) if (!defined.has(k)) report('', k, 'key used in code but not defined', '');
console.log(problems ? `\n${problems} problem(s) found.` : '\nAll good — no untranslated text detected.');
process.exit(problems ? 1 : 0);
