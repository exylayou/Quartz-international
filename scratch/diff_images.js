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
  
  const whiteData = imgWhite.bitmap.data;
  const navyData = imgNavy.bitmap.data;
  const woodData = imgWood.bitmap.data;
  const greyData = imgGrey.bitmap.data;
  
  // Create mask image
  const mask = new Jimp({ width, height, color: 0x000000ff });
  const maskData = mask.bitmap.data;
  
  for (let i = 0; i < whiteData.length; i += 4) {
    // R, G, B channels
    const wR = whiteData[i], wG = whiteData[i+1], wB = whiteData[i+2];
    const nR = navyData[i], nG = navyData[i+1], nB = navyData[i+2];
    const wdR = woodData[i], wdG = woodData[i+1], wdB = woodData[i+2];
    const gR = greyData[i], gG = greyData[i+1], gB = greyData[i+2];
    
    // Variance in R, G, B channels across the 4 images
    const rVar = Math.max(wR, nR, wdR, gR) - Math.min(wR, nR, wdR, gR);
    const gVar = Math.max(wG, nG, wdG, gG) - Math.min(wG, nG, wdG, gG);
    const bVar = Math.max(wB, nB, wdB, gB) - Math.min(wB, nB, wdB, gB);
    const maxVar = Math.max(rVar, gVar, bVar);
    
    if (maxVar > 15) {
      // Something changed! Mark it white.
      maskData[i] = 255;
      maskData[i+1] = 255;
      maskData[i+2] = 255;
      maskData[i+3] = 255;
    } else {
      // Nothing changed. Leave it black.
      maskData[i] = 0;
      maskData[i+1] = 0;
      maskData[i+2] = 0;
      maskData[i+3] = 255;
    }
  }
  
  await mask.write(path.join(dir, 'diff_mask.png'));
  console.log('Saved diff_mask.png');
}

run().catch(console.error);
