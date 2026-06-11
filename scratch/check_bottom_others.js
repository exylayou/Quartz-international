import { Jimp } from 'jimp';

async function checkBottom(filename) {
  const img = await Jimp.read(`/home/oltonexeter/.gemini/antigravity/brain/895d2826-e59d-49cf-a0c1-dd4734605ec3/${filename}`);
  console.log(`\n--- ${filename} bottom check ---`);
  const midX = Math.floor(img.width / 2);
  for (let y = img.height - 150; y < img.height; y += 10) {
    const color = img.getPixelColor(midX, y);
    const a = color & 0xff;
    const r = (color >> 24) & 0xff;
    const g = (color >> 16) & 0xff;
    const b = (color >> 8) & 0xff;
    console.log(`y=${y}: #${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')} alpha=${a}`);
  }
}

async function main() {
  await checkBottom('media__1780602907818.png'); // Whitish Maple
  await checkBottom('media__1780602958711.png'); // Natural Wood
}

main().catch(console.error);
