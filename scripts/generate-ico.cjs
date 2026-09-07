const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const SOURCE = path.join(__dirname, '..', 'public', 'sunflower-icon.png');
const ICO_PATH = path.join(__dirname, '..', 'electron', 'icon.ico');

const icoSizes = [16, 32, 48, 64, 128, 256];

async function generateIco() {
  console.log('Generating icon.ico from', SOURCE);

  // Generate PNG buffers at each size
  const pngBuffers = [];
  for (const size of icoSizes) {
    const buf = await sharp(SOURCE)
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();
    pngBuffers.push({ size, buf });
    console.log(`  ${size}x${size} PNG: ${buf.length} bytes`);
  }

  // ICO format:
  // Header (6 bytes): reserved(2) + type(2) + count(2)
  // Directory entries (16 bytes each): width(1) + height(1) + colors(1) + reserved(1) + planes(2) + bpp(2) + size(4) + offset(4)
  // PNG data for each size

  const headerSize = 6;
  const dirEntrySize = 16;
  const dataOffset = headerSize + (pngBuffers.length * dirEntrySize);

  // Build ICO buffer
  let totalSize = dataOffset;
  for (const { buf } of pngBuffers) totalSize += buf.length;

  const ico = Buffer.alloc(totalSize);

  // Header
  ico.writeUInt16LE(0, 0);      // Reserved
  ico.writeUInt16LE(1, 2);      // Type: 1 = ICO
  ico.writeUInt16LE(pngBuffers.length, 4); // Count

  // Directory entries + data
  let currentOffset = dataOffset;
  for (let i = 0; i < pngBuffers.length; i++) {
    const { size, buf } = pngBuffers[i];
    const entryOffset = headerSize + (i * dirEntrySize);

    ico.writeUInt8(size < 256 ? size : 0, entryOffset + 0);  // Width
    ico.writeUInt8(size < 256 ? size : 0, entryOffset + 1);  // Height
    ico.writeUInt8(0, entryOffset + 2);  // Colors (0 = >8bpp)
    ico.writeUInt8(0, entryOffset + 3);  // Reserved
    ico.writeUInt16LE(1, entryOffset + 4);  // Planes
    ico.writeUInt16LE(32, entryOffset + 6); // Bits per pixel
    ico.writeUInt32LE(buf.length, entryOffset + 8);  // Size of image data
    ico.writeUInt32LE(currentOffset, entryOffset + 12); // Offset to image data

    // Copy PNG data
    buf.copy(ico, currentOffset);
    currentOffset += buf.length;
  }

  fs.writeFileSync(ICO_PATH, ico);
  console.log(`\nGenerated electron/icon.ico (${ico.length} bytes) with ${pngBuffers.length} sizes`);
}

generateIco().catch(err => { console.error(err); process.exit(1); });
