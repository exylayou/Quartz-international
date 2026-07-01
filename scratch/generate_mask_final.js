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
  
  console.log("Generating final countertop mask...");
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      
      const wR = white[i], wG = white[i+1], wB = white[i+2];
      const nR = navy[i], nG = navy[i+1], nB = navy[i+2];
      const wdR = wood[i], wdG = wood[i+1], wdB = wood[i+2];
      const gR = grey[i], gG = grey[i+1], gB = grey[i+2];
      
      const wBright = (wR + wG + wB) / 3;
      const nBright = (nR + nG + nB) / 3;
      const gBright = (gR + gG + gB) / 3;
      
      const rVar = Math.max(wR, nR, wdR, gR) - Math.min(wR, nR, wdR, gR);
      const gVar = Math.max(wG, nG, wdG, gG) - Math.min(wG, nG, wdG, gG);
      const bVar = Math.max(wB, nB, wdB, gB) - Math.min(wB, nB, wdB, gB);
      const maxVar = Math.max(rVar, gVar, bVar);
      
      // Refined Countertop logic:
      // 1. Lower half of the image
      // 2. Light in White render
      // 3. Light in Navy render
      // 4. Dark in Grey/Black render
      // 5. Significant variance
      if (y >= 500 && wBright > 160 && nBright > 150 && gBright < 105 && maxVar > 80) {
        maskData[i] = 255;
        maskData[i+1] = 255;
        maskData[i+2] = 255;
        maskData[i+3] = 255;
      }
    }
  }
  
  const maskPath = path.join(dir, 'countertop_mask.png');
  await mask.write(maskPath);
  console.log(`Saved countertop_mask.png to ${maskPath}`);
  
  // Now, generate the visual overlay for validation
  const whiteOverlay = await Jimp.read(path.join(dir, 'viz_white_white.png'));
  const whiteOverlayData = whiteOverlay.bitmap.data;
  
  for (let i = 0; i < whiteOverlayData.length; i += 4) {
    if (maskData[i + 3] > 0) { // If mask is opaque
      // Overlay with transparent red (blend 50% red)
      whiteOverlayData[i] = Math.round(whiteOverlayData[i] * 0.5 + 255 * 0.5);
      whiteOverlayData[i+1] = Math.round(whiteOverlayData[i+1] * 0.5);
      whiteOverlayData[i+2] = Math.round(whiteOverlayData[i+2] * 0.5);
    }
  }
  
  const overlayPath = path.join(dir, 'mask_overlay.png');
  await whiteOverlay.write(overlayPath);
  console.log(`Saved mask_overlay.png to ${overlayPath}`);
}

run().catch(console.error);
