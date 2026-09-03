// Temporary i18n audit script — compares translation keys across all languages
// Usage: node scripts/check-i18n.js

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

function extractDict(content, dictName) {
    // Find the start of the dictionary: const DICT_NAME = {
    const dictStart = content.indexOf(`const ${dictName}`);
    if (dictStart === -1) return null;
    // Find the opening brace after the dict name
    const openBrace = content.indexOf('{', dictStart);
    // Now we need to find the matching closing brace
    // We'll track brace depth
    let depth = 0;
    let closeBrace = -1;
    for (let i = openBrace; i < content.length; i++) {
        if (content[i] === '{') depth++;
        if (content[i] === '}') depth--;
        if (depth === 0) { closeBrace = i; break; }
    }
    const dictContent = content.substring(openBrace + 1, closeBrace);
    return dictContent;
}

function extractLangKeys(langBlock) {
    // Extract all keys from a language block like: keyName: "value", keyName2: "value2"
    const keys = new Set();
    // Match key: pattern at the start of a property
    const keyRegex = /^\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*:/gm;
    let match;
    while ((match = keyRegex.exec(langBlock)) !== null) {
        keys.add(match[1]);
    }
    return keys;
}

const KNOWN_LANGS = new Set(['en', 'ar', 'ary', 'fr', 'es', 'it', 'de', 'pt']);

function extractLangBlocks(dictContent) {
    // Each language block is like: langCode: { ... }
    // We need to find each lang code and extract its block
    const blocks = {};
    // Match patterns like "  en: {" or "en: {"
    const langRegex = /^\s*([a-zA-Z][a-zA-Z0-9_]*)\s*:\s*\{/gm;
    let match;
    while ((match = langRegex.exec(dictContent)) !== null) {
        const langCode = match[1];
        if (!KNOWN_LANGS.has(langCode)) continue;
        // Find the content of this block
        const blockStart = match.index + match[0].length - 1; // position of the opening {
        let depth = 0;
        let blockEnd = -1;
        for (let i = blockStart; i < dictContent.length; i++) {
            if (dictContent[i] === '{') depth++;
            if (dictContent[i] === '}') depth--;
            if (depth === 0) { blockEnd = i; break; }
        }
        const blockContent = dictContent.substring(blockStart, blockEnd + 1);
        blocks[langCode] = extractLangKeys(blockContent);
    }
    return blocks;
}

function checkFile(filePath, dictName) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const dictContent = extractDict(content, dictName);
    if (!dictContent) {
        console.log(`[WARN] Could not find ${dictName} in ${filePath}`);
        return null;
    }
    return extractLangBlocks(dictContent);
}

function compareKeys(blocks, dictName) {
    const langs = Object.keys(blocks);
    // Use 'en' as reference
    const refLang = langs.includes('en') ? 'en' : langs[0];
    const refKeys = blocks[refLang];
    console.log(`\n=== ${dictName} (reference: ${refLang}) ===`);
    console.log(`Total keys in ${refLang}: ${refKeys.size}`);
    console.log('');
    let totalMissing = 0;
    for (const lang of langs) {
        if (lang === refLang) continue;
        const langKeys = blocks[lang];
        const missing = [...refKeys].filter(k => !langKeys.has(k));
        const extra = [...langKeys].filter(k => !refKeys.has(k));
        console.log(`${lang}:`);
        console.log(`  Keys present: ${langKeys.size}/${refKeys.size}`);
        if (missing.length > 0) {
            console.log(`  MISSING (${missing.length}): ${missing.join(', ')}`);
            totalMissing += missing.length;
        } else {
            console.log(`  All keys present ✓`);
        }
        if (extra.length > 0) {
            console.log(`  EXTRA (${extra.length}): ${extra.join(', ')}`);
        }
    }
    console.log(`\nTotal missing keys: ${totalMissing}`);
    return totalMissing;
}

// Check EXTRA_TRANGS in app.js
const extraGransBlocks = checkFile(path.join(ROOT, 'www', 'app.js'), 'EXTRA_TRANGS');
if (extraGransBlocks) {
    compareKeys(extraGransBlocks, 'EXTRA_TRANGS');
}

// Check TRANSLATIONS in translations.js
const translationsBlocks = checkFile(path.join(ROOT, 'www', 'translations.js'), 'TRANSLATIONS');
if (translationsBlocks) {
    compareKeys(translationsBlocks, 'TRANSLATIONS');
}
