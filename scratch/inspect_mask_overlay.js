import { Jimp } from 'jimp';
import path from 'path';

async function run() {
  const dir = '/home/oltonexeter/Antigravity-x64/quartz-international/public/images/visualizer';
  const img = await Jimp.read(path.join(dir, 'mask_overlay.png'));
  console.log(`Image dimensions: ${img.bitmap.width}x${img.bitmap.height}`);
  
  let hasAlpha = false;
  let opaqueCount = 0;
  let transparentCount = 0;
  
  for (let i = 0; i < img.bitmap.data.length; i += 4) {
    const alpha = img.bitmap.data[i+3];
    if (alpha < 255) {
      hasAlpha = true;
    }
    if (alpha > 127) {
      opaqueCount++;
    } else {
      transparentCount++;
    }
  }
  
  console.log(`Has alpha channel: ${hasAlpha}`);
  console.log(`Opaque pixels: ${opaqueCount}`);
  console.log(`Transparent pixels: ${transparentCount}`);
}

run().catch(console.error);
