import { Jimp } from 'jimp';
import path from 'path';

async function run() {
  const dir = '/home/oltonexeter/Antigravity-x64/quartz-international/public/images/visualizer';
  
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
  
  const mask = new Jimp({ width, height, color: 0x00000000 });
  const maskData = mask.bitmap.data;
  
  console.log("Analyzing countertop condition: maxVar > 100 && diffWN < 55...");
  
  const yStats = new Array(height).fill(0);
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      
      const wR = white[i], wG = white[i+1], wB = white[i+2];
      const nR = navy[i], nG = navy[i+1], nB = navy[i+2];
      const wdR = wood[i], wdG = wood[i+1], wdB = wood[i+2];
      const gR = grey[i], gG = grey[i+1], gB = grey[i+2];
      
      const rVar = Math.max(wR, nR, wdR, gR) - Math.min(wR, nR, wdR, gR);
      const gVar = Math.max(wG, nG, wdG, gG) - Math.min(wG, nG, wdG, gG);
      const bVar = Math.max(wB, nB, wdB, gB) - Math.min(wB, nB, wdB, gB);
      const maxVar = Math.max(rVar, gVar, bVar);
      
      const diffWN = Math.max(Math.abs(wR - nR), Math.abs(wG - nG), Math.abs(wB - nB));
      
      // Let's test the new condition
      if (maxVar > 100 && diffWN < 55) {
        yStats[y]++;
        maskData[i] = 255;
        maskData[i+1] = 255;
        maskData[i+2] = 255;
        maskData[i+3] = 255;
      }
    }
  }
  
  for (let i = 0; i < height; i += 32) {
    let sum = 0;
    for (let j = 0; j < 32 && (i + j) < height; j++) {
      sum += yStats[i+j];
    }
    if (sum > 0) {
      console.log(`Y: ${i.toString().padStart(4, ' ')}-${(i+31).toString().padStart(4, ' ')} | Matched pixels: ${sum.toString().padStart(6, ' ')}`);
    }
  }
  
  await mask.write(path.join(dir, 'test_countertop_mask.png'));
  console.log("Saved test_countertop_mask.png");
}

run().catch(console.error);
