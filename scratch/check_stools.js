import { Jimp } from 'jimp';
import path from 'path';

async function run() {
  const dir = '/home/oltonexeter/Antigravity-x64/quartz-international/public/images/visualizer';
  
  const imgWhite = await Jimp.read(path.join(dir, 'viz_white_white.png'));
  const imgNavy = await Jimp.read(path.join(dir, 'viz_navy_calacatta.png'));
  const imgWood = await Jimp.read(path.join(dir, 'viz_wood_grey.png'));
  const imgGrey = await Jimp.read(path.join(dir, 'viz_grey_black.png'));
  
  const width = imgWhite.bitmap.width;
  const white = imgWhite.bitmap.data;
  const navy = imgNavy.bitmap.data;
  const wood = imgWood.bitmap.data;
  const grey = imgGrey.bitmap.data;
  
  const coords = [
    [550, 660], // Stool back
    [580, 750], // Stool seat
    [680, 700], // Stool 2 back
    [700, 780]  // Stool 2 seat
  ];
  
  for (const [x, y] of coords) {
    const i = (y * width + x) * 4;
    console.log(`Coords (${x}, ${y}):`);
    console.log(`  White: [${white[i]}, ${white[i+1]}, ${white[i+2]}]`);
    console.log(`  Navy:  [${navy[i]}, ${navy[i+1]}, ${navy[i+2]}]`);
    console.log(`  Wood:  [${wood[i]}, ${wood[i+1]}, ${wood[i+2]}]`);
    console.log(`  Grey:  [${grey[i]}, ${grey[i+1]}, ${grey[i+2]}]`);
  }
}

run().catch(console.error);
