import { Jimp } from 'jimp';

async function main() {
  const image = await Jimp.read('/home/oltonexeter/.gemini/antigravity/brain/ea4590c8-ba3b-4483-9138-41b85531eda6/media__1780152575171.png');
  
  // Find horizontal bounds at y=300
  let minX = image.width;
  let maxX = 0;
  for (let x = 0; x < image.width; x++) {
    const color = image.getPixelColor(x, 300);
    const a = color & 0xff;
    if (a > 50) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
    }
  }
  console.log(`Horizontal bounds at y=300: x=${minX} to x=${maxX} (width=${maxX - minX + 1})`);
  
  // Find vertical bounds of the panels
  let minY = image.height;
  let maxY = 0;
  for (let y = 0; y < image.height; y++) {
    let rowHasPixels = false;
    for (let x = 0; x < image.width; x++) {
      const color = image.getPixelColor(x, y);
      const a = color & 0xff;
      if (a > 50) {
        // Exclude the text and lines (which are above y=160)
        if (y >= 160) {
          rowHasPixels = true;
          break;
        }
      }
    }
    if (rowHasPixels) {
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
  console.log(`Vertical bounds of panels (y >= 160): y=${minY} to y=${maxY} (height=${maxY - minY + 1})`);
}

main().catch(console.error);
