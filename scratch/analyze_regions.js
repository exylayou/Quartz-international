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
  
  // Let's sample specific points:
  // Countertop points:
  const countertopPoints = [
    [50, 560],  // Back-left countertop
    [450, 540], // Back-right countertop
    [400, 600], // Island top (left area)
    [320, 680], // Island waterfall top-ish
    [50, 800]   // Foreground-left countertop
  ];
  
  // Stool points:
  const stoolPoints = [
    [550, 660], // Stool 1 back
    [580, 750], // Stool 1 seat
    [680, 700], // Stool 2 back
    [700, 780]  // Stool 2 seat
  ];
  
  // Faucet point:
  const faucetPoints = [
    [550, 520], // Faucet stem
    [545, 545]  // Faucet base
  ];
  
  console.log("=== White Image ===");
  printStats(white, width, countertopPoints, "Countertop");
  printStats(white, width, stoolPoints, "Stools");
  printStats(white, width, faucetPoints, "Faucet");
  
  console.log("\n=== Wood Image ===");
  printStats(wood, width, countertopPoints, "Countertop");
  printStats(wood, width, stoolPoints, "Stools");
  printStats(wood, width, faucetPoints, "Faucet");
  
  console.log("\n=== Grey Image ===");
  printStats(grey, width, countertopPoints, "Countertop");
  printStats(grey, width, stoolPoints, "Stools");
  printStats(grey, width, faucetPoints, "Faucet");
}

function printStats(data, width, points, label) {
  console.log(`--- ${label} ---`);
  for (const [x, y] of points) {
    const i = (y * width + x) * 4;
    const r = data[i], g = data[i+1], b = data[i+2];
    const bright = (r + g + b) / 3;
    console.log(`Point (${x}, ${y}): RGB=[${r}, ${g}, ${b}] Brightness=${bright.toFixed(1)}`);
  }
}

run().catch(console.error);
