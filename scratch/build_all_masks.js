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
  
  const white = imgWhite.bitmap.data;
  const navy = imgNavy.bitmap.data;
  const wood = imgWood.bitmap.data;
  const grey = imgGrey.bitmap.data;
  
  // Define Polygons for Geometry 1 (White and Wood)
  const polyGeo1 = [
    // 1. Back-left countertop (left of stove)
    [[0, 538], [250, 532], [250, 578], [0, 592]],
    // 2. Back-right countertop (right of stove)
    [[420, 523], [520, 523], [520, 562], [420, 568]],
    // 3. Island top surface
    [[245, 583], [785, 533], [785, 552], [450, 637]],
    // 4. Island waterfall panel
    [[245, 583], [450, 637], [450, 928], [245, 718]],
    // 5. Foreground-left countertop
    [[0, 632], [148, 722], [148, 1024], [0, 1024]]
  ];
  
  // Define Polygons for Geometry 2 (Navy and Grey)
  const polyGeo2 = [
    // 1. Window countertop (left side with sink)
    [[0, 538], [310, 485], [310, 515], [0, 625]],
    // 2. Back wall countertop left of stove
    [[310, 485], [385, 485], [385, 515], [310, 515]],
    // 3. Back wall countertop right of stove
    [[520, 485], [615, 485], [615, 515], [520, 515]],
    // 4. Island top surface
    [[320, 620], [675, 540], [675, 555], [320, 635]],
    // 5. Island waterfall panel
    [[320, 635], [675, 555], [675, 925], [320, 925]]
  ];
  
  // Helper to create and save a mask
  const makeMask = async (sourceData, polygons, rule, filename) => {
    const mask = new Jimp({ width, height, color: 0x00000000 });
    const maskData = mask.bitmap.data;
    let count = 0;
    
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
            count++;
          }
        }
      }
    }
    
    await mask.write(path.join(dir, filename));
    console.log(`Saved ${filename} (${count} pixels)`);
  };
  
  // Rules for each template:
  
  // 1. White: Countertop is solid bright white. Exclude gold faucet, wicker chairs, dark coffee machine.
  const ruleWhite = (r, g, b) => {
    const bright = (r + g + b) / 3;
    // Countertop is bright white, stools and wood/faucet are darker or saturated yellow/brown
    return bright > 200 && (r - b < 25);
  };
  
  // 2. Navy: Countertop is Calacatta (white with grey veins). Gold sink/faucet are around 140.
  // Stools are wood/wicker. Vase has green leaves.
  const ruleNavy = (r, g, b, x, y) => {
    const bright = (r + g + b) / 3;
    
    // Left window countertop has the gold sink. The gold sink has high red/green but low blue (yellowish).
    // So we check bright > 130 and r - b < 40
    // Stool wicker is warm brown, so r - b > 40.
    // Gold faucet is yellowish.
    // Also, we can filter out the stools by coordinate or color:
    // Stools are at X > 620, Y > 570. In this area, we can be stricter:
    if (x > 620 && y > 570) {
      return bright > 170 && r - b < 30; // Strictly countertop white
    }
    
    // Vase is at X: 490-560, Y: 420-570.
    if (x >= 490 && x <= 560 && y >= 450 && y <= 570) {
      return false; // Exclude vase area
    }
    
    // Faucet and sink are at X: 100-280, Y: 450-580
    if (x >= 100 && x <= 280 && y >= 450 && y <= 585) {
      // Exclude gold basin and faucet
      return bright > 185 && r - b < 20;
    }
    
    return bright > 130 && r - b < 35;
  };
  
  // 3. Wood: Countertop is solid grey. Cabinets and stools are warm brown wood.
  // Faucet and sink are black.
  const ruleWood = (r, g, b) => {
    const bright = (r + g + b) / 3;
    // Countertop is neutral grey, low color difference.
    const diff = Math.max(r, g, b) - Math.min(r, g, b);
    return bright > 80 && diff < 20;
  };
  
  // 4. Grey: Countertop is black with white veins. Stools are black chairs.
  // Faucet is black.
  // Since the countertop is black/dark, it is hard to separate from black chairs by color.
  // But we can exclude the chairs and faucet by coordinates!
  // Stools: X > 620, Y > 575.
  // Faucet & Sink: X: 100-280, Y: 450-585.
  // Vase: X: 490-560, Y: 450-570.
  const ruleGrey = (r, g, b, x, y) => {
    // Exclude stools on the right
    if (x > 620 && y > 575) {
      return false;
    }
    // Exclude faucet & sink on left window
    if (x >= 100 && x <= 280 && y >= 450 && y <= 585) {
      return false;
    }
    // Exclude vase in middle
    if (x >= 490 && x <= 560 && y >= 450 && y <= 570) {
      return false;
    }
    // The rest of the region is countertop!
    return true;
  };
  
  // Build the masks
  await makeMask(white, polyGeo1, ruleWhite, 'mask_white.png');
  await makeMask(navy, polyGeo2, ruleNavy, 'mask_navy.png');
  await makeMask(wood, polyGeo1, ruleWood, 'mask_wood.png');
  await makeMask(grey, polyGeo2, ruleGrey, 'mask_grey.png');
}

run().catch(console.error);
