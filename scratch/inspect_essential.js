import { Jimp } from 'jimp';

const files = [
  'media__1780602907818.png',
  'media__1780602907857.png',
  'media__1780602932564.jpg',
  'media__1780602958711.png'
];

async function inspect(filename) {
  const filePath = `/home/oltonexeter/.gemini/antigravity/brain/895d2826-e59d-49cf-a0c1-dd4734605ec3/${filename}`;
  const image = await Jimp.read(filePath);
  console.log(`\n--- Inspecting ${filename} ---`);
  console.log(`Dimensions: ${image.width}x${image.height}`);

  // We sample pixel transparency (or difference from white/background if it's a JPEG or opaque PNG)
  // Let's sample the corners first.
  const cornerVal = image.getPixelColor(0, 0);
  const bgR = (cornerVal >> 24) & 0xff;
  const bgG = (cornerVal >> 16) & 0xff;
  const bgB = (cornerVal >> 8) & 0xff;
  const bgA = cornerVal & 0xff;
  console.log(`Corner (0,0) RGBA: #${bgR.toString(16).padStart(2,'0')}${bgG.toString(16).padStart(2,'0')}${bgB.toString(16).padStart(2,'0')} alpha=${bgA}`);

  let minX = image.width;
  let maxX = 0;
  let minY = image.height;
  let maxY = 0;

  for (let y = 0; y < image.height; y++) {
    for (let x = 0; x < image.width; x++) {
      const color = image.getPixelColor(x, y);
      const r = (color >> 24) & 0xff;
      const g = (color >> 16) & 0xff;
      const b = (color >> 8) & 0xff;
      const a = color & 0xff;

      // Determine if pixel is different from corner color / background
      // Or if it is opaque while background is transparent.
      let isDoor = false;
      if (bgA === 0) {
        // If background is transparent
        if (a > 50) isDoor = true;
      } else {
        // If background is opaque (e.g. JPEG or white/grey background)
        const diff = Math.abs(r - bgR) + Math.abs(g - bgG) + Math.abs(b - bgB);
        if (diff > 25) isDoor = true;
      }

      if (isDoor) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  console.log(`Detected bounding box:`);
  console.log(`x: ${minX} to ${maxX} (width: ${maxX - minX + 1})`);
  console.log(`y: ${minY} to ${maxY} (height: ${maxY - minY + 1})`);
}

async function main() {
  for (const file of files) {
    await inspect(file);
  }
}

main().catch(console.error);
