import { Jimp } from 'jimp';
import path from 'path';

async function run() {
  const dir = '/home/oltonexeter/Antigravity-x64/quartz-international/public/images/visualizer';
  const imgWhite = await Jimp.read(path.join(dir, 'viz_white_white.png'));
  console.log(`Width: ${imgWhite.bitmap.width}, Height: ${imgWhite.bitmap.height}`);
}

run().catch(console.error);
