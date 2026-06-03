import sharp from "sharp";
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const publicDir = join(process.cwd(), "public");

// High-contrast favicon: teal rounded-square background, white "WN" strokes.
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 375 375" width="375" height="375">
  <rect x="0" y="0" width="375" height="375" rx="84" fill="#145458"/>
  <g fill="none" stroke="#ffffff" stroke-width="28" stroke-linecap="round" stroke-linejoin="miter" stroke-miterlimit="8">
    <path d="M 58 108 L 96 262 L 156 154 L 216 262 L 254 108"/>
    <path d="M 150 262 L 150 108 L 288 262 L 288 108" stroke-opacity="0.6"/>
  </g>
</svg>`;

const svgBuffer = Buffer.from(faviconSvg);

const pngSizes = {
  "favicon-16x16.png": 16,
  "favicon-32x32.png": 32,
  "favicon-48x48.png": 48,
  "apple-touch-icon.png": 180,
  "icon-192.png": 192,
  "icon-512.png": 512,
};

const pngBuffers = {};
for (const [name, size] of Object.entries(pngSizes)) {
  const buf = await sharp(svgBuffer).resize(size, size).png().toBuffer();
  writeFileSync(join(publicDir, name), buf);
  pngBuffers[size] = buf;
  console.log(`wrote ${name}`);
}

// Build an .ico embedding PNG images (16, 32, 48). Modern browsers/Windows
// support PNG-compressed ICO entries.
function buildIco(images) {
  const count = images.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(count, 4);

  const dirEntries = [];
  const imageData = [];
  let offset = 6 + count * 16;

  for (const { size, data } of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // width
    entry.writeUInt8(size >= 256 ? 0 : size, 1); // height
    entry.writeUInt8(0, 2); // palette
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(data.length, 8); // size of data
    entry.writeUInt32LE(offset, 12); // offset
    dirEntries.push(entry);
    imageData.push(data);
    offset += data.length;
  }

  return Buffer.concat([header, ...dirEntries, ...imageData]);
}

const ico = buildIco([
  { size: 16, data: pngBuffers[16] },
  { size: 32, data: pngBuffers[32] },
  { size: 48, data: pngBuffers[48] },
]);
writeFileSync(join(publicDir, "favicon.ico"), ico);
console.log("wrote favicon.ico");
