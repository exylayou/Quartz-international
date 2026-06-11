import { Jimp } from 'jimp';

async function main() {
  console.log('Reading image...');
  const image = await Jimp.read('src/assets/images/high_gloss_doors.png');
  console.log('Original dimensions:', image.width, 'x', image.height);
  
  // Crop the image: remove the top 180px where the small text and lines are
  console.log('Cropping top 180px...');
  image.crop({ x: 0, y: 180, w: image.width, h: image.height - 180 });
  
  console.log('Writing cropped image...');
  await image.write('src/assets/images/high_gloss_doors.png');
  console.log('Done!');
}

main().catch(err => {
  console.error('Error cropping image:', err);
  process.exit(1);
});
