import { Jimp, loadFont } from 'jimp';
import path from 'path';

async function run() {
  const dir = '/home/oltonexeter/Antigravity-x64/quartz-international/public/images/visualizer';
  const img = await Jimp.read(path.join(dir, 'viz_white_white.png'));
  
  const width = img.bitmap.width;
  const height = img.bitmap.height;
  
  // Draw grid lines
  const gridInterval = 50;
  
  // Load a font for coordinates (Jimp has built-in fonts)
  // Let's use FONT_SANS_12_BLACK or FONT_SANS_14_BLACK
  // In modern Jimp, we can import it or use a default one.
  // Wait, let's check how Jimp fonts work or just draw colored boxes/markers first
  // to avoid font loading issues, or draw lines.
  // Actually, we can use Jimp's built-in print method if we load a font.
  // Let's load the built-in font:
  let font;
  try {
    // Jimp 1.x or Jimp 0.x font loading:
    // In Jimp 0.x, it's Jimp.loadFont(Jimp.FONT_SANS_16_BLACK)
    // Let's see: Jimp is imported.
    font = await loadFont(path.join(process.cwd(), 'node_modules/jimp/fonts/open-sans/open-sans-16-black/open-sans-16-black.fnt'));
  } catch (err) {
    try {
      // Fallback
      font = await loadFont(path.join(process.cwd(), 'node_modules/jimp/fonts/open-sans-16-black.fnt'));
    } catch (e) {
      console.log("Could not load font, will draw lines without text", e);
    }
  }
  
  // Draw lines
  // Let's draw horizontal lines
  for (let y = 0; y < height; y += gridInterval) {
    for (let x = 0; x < width; x++) {
      // Draw red horizontal line
      const idx = (y * width + x) * 4;
      img.bitmap.data[idx] = 255;   // R
      img.bitmap.data[idx+1] = 0;   // G
      img.bitmap.data[idx+2] = 0;   // B
      img.bitmap.data[idx+3] = 255; // A
    }
  }
  
  // Draw vertical lines
  for (let x = 0; x < width; x += gridInterval) {
    for (let y = 0; y < height; y++) {
      // Draw blue vertical line
      const idx = (y * width + x) * 4;
      img.bitmap.data[idx] = 0;     // R
      img.bitmap.data[idx+1] = 0;   // G
      img.bitmap.data[idx+2] = 255; // B
      img.bitmap.data[idx+3] = 255; // A
    }
  }
  
  // Print coordinates if font loaded
  if (font) {
    for (let y = 0; y < height; y += 100) {
      for (let x = 0; x < width; x += 100) {
        img.print({ font, x: x + 2, y: y + 2, text: `${x},${y}` });
      }
    }
  }
  
  const outputPath = path.join(dir, 'viz_white_white_grid.png');
  await img.write(outputPath);
  console.log(`Saved grid image to ${outputPath}`);
}

run().catch(console.error);
