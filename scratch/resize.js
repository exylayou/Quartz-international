import { Jimp } from 'jimp';
import path from 'path';

async function main() {
  try {
    const inputPath = '/home/oltonexeter/.gemini/antigravity/brain/e2e958a6-e8eb-48e7-8f71-345055f1785f/media__1781840643415.png';
    console.log('Loading image from:', inputPath);
    const image = await Jimp.read(inputPath);
    console.log('Resizing image to 800x640...');
    image.resize({ w: 800, h: 640 });
    const outputPath = path.join(process.cwd(), 'src', 'assets', 'images', 'client_kstone_toronto_condo.jpg');
    console.log('Writing to:', outputPath);
    await image.write(outputPath);
    console.log('Done!');
  } catch (err) {
    console.error('Error during resize:', err);
  }
}

main();
