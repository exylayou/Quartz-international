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
  
  // Load templates
  const imgWhite = await Jimp.read(path.join(dir, 'viz_white_white.png'));
  const imgNavy = await Jimp.read(path.join(dir, 'viz_navy_calacatta.png'));
  const imgWood = await Jimp.read(path.join(dir, 'viz_wood_grey.png'));
  const imgGrey = await Jimp.read(path.join(dir, 'viz_grey_black.png'));
  
  const width = imgWhite.bitmap.width;
  const height = imgWhite.bitmap.height;
  
  // Polygons for Geometry 1 (White)
  const polyWhite = [
    [[0, 538], [250, 532], [250, 578], [0, 592]],
    [[420, 523], [520, 523], [520, 562], [420, 568]],
    [[245, 583], [785, 533], [785, 552], [450, 637]],
    [[245, 583], [450, 637], [450, 928], [245, 718]],
    [[0, 632], [148, 722], [148, 1024], [0, 1024]]
  ];
  
  // Polygons for Geometry 2 (Navy and Grey)
  const polyNavyGrey = [
    [[0, 538], [310, 485], [310, 515], [0, 625]],
    [[310, 485], [385, 485], [385, 515], [310, 515]],
    [[520, 485], [615, 485], [615, 515], [520, 515]],
    [[320, 620], [675, 540], [675, 555], [320, 635]],
    [[320, 635], [675, 555], [675, 925], [320, 925]]
  ];
  
  // Polygons for Geometry 3 (Wood)
  const polyWood = [
    [[0, 540], [290, 540], [290, 580], [0, 595]],
    [[410, 535], [550, 535], [550, 570], [410, 570]],
    [[410, 640], [840, 548], [840, 563], [580, 685]],
    [[410, 640], [580, 685], [580, 925], [410, 785]],
    [[0, 615], [230, 725], [230, 1024], [0, 1024]]
  ];
  
  const makeMaskAndOverlay = async (img, polygons, rule, baseName, maskName, overlayName) => {
    const mask = new Jimp({ width, height, color: 0x00000000 });
    const maskData = mask.bitmap.data;
    const sourceData = img.bitmap.data;
    
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        let inRegion = false;
        for (const poly of polygons) {
          if (isPointInPolygon(x, y, poly)) {
            inRegion = true;
            break;
          }
        }
        
        if (inRegion) {
          const i = (y * width + x) * 4;
          const r = sourceData[i];
          const g = sourceData[i+1];
          const b = sourceData[i+2];
          
          if (rule(r, g, b, x, y)) {
            maskData[i] = 255;
            maskData[i+1] = 255;
            maskData[i+2] = 255;
            maskData[i+3] = 255;
          }
        }
      }
    }
    
    await mask.write(path.join(dir, maskName));
    
    // Overlay
    const overlay = img.clone();
    const overlayData = overlay.bitmap.data;
    for (let i = 0; i < overlayData.length; i += 4) {
      if (maskData[i + 3] > 0) {
        overlayData[i] = Math.round(overlayData[i] * 0.5 + 255 * 0.5);
        overlayData[i+1] = Math.round(overlayData[i+1] * 0.5);
        overlayData[i+2] = Math.round(overlayData[i+2] * 0.5);
      }
    }
    
    await overlay.write(path.join(dir, overlayName));
    console.log(`Created ${maskName} and ${overlayName}`);
  };
  
  // 1. White rules
  const ruleWhite = (r, g, b, x, y) => {
    const bright = (r + g + b) / 3;
    // Exclude sink/faucet and stools
    if ((x >= 485 && x <= 610 && y >= 545 && y <= 620) || (x > 500 && y > 575)) {
      return bright > 200 && (r - b < 25);
    }
    return true;
  };
  
  // 2. Navy rules
  const ruleNavy = (r, g, b, x, y) => {
    const bright = (r + g + b) / 3;
    
    // Exclude stools on right
    if (x > 620 && y > 570) {
      return bright > 170 && r - b < 30;
    }
    // Exclude vase area
    if (x >= 490 && x <= 560 && y >= 450 && y <= 570) {
      return false;
    }
    // Exclude gold faucet & sink
    if (x >= 100 && x <= 280 && y >= 450 && y <= 585) {
      return bright > 170 && r - b < 25;
    }
    return true;
  };
  
  // 3. Wood rules
  const ruleWood = (r, g, b, x, y) => {
    // Exclude faucet & sink
    if (x >= 480 && x <= 600 && y >= 540 && y <= 620) {
      return false;
    }
    // Exclude fruit bowl and bread board
    if (x >= 590 && x <= 820 && y >= 570 && y <= 640) {
      return false;
    }
    return true;
  };
  
  // 4. Grey rules
  const ruleGrey = (r, g, b, x, y) => {
    const bright = (r + g + b) / 3;
    // Exclude stools on the right
    if (x > 620 && y > 575) {
      return false;
    }
    // Exclude vase in middle
    if (x >= 490 && x <= 560 && y >= 450 && y <= 570) {
      return false;
    }
    // Exclude metallic sink and faucet
    if (x >= 100 && x <= 280 && y >= 450 && y <= 585) {
      return bright < 80;
    }
    return true;
  };
  
  await makeMaskAndOverlay(imgWhite, polyWhite, ruleWhite, 'viz_white_white.png', 'mask_white.png', 'white_overlay.png');
  await makeMaskAndOverlay(imgNavy, polyNavyGrey, ruleNavy, 'viz_navy_calacatta.png', 'mask_navy.png', 'navy_overlay.png');
  await makeMaskAndOverlay(imgWood, polyWood, ruleWood, 'viz_wood_grey.png', 'mask_wood.png', 'wood_overlay.png');
  await makeMaskAndOverlay(imgGrey, polyNavyGrey, ruleGrey, 'viz_grey_black.png', 'mask_grey.png', 'grey_overlay.png');
}

run().catch(console.error);
