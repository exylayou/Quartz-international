import { Jimp } from 'jimp';
import fs from 'fs';
import path from 'path';

async function run() {
  const dir = '/home/oltonexeter/Antigravity-x64/quartz-international/public/images/visualizer';
  
  const white = await Jimp.read(path.join(dir, 'viz_white_white.png'));
  const mask = await Jimp.read(path.join(dir, 'countertop_mask.png'));
  
  const width = white.bitmap.width;
  const height = white.bitmap.height;
  const whiteData = white.bitmap.data;
  const maskData = mask.bitmap.data;
  
  // Overlay red on masked pixels
  for (let i = 0; i < whiteData.length; i += 4) {
    if (maskData[i + 3] > 0) { // If mask is opaque
      // Blend with red color (50% opacity)
      whiteData[i] = Math.round(whiteData[i] * 0.5 + 255 * 0.5); // R
      whiteData[i+1] = Math.round(whiteData[i+1] * 0.5); // G
      whiteData[i+2] = Math.round(whiteData[i+2] * 0.5); // B
    }
  }
  
  await white.write(path.join(dir, 'mask_overlay.png'));
  console.log('Saved mask_overlay.png');
}

run().catch(console.error);
