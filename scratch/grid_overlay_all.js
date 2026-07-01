import { Jimp } from 'jimp';
import path from 'path';

async function run() {
  const dir = '/home/oltonexeter/Antigravity-x64/quartz-international/public/images/visualizer';
  
  const files = [
    { name: 'viz_white_white.png', out: 'viz_white_white_grid.png' },
    { name: 'viz_navy_calacatta.png', out: 'viz_navy_grid.png' },
    { name: 'viz_wood_grey.png', out: 'viz_wood_grid.png' },
    { name: 'viz_grey_black.png', out: 'viz_grey_grid.png' }
  ];
  
  for (const file of files) {
    const img = await Jimp.read(path.join(dir, file.name));
    const width = img.bitmap.width;
    const height = img.bitmap.height;
    
    // Draw red horizontal lines every 50px
    for (let y = 0; y < height; y += 50) {
      for (let x = 0; x < width; x++) {
        const idx = (y * width + x) * 4;
        img.bitmap.data[idx] = 255;
        img.bitmap.data[idx+1] = 0;
        img.bitmap.data[idx+2] = 0;
        img.bitmap.data[idx+3] = 255;
      }
    }
    
    // Draw blue vertical lines every 50px
    for (let x = 0; x < width; x += 50) {
      for (let y = 0; y < height; y++) {
        const idx = (y * width + x) * 4;
        img.bitmap.data[idx] = 0;
        img.bitmap.data[idx+1] = 0;
        img.bitmap.data[idx+2] = 255;
        img.bitmap.data[idx+3] = 255;
      }
    }
    
    const outputPath = path.join(dir, file.out);
    await img.write(outputPath);
    console.log(`Saved ${file.out}`);
  }
}

run().catch(console.error);
