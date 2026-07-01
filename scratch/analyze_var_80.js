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
  
  console.log("Analyzing Y-axis distribution of maxVar > 80...");
  
  const yStats = [];
  for (let y = 0; y < height; y++) {
    let countVar80 = 0;
    
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
      
      if (maxVar > 80) {
        countVar80++;
      }
    }
    
    yStats.push({ y, countVar80 });
  }
  
  for (let i = 0; i < height; i += 32) {
    let sum = 0;
    for (let j = 0; j < 32 && (i + j) < height; j++) {
      sum += yStats[i+j].countVar80;
    }
    console.log(`Y: ${i.toString().padStart(4, ' ')}-${(i+31).toString().padStart(4, ' ')} | Pixels with maxVar > 80: ${sum.toString().padStart(6, ' ')}`);
  }
}

run().catch(console.error);
