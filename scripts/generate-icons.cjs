const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const SOURCE = path.join(__dirname, '..', 'public', 'sunflower-icon.png');
const ANDROID_RES = path.join(__dirname, '..', 'android', 'app', 'src', 'main', 'res');

const sizes = {
  'mipmap-mdpi': { launcher: 48, foreground: 43, round: 48 },
  'mipmap-hdpi': { launcher: 72, foreground: 65, round: 72 },
  'mipmap-xhdpi': { launcher: 96, foreground: 87, round: 96 },
  'mipmap-xxhdpi': { launcher: 144, foreground: 131, round: 144 },
  'mipmap-xxxhdpi': { launcher: 192, foreground: 173, round: 192 },
};

async function generate() {
  console.log('Generating icons from', SOURCE);

  // Favicon 48x48 for public/
  await sharp(SOURCE)
    .resize(48, 48, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(__dirname, '..', 'public', 'favicon.png'));
  console.log('  public/favicon.png (48x48)');

  // Electron icon 256x256
  await sharp(SOURCE)
    .resize(256, 256, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(__dirname, '..', 'electron', 'icon.png'));
  console.log('  electron/icon.png (256x256)');

  // Android mipmap icons
  for (const [folder, dims] of Object.entries(sizes)) {
    const dir = path.join(ANDROID_RES, folder);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    // ic_launcher.png
    await sharp(SOURCE)
      .resize(dims.launcher, dims.launcher, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(path.join(dir, 'ic_launcher.png'));
    console.log(`  ${folder}/ic_launcher.png (${dims.launcher}x${dims.launcher})`);

    // ic_launcher_round.png
    await sharp(SOURCE)
      .resize(dims.round, dims.round, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(path.join(dir, 'ic_launcher_round.png'));
    console.log(`  ${folder}/ic_launcher_round.png (${dims.round}x${dims.round})`);

    // ic_launcher_foreground.png
    await sharp(SOURCE)
      .resize(dims.foreground, dims.foreground, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(path.join(dir, 'ic_launcher_foreground.png'));
    console.log(`  ${folder}/ic_launcher_foreground.png (${dims.foreground}x${dims.foreground})`);
  }

  // Also update drawable-v24 foreground (used by adaptive icon)
  const drawableV24 = path.join(ANDROID_RES, 'drawable-v24');
  if (fs.existsSync(drawableV24)) {
    await sharp(SOURCE)
      .resize(173, 173, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(path.join(drawableV24, 'ic_launcher_foreground.png'));
    console.log('  drawable-v24/ic_launcher_foreground.png (173x173)');
  }

  console.log('\nAll icons generated!');
}

generate().catch(err => { console.error(err); process.exit(1); });
