import { Jimp } from 'jimp';
import path from 'path';

// Helper to check if a point is inside a polygon using ray-casting algorithm
function isPointInPolygon(x, y, vs) {
  let inside = false;
  for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
    const xi = vs[i][0], yi = vs[i][1];
    const xj = vs[j][0], yj = vs[j][1];
    
    const intersect = ((yi > y) !== (yj > y))
        && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
    if (intersect) inside = !inside;
  }
  return inside;
}

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
  
  // Define our 5 countertop polygons
  const polygons = [
    // 1. Back-left countertop
    [[0, 538], [140, 532], [140, 578], [0, 592]],
    // 2. Back-right countertop
    [[420, 523], [520, 523], [520, 562], [420, 568]],
    // 3. Island top surface
    [[245, 583], [785, 533], [785, 552], [450, 637]],
    // 4. Island waterfall panel
    [[245, 583], [450, 637], [450, 928], [245, 718]],
    // 5. Foreground-left countertop
    [[0, 632], [148, 722], [148, 1024], [0, 1024]]
  ];
  
  const mask = new Jimp({ width, height, color: 0x00000000 });
  const maskData = mask.bitmap.data;
  
  console.log("Generating hybrid mask...");
  
  let totalInside = 0;
  let totalMasked = 0;
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let inCountertopRegion = false;
      for (const poly of polygons) {
        if (isPointInPolygon(x, y, poly)) {
          inCountertopRegion = true;
          break;
        }
      }
      
      if (inCountertopRegion) {
        totalInside++;
        
        const i = (y * width + x) * 4;
        const wR = white[i], wG = white[i+1], wB = white[i+2];
        const nR = navy[i], nG = navy[i+1], nB = navy[i+2];
        const wdR = wood[i], wdG = wood[i+1], wdB = wood[i+2];
        const gR = grey[i], gG = grey[i+1], gB = grey[i+2];
        
        const rVar = Math.max(wR, nR, wdR, gR) - Math.min(wR, nR, wdR, gR);
        const gVar = Math.max(wG, nG, wdG, gG) - Math.min(wG, nG, wdG, gG);
        const bVar = Math.max(wB, nB, wdB, gB) - Math.min(wB, nB, wdB, gB);
        const maxVar = Math.max(rVar, gVar, bVar);
        
        // Inside countertop geometry, we only filter out static parts (like stool backs/legs and faucet)
        // by requiring some variance.
        // Let's test a low threshold of maxVar > 20
        if (maxVar > 20) {
          maskData[i] = 255;
          maskData[i+1] = 255;
          maskData[i+2] = 255;
          maskData[i+3] = 255;
          totalMasked++;
        }
      }
    }
  }
  
  console.log(`Region pixels: ${totalInside}, Masked pixels: ${totalMasked} (${Math.round(totalMasked / totalInside * 100)}%)`);
  
  const maskPath = path.join(dir, 'countertop_mask.png');
  await mask.write(maskPath);
  console.log(`Saved countertop_mask.png to ${maskPath}`);
  
  // Create overlay
  const whiteOverlay = await Jimp.read(path.join(dir, 'viz_white_white.png'));
  const whiteOverlayData = whiteOverlay.bitmap.data;
  
  for (let i = 0; i < whiteOverlayData.length; i += 4) {
    if (maskData[i + 3] > 0) {
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
