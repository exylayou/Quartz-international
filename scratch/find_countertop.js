import { Jimp } from 'jimp';
import fs from 'fs';
import path from 'path';

async function run() {
  const dir = '/home/oltonexeter/Antigravity-x64/quartz-international/public/images/visualizer';
  
  // Load images
  const imgWhite = await Jimp.read(path.join(dir, 'viz_white_white.png'));
  const imgNavy = await Jimp.read(path.join(dir, 'viz_navy_calacatta.png'));
  const imgWood = await Jimp.read(path.join(dir, 'viz_wood_grey.png'));
  const imgGrey = await Jimp.read(path.join(dir, 'viz_grey_black.png'));
  
  const width = imgWhite.bitmap.width;
  const height = imgWhite.bitmap.height;
  
  const white = imgWhite.bitmap.data;
  const navy = imgNavy.bitmap.data;
  const wood = imgWood.bitmap.data;
  const grey = imgGrey.bitmap.data;
  
  // Create mask image with transparency
  const mask = new Jimp({ width, height, color: 0x00000000 }); // Transparent background
  const maskData = mask.bitmap.data;
  
  for (let i = 0; i < white.length; i += 4) {
    const wR = white[i], wG = white[i+1], wB = white[i+2];
    const nR = navy[i], nG = navy[i+1], nB = navy[i+2];
    const wdR = wood[i], wdG = wood[i+1], wdB = wood[i+2];
    const gR = grey[i], gG = grey[i+1], gB = grey[i+2];
    
    // Variance across all 4 images
    const rVar = Math.max(wR, nR, wdR, gR) - Math.min(wR, nR, wdR, gR);
    const gVar = Math.max(wG, nG, wdG, gG) - Math.min(wG, nG, wdG, gG);
    const bVar = Math.max(wB, nB, wdB, gB) - Math.min(wB, nB, wdB, gB);
    const maxVar = Math.max(rVar, gVar, bVar);
    
    // Difference between white and navy templates
    const diffWN = Math.max(Math.abs(wR - nR), Math.abs(wG - nG), Math.abs(wB - nB));
    
    // Check if it matches the countertop signature
    if (maxVar > 15 && diffWN < 55) {
      // Countertop area: set to solid white (fully opaque)
      maskData[i] = 255;
      maskData[i+1] = 255;
      maskData[i+2] = 255;
      maskData[i+3] = 255;
    } else {
      // Non-countertop area: set to fully transparent
      maskData[i] = 0;
      maskData[i+1] = 0;
      maskData[i+2] = 0;
      maskData[i+3] = 0;
    }
  }
  
  await mask.write(path.join(dir, 'countertop_mask.png'));
  console.log('Saved transparent countertop_mask.png');
}

run().catch(console.error);
