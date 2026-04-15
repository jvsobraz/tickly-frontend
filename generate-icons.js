/**
 * Gerador de ícones PWA para o Tickly
 * Uso: node generate-icons.js
 * Requer: npm install sharp (instale antes de rodar)
 */
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const svgPath = path.join(__dirname, 'src/assets/icons/icon-base.svg');
const outDir = path.join(__dirname, 'src/assets/icons');

async function generate() {
  const svg = fs.readFileSync(svgPath);
  for (const size of sizes) {
    await sharp(svg)
      .resize(size, size)
      .png()
      .toFile(path.join(outDir, `icon-${size}.png`));
    console.log(`✓ icon-${size}.png`);
  }
  console.log('\nÍcones gerados com sucesso!');
}

generate().catch(console.error);
