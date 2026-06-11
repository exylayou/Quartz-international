import { Jimp } from 'jimp';

async function main() {
  const img = await Jimp.read('/home/oltonexeter/.gemini/antigravity/brain/895d2826-e59d-49cf-a0c1-dd4734605ec3/media__1780602932564.jpg');
  console.log(`Dimensions: ${img.width}x${img.height}`);

  // Print colors along the four edges:
  console.log('\nTop edge (y=0):');
  for (let x = 0; x < img.width; x += Math.floor(img.width / 5)) {
    const color = img.getPixelColor(x, 0);
    const r = (color >> 24) & 0xff;
    const g = (color >> 16) & 0xff;
    const b = (color >> 8) & 0xff;
    console.log(`x=${x}, y=0: #${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`);
  }

  console.log('\nBottom edge (y=height-1):');
  for (let x = 0; x < img.width; x += Math.floor(img.width / 5)) {
    const color = img.getPixelColor(x, img.height - 1);
    const r = (color >> 24) & 0xff;
    const g = (color >> 16) & 0xff;
    const b = (color >> 8) & 0xff;
    console.log(`x=${x}, y=${img.height - 1}: #${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`);
  }

  console.log('\nLeft edge (x=0):');
  for (let y = 0; y < img.height; y += Math.floor(img.height / 5)) {
    const color = img.getPixelColor(0, y);
    const r = (color >> 24) & 0xff;
    const g = (color >> 16) & 0xff;
    const b = (color >> 8) & 0xff;
    console.log(`x=0, y=${y}: #${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`);
  }

  console.log('\nRight edge (x=width-1):');
  for (let y = 0; y < img.height; y += Math.floor(img.height / 5)) {
    const color = img.getPixelColor(img.width - 1, y);
    const r = (color >> 24) & 0xff;
    const g = (color >> 16) & 0xff;
    const b = (color >> 8) & 0xff;
    console.log(`x=${img.width - 1}, y=${y}: #${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`);
  }
}

main().catch(console.error);
