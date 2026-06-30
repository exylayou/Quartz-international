import { Jimp } from 'jimp';
import path from 'path';

async function run() {
  const dir = '/home/oltonexeter/Antigravity-x64/quartz-international/public/images/visualizer';
  const mask = await Jimp.read(path.join(dir, 'countertop_mask.png'));
  const width = mask.bitmap.width;
  const height = mask.bitmap.height;
  const data = mask.bitmap.data;
  
  console.log(`Mask dimensions: ${width}x${height}`);
  const yCounts = new Array(height).fill(0);
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const alpha = data[i+3];
      if (alpha > 127) {
        yCounts[y]++;
      }
    }
  }
  
  for (let i = 0; i < height; i += 32) {
    let sum = 0;
    for (let j = 0; j < 32 && (i + j) < height; j++) {
      sum += yCounts[i+j];
    }
    if (sum > 0) {
      console.log(`Y: ${i.toString().padStart(4, ' ')}-${(i+31).toString().padStart(4, ' ')} | Opaque pixels: ${sum.toString().padStart(6, ' ')}`);
    }
  }
}

run().catch(console.error);
