import { Jimp } from 'jimp';
import fs from 'fs';
import path from 'path';

async function run() {
  const dir = '/home/oltonexeter/Antigravity-x64/quartz-international/public/images/visualizer';
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.png'));
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    try {
      const image = await Jimp.read(filePath);
      console.log(file, 'width:', image.bitmap.width, 'height:', image.bitmap.height);
    } catch (err) {
      console.error('Error reading', file, err);
    }
  }
}

run().catch(console.error);
