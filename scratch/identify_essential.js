import { Jimp } from 'jimp';

const files = [
  'media__1780602907818.png',
  'media__1780602907857.png',
  'media__1780602932564.jpg',
  'media__1780602958711.png'
];

async function identify(filename) {
  const filePath = `/home/oltonexeter/.gemini/antigravity/brain/895d2826-e59d-49cf-a0c1-dd4734605ec3/${filename}`;
  const image = await Jimp.read(filePath);

  // We sample 100 pixels around the center to find the average color
  let sumR = 0, sumG = 0, sumB = 0, count = 0;
  const startX = Math.floor(image.width * 0.4);
  const endX = Math.floor(image.width * 0.6);
  const startY = Math.floor(image.height * 0.4);
  const endY = Math.floor(image.height * 0.6);

  for (let y = startY; y < endY; y += 5) {
    for (let x = startX; x < endX; x += 5) {
      const color = image.getPixelColor(x, y);
      const r = (color >> 24) & 0xff;
      const g = (color >> 16) & 0xff;
      const b = (color >> 8) & 0xff;
      const a = color & 0xff;
      if (a > 100) {
        sumR += r;
        sumG += g;
        sumB += b;
        count++;
      }
    }
  }

  const avgR = Math.round(sumR / count);
  const avgG = Math.round(sumG / count);
  const avgB = Math.round(sumB / count);
  console.log(`${filename}: avg RGB = #${avgR.toString(16).padStart(2,'0')}${avgG.toString(16).padStart(2,'0')}${avgB.toString(16).padStart(2,'0')} (R=${avgR}, G=${avgG}, B=${avgB}) count=${count}`);
}

async function main() {
  for (const file of files) {
    await identify(file);
  }
}

main().catch(console.error);
