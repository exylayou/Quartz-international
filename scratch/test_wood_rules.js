import { Jimp } from 'jimp';
import path from 'path';

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
  const imgWood = await Jimp.read(path.join(dir, 'viz_wood_grey.png'));
  const width = imgWood.bitmap.width;
  const height = imgWood.bitmap.height;
  const wood = imgWood.bitmap.data;
  
  const polyGeo1 = [
    [[0, 538], [250, 532], [250, 578], [0, 592]],
    [[420, 523], [520, 523], [520, 562], [420, 568]],
    [[245, 583], [785, 533], [785, 552], [450, 637]],
    [[245, 583], [450, 637], [450, 928], [245, 718]],
    [[0, 632], [148, 722], [148, 1024], [0, 1024]]
  ];
  
  const thresholds = [30, 40, 50, 60, 70];
  
  for (const diffThresh of thresholds) {
    let count = 0;
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        let inRegion = false;
        for (const poly of polyGeo1) {
          if (isPointInPolygon(x, y, poly)) {
            inRegion = true;
            break;
          }
        }
        
        if (inRegion) {
          const i = (y * width + x) * 4;
          const r = wood[i];
          const g = wood[i+1];
          const b = wood[i+2];
          const bright = (r + g + b) / 3;
          const diff = Math.max(r, g, b) - Math.min(r, g, b);
          
          if (bright > 70 && diff < diffThresh) {
            count++;
          }
        }
      }
    }
    console.log(`diff < ${diffThresh}: matched ${count} pixels`);
  }
}

run().catch(console.error);
