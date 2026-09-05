#!/usr/bin/env node
/**
 * Generates the Electron app icons (Windows .ico + macOS .png) from the
 * game's 512x512 source PNG (www/assets/icon-512.png).
 *
 * Pure Node implementation (no image libraries needed): the .ico embeds the
 * PNG bytes directly (PNG-compressed ICO entries are supported on Windows
 * Vista+ and accepted by electron-builder, which requires a >=256x256 entry).
 *
 * Run from the repo root:  node scripts/generate-electron-icons.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'www', 'assets', 'icon-512.png');
const OUT_DIR = path.join(ROOT, 'electron', 'assets');

function pngDimensions(buf) {
  // PNG signature (8 bytes) + IHDR chunk: length(4) "IHDR"(4) width(4) height(4)
  if (buf.length < 24 || buf.readUInt32BE(0) !== 0x89504e47) {
    throw new Error('Source file is not a valid PNG');
  }
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

function buildIco(pngBuf) {
  const { width, height } = pngDimensions(pngBuf);
  if (width !== height) {
    throw new Error(`Icon must be square, got ${width}x${height}`);
  }

  // ICONDIR (6 bytes)
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved, must be 0
  header.writeUInt16LE(1, 2); // type: 1 = icon
  header.writeUInt16LE(1, 4); // number of images in the file

  // ICONDIRENTRY (16 bytes)
  const entry = Buffer.alloc(16);
  entry.writeUInt8(width >= 256 ? 0 : width, 0); // width (0 means 256)
  entry.writeUInt8(height >= 256 ? 0 : height, 1); // height (0 means 256)
  entry.writeUInt8(0, 2); // number of colors in palette (0 = truecolor)
  entry.writeUInt8(0, 3); // reserved
  entry.writeUInt16LE(1, 4); // color planes
  entry.writeUInt16LE(32, 6); // bits per pixel
  entry.writeUInt32LE(pngBuf.length, 8); // size of image data
  entry.writeUInt32LE(6 + 16, 12); // offset of image data

  return Buffer.concat([header, entry, pngBuf]);
}

const png = fs.readFileSync(SRC);
const { width, height } = pngDimensions(png);
if (width < 256 || height < 256) {
  throw new Error(`Source icon too small: ${width}x${height} (need >= 256x256)`);
}

fs.mkdirSync(OUT_DIR, { recursive: true });

// macOS / Linux / window icon: plain PNG (electron-builder converts it to .icns).
fs.writeFileSync(path.join(OUT_DIR, 'appIcon.png'), png);
// Windows app + installer (NSIS) icon.
fs.writeFileSync(path.join(OUT_DIR, 'appIcon.ico'), buildIco(png));

console.log(`Generated Electron icons from ${width}x${height} source:`);
console.log('  electron/assets/appIcon.png');
console.log('  electron/assets/appIcon.ico');
